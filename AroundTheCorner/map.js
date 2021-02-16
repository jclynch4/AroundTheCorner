
function initMap() {
        // The location of tempe
        const tempe = { lat: 33.4255, lng: -111.9400 };
        const HHHHH = { lat: 33.42393782630465, lng: -111.93975047356615};
        const changingHands = { lat: 33.362716866180875, lng: -111.91253457531285};
        const buffaloExchange = {lat: 33.421717537325684, lng: -111.94324213117676};
        const graciesThrift = {lat: 33.41499444698753, lng: -111.91276117356632};
        const oldTownBooks = {lat: 33.424917698293946, lng: -111.94027204473073};
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 11,
          center: tempe,
        });
        // The marker, positioned at tempe
        const marker = new google.maps.Marker({
          position: HHHHH,
          map: map,
          label: 'Happy Healthy High Horny Herbs'


        });
        const marker2 = new google.maps.Marker({
          position: changingHands,
          map: map,
          label: 'Changing Hands Bookstore'

        });
        const marker3 = new google.maps.Marker({
          position: buffaloExchange,
          map: map,
          label: 'Buffalo Exchange'

        });
        const marker4 = new google.maps.Marker({
          position: graciesThrift,
          map: map,
          label: "'Gracie's Thrift Store'"

        });
        const marker5 = new google.maps.Marker({
          position: oldTownBooks,
          map: map,
          label: 'Old Town Bookstore'

        });
        infoWindow = new google.maps.InfoWindow();
        const locationButton = document.createElement("button");
        locationButton.textContent = "Pan to Current Location";
        locationButton.classList.add("custom-map-control-button");
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  };
                  infoWindow.setPosition(pos);
                  infoWindow.setContent("Location found.");
                  infoWindow.open(map);
                  map.setCenter(pos);
                },
                () => {
                  handleLocationError(true, infoWindow, map.getCenter());
                }
              );
            } else {
        // Browser doesn't support Geolocation
              handleLocationError(false, infoWindow, map.getCenter());
            }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
      