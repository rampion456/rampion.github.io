// Initialize and add the map
function initMap() {
  // The location of Uluru
  const rampion = { lat: 26.119804, lng: 85.896521 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: rampion,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: rampion,
    map: map,
  });
}

window.initMap = initMap;
