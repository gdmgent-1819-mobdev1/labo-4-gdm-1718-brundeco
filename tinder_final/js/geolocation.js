function navigate() {
  let latitude;
  let longitude;
  let myLat;
  let myLong;
  let myPos;
  
  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bmVsbGkiLCJhIjoiY2puYWxudTl0NzF2ejN2bng2eXF0ZHBseiJ9.7P5TS1LrZrEOPgsjtbO--w';
  let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: myPos
  });
  
  navigator.geolocation.getCurrentPosition(function(position) {
    myLat = position.coords.latitude;
    myLong = position.coords.longitude;
    personLat = profiles[0].lat;
    personLong = profiles[0].long;
    myPos = position.coords.latitude + position.coords.longitude;
  
    let lat1 = personLat;
    let lon1 = personLong;
    let lat2 = myLat;
    let lon2 = myLong;

    console.log(lat1);
    console.log(lat2);
  
    var p = 0.017453292519943295; 
    var c = Math.cos;
    var a = 0.5 - c((lat2 - lat1) * p) / 2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((lon2 - lon1) * p)) / 2;
    let x = Math.round(12742 * Math.asin(Math.sqrt(a)));
  
    document.getElementById('distance').innerHTML = "U bent " + x + " km verwijdert van deze persoon";
  });
  
  map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
  }));
}

navigate();

