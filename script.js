const grid = document.getElementById('grid');
const regionFilter = document.getElementById('region-filter');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-input');

function renderCards(places) {
  grid.innerHTML = '';

  if (places.length === 0) {
    grid.innerHTML = '<p class="empty-msg">Ничего не найдено по выбранным фильтрам</p>';
    return;
  }

  places.forEach(place => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${place.image}" alt="${place.title}" class="card-img">
      <div class="card-body">
        <div class="tags">
          <span class="tag">${place.category}</span>
        </div>
        <h3 class="card-title">${place.title}</h3>
        <p class="card-region">${place.region} обл.</p>
        <p class="card-desc">${place.desc}</p>
        <div class="card-actions">
          <button class="btn btn-secondary" onclick="openModal('${place.id}')">Подробнее</button>
          <button class="btn btn-primary" onclick="focusOnMap(${place.lat}, ${place.lng})">На карте</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

let currentFilteredPlaces = placesData;

function applyFilters() {
  const selectedRegion = regionFilter ? regionFilter.value : 'all';
  const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  currentFilteredPlaces = placesData.filter(place => {
    const matchRegion = (selectedRegion === 'all' || place.region === selectedRegion);
    const matchCategory = (selectedCategory === 'all' || place.category === selectedCategory);
    const matchSearch = !query ||
      place.title.toLowerCase().includes(query) ||
      place.desc.toLowerCase().includes(query) ||
      place.region.toLowerCase().includes(query) ||
      place.category.toLowerCase().includes(query);

    return matchRegion && matchCategory && matchSearch;
  });

  renderCards(currentFilteredPlaces);
  renderMarkers(currentFilteredPlaces);
}

if (regionFilter) regionFilter.addEventListener('change', applyFilters);
if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
if (searchInput) searchInput.addEventListener('input', applyFilters);

renderCards(placesData);
renderMarkers(placesData);


// SVG-иконки для деталей модального окна
const icons = {
  clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  ticket: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path><line x1="13" y1="5" x2="13" y2="19" stroke-dasharray="2"></line></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  compass: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0f766e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>'
};

// Логика модального окна
function openModal(placeId) {
  const place = placesData.find(p => p.id === placeId);
  if (!place) return;

  const modal = document.getElementById('place-modal');
  const img = document.getElementById('modal-img');
  const title = document.getElementById('modal-title');
  const tagsContainer = document.getElementById('modal-tags');
  const desc = document.getElementById('modal-desc');
  const details = document.getElementById('modal-details');
  const siteBtn = document.getElementById('modal-site-btn');
  const routeBtn = document.getElementById('modal-route-btn');

  if (img) {
    img.src = place.image;
    img.alt = place.title;
  }
  if (title) title.textContent = place.title;
  if (desc) desc.textContent = place.fullDesc || place.desc;

  if (tagsContainer) {
    tagsContainer.innerHTML = '';
    const tags = [place.category, `${place.region} область`];
    if (place.tags && Array.isArray(place.tags)) {
      tags.push(...place.tags);
    }
    tags.forEach(tagText => {
      const tagEl = document.createElement('span');
      tagEl.className = 'modal-tag';
      tagEl.textContent = tagText;
      tagsContainer.appendChild(tagEl);
    });
  }

  if (details) {
    let detailsHtml = '';
    if (place.hours) {
      detailsHtml += `
        <div class="modal-detail-item">
          <span class="modal-detail-icon">${icons.clock}</span>
          <div>
            <div class="modal-detail-label">Время работы:</div>
            <div class="modal-detail-value">${place.hours}</div>
          </div>
        </div>
      `;
    }
    if (place.price) {
      detailsHtml += `
        <div class="modal-detail-item">
          <span class="modal-detail-icon">${icons.ticket}</span>
          <div>
            <div class="modal-detail-label">Стоимость билетов:</div>
            <div class="modal-detail-value">${place.price}</div>
          </div>
        </div>
      `;
    }
    if (place.address) {
      detailsHtml += `
        <div class="modal-detail-item">
          <span class="modal-detail-icon">${icons.pin}</span>
          <div>
            <div class="modal-detail-label">Адрес:</div>
            <div class="modal-detail-value">${place.address}</div>
          </div>
        </div>
      `;
    } else {
      detailsHtml += `
        <div class="modal-detail-item">
          <span class="modal-detail-icon">${icons.pin}</span>
          <div>
            <div class="modal-detail-label">Регион:</div>
            <div class="modal-detail-value">${place.region} область</div>
          </div>
        </div>
      `;
    }
    detailsHtml += `
      <div class="modal-detail-item">
        <span class="modal-detail-icon">${icons.compass}</span>
        <div>
          <div class="modal-detail-label">Координаты:</div>
          <div class="modal-detail-value">GPS: ${place.lat}, ${place.lng}</div>
        </div>
      </div>
    `;
    details.innerHTML = detailsHtml;
  }

  if (siteBtn) {
    siteBtn.href = place.link;
  }
  if (routeBtn) {
    routeBtn.href = `https://yandex.ru/maps/?rtext=~${place.lat}%2C${place.lng}&rtt=auto`;
  }

  if (modal) {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('place-modal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// Глобальный доступ для вызова из попапа маркеров карты
window.openModal = openModal;
window.closeModal = closeModal;

const closeBtn = document.getElementById('modal-close-btn');
if (closeBtn) closeBtn.addEventListener('click', closeModal);

const modalEl = document.getElementById('place-modal');
if (modalEl) {
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Быстрый фильтр по категориям (например, из футера)
function filterByCategory(category) {
  if (categoryFilter) {
    categoryFilter.value = category;
    applyFilters();
  }
}
window.filterByCategory = filterByCategory;

// Кнопка «Мне повезёт!» и случайный выбор
function triggerLuckySight() {
  const pool = (currentFilteredPlaces && currentFilteredPlaces.length > 0) ? currentFilteredPlaces : placesData;
  if (!pool || pool.length === 0) return;

  const randomIndex = Math.floor(Math.random() * pool.length);
  const luckyPlace = pool[randomIndex];

  if (typeof focusOnMap === 'function') {
    focusOnMap(luckyPlace.lat, luckyPlace.lng);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setTimeout(() => {
    openModal(luckyPlace.id);
  }, 450);
}
window.triggerLuckySight = triggerLuckySight;

const randomBtn = document.getElementById('random-btn');
if (randomBtn) {
  randomBtn.addEventListener('click', triggerLuckySight);
}

// Мобильное меню навигации
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });
}

// Автоматический переход по URL-параметрам (?random=1 или ?sight=id)
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  if (params.get('random') === '1') {
    setTimeout(triggerLuckySight, 550);
  } else if (params.get('sight')) {
    const sightId = params.get('sight');
    const place = placesData.find(p => p.id === sightId);
    if (place) {
      if (typeof focusOnMap === 'function') focusOnMap(place.lat, place.lng);
      setTimeout(() => openModal(sightId), 550);
    }
  }
});
