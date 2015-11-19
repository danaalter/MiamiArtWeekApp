function initMap(){
  L.mapbox.accessToken = 'pk.eyJ1IjoibWF3bWFwcCIsImEiOiJlZTcxNWQ0NTUwMGZlMWY4NGJjZGM1MWNhZjgwNjQyYiJ9.rhqya-EKOClCGCt8YSaeAg';

      // Construct a bounding box for this map that the user cannot
      // move out of
      var southWest = L.latLng(25.750941, -80.214257),
              northEast = L.latLng(25.857268, -80.119157),
              bounds = L.latLngBounds(southWest, northEast);


      var map = L.mapbox.map('map', 'mawmapp.e163ed3e', {
          // set that bounding box as maxBounds to restrict moving the map
          // see full maxBounds documentation:
          // http://leafletjs.com/reference.html#map-maxbounds
          maxBounds: bounds,
          maxZoom: 14,
          minZoom: 12
      });

      map.fitBounds(bounds);
//initial spot
      map.setView([25.789845, -80.134792], 12);
}

$(document).ready(function(){
      initMap();
});   
