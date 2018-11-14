function navigate() {
  // declare variables
  let myLat;
  let myLon;
  let myPos;

  // API key
  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bmVsbGkiLCJhIjoiY2puYWxudTl0NzF2ejN2bng2eXF0ZHBseiJ9.7P5TS1LrZrEOPgsjtbO--w';

  

  // get geographic positions
  navigator.geolocation.getCurrentPosition(function (position) {
    myLat = position.coords.latitude;
    myLon = position.coords.longitude;
    tinderLat = profiles[0].lat;
    tinderLon = profiles[0].lon;
    myPos = position.coords.latitude + ', ' + position.coords.longitude;
    console.log(myPos);

    // coordinates in variables to use in formula
    let lat1 = tinderLat;
    let lon1 = tinderLon;
    let lat2 = myLat;
    let lon2 = myLon;

    // fly to profile location
    map.flyTo({
      center: [profiles[0].lon, profiles[0].lat]
      
    });

    
    console.log(lat1);
    console.log(lat2);
    console.log(lon1);
    console.log(lon2);

    // formula to calculate distance between tinderprofile and user's location
    var p = 0.017453292519943295;
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p)) / 2;
    let x = Math.round(12742 * Math.asin(Math.sqrt(a)));

    // get html element and add calculated distance
    document.getElementById('distance').innerHTML = "U bent " + x + " km verwijdert van deze persoon";
  });
  

  // get html element, add style and zoom level
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    zoom: 5
  });


  // disable scroll
  map.scrollZoom.disable();

  // map control options
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  }));
}
navigate();