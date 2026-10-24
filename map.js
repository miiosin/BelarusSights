const belarusBounds = [
  [51.2, 23.1], 
  [56.2, 32.8]  
];

const map = L.map('map', {
  scrollWheelZoom: false, 
  attributionControl: false,
  MaxBounds: belarusBounds,
  maxBoundsViscosity: 1.0,
  minzoom: 6
}).setView([53.9, 27.56], 7);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


map.setMaxBounds(belarusBounds);
map.options.minZoom = 6;

let markersGroup = L.layerGroup().addTo(map);

function renderMarkers(places) {
  
  markersGroup.clearLayers();

  places.forEach(place => {
    const marker = L.marker([place.lat, place.lng]);
    marker.bindPopup(`
      <div style="max-width: 210px; font-family: sans-serif; padding: 2px;">
        <img src="${place.image}" alt="${place.title}" style="
          width: 100%;
          height: 110px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 8px;
          display: block;
        ">
        <h4 style="margin: 0 0 4px; font-size: 15px; color: #1f2937; line-height: 1.2;">
          ${place.title}
        </h4>
        <p style="margin: 0 0 8px; font-size: 12px; color: #6b7280;">
          ${place.category} • ${place.region} обл.
        </p>
        <a href="${place.link}" target="_blank" style="
          display: block;
          text-align: center;
          background-color: #1b534b;
          color: #ffffff;
          padding: 6px 0;
          border-radius: 6px;
          font-size: 12px;
          text-decoration: none;
          font-weight: 600;
        ">Подробнее</a>
      </div>
    `);
    markersGroup.addLayer(marker);
  });
}

function focusOnMap(lat, lng) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  map.flyTo([lat, lng], 13);
}

setTimeout(() => {
  map.invalidateSize();
}, 200);

map.on('click', () => {
  map.scrollWheelZoom.enable();
});

map.on('mouseout', () => {
  map.scrollWheelZoom.disable();
});