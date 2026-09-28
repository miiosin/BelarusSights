// script.js

// script.js
const grid = document.getElementById('grid');
const regionFilter = document.getElementById('region-filter');
const categoryFilter = document.getElementById('category-filter');

// 1. Отрисовка карточек мест
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
          <button class="btn btn-primary" onclick="focusOnMap(${place.lat}, ${place.lng})">На карте</button>
          <a href="${place.link}" target="_blank" class="btn btn-secondary">Официальный сайт</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// 2. Логика применения фильтров
function applyFilters() {
  const selectedRegion = regionFilter ? regionFilter.value : 'all';
  const selectedCategory = categoryFilter ? categoryFilter.value : 'all';

  const filteredPlaces = placesData.filter(place => {
    const matchRegion = (selectedRegion === 'all' || place.region === selectedRegion);
    const matchCategory = (selectedCategory === 'all' || place.category === selectedCategory);
    return matchRegion && matchCategory;
  });

  renderCards(filteredPlaces);
  renderMarkers(filteredPlaces);
}

if (regionFilter) regionFilter.addEventListener('change', applyFilters);
if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);

renderCards(placesData);
renderMarkers(placesData);