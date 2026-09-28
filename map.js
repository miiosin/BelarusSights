// map.js

// Инициализация карты с центром на РБ
const map = L.map('map').setView([53.9, 27.56], 7);

// Бесплатный слой OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Хранилище созданных маркеров (нужно для очистки при фильтрации)
let markersGroup = L.layerGroup().addTo(map);

// Функция отрисовки меток на карте
function renderMarkers(places) {
  // Очищаем старые маркеры
  markersGroup.clearLayers();

  places.forEach(place => {
    const marker = L.marker([place.lat, place.lng]);
    marker.bindPopup(`
      <div style="font-size: 14px;">
        <b>${place.title}</b><br>
        <span>${place.category} (${place.region} обл.)</span>
      </div>
    `);
    markersGroup.addLayer(marker);
  });
}

// Функция центрирования карты на выбранном объекте
function focusOnMap(lat, lng) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  map.flyTo([lat, lng], 13);
}

// Первичный пересчет размеров карты (страховка от серых квадратов)
setTimeout(() => {
  map.invalidateSize();
}, 200);