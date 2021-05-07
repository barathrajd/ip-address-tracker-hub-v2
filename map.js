let token = config.MAPBOX_TOKEN;

mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
});
