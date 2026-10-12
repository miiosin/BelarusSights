const map = L.map('map', {
  scrollWheelZoom: false 
}).setView([53.9, 27.56], 7);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


let markersGroup = L.layerGroup().addTo(map);

function renderMarkers(places) {
  
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