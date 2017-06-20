/*
* @Author: Marie Hoeger
* @Date:   2017-06-12 18:55:48
* @Last Modified by:   Marie Hoeger
* @Last Modified time: 2017-06-20 15:03:52
*/

'use strict';
var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  zoom: 2,
  center: new google.maps.LatLng(2.8,-187.3),
  mapTypeId: 'terrain'
});

// Create a <script> tag and set the USGS URL as the source.
var script = document.createElement('script');
// This example uses a local copy of the GeoJSON stored at
// http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
document.getElementsByTagName('head')[0].appendChild(script);

setMarkers(map);

// map.data.setStyle(function(feature) {
//   var magnitude = feature.getProperty('mag');
//   return {
//     icon: getCircle(magnitude)
//   };
// });

}

// // Loop through the results array and place a marker for each
// // set of coordinates.
// window.eqfeed_callback = function(results) {
// for (var i = 0; i < results.features.length; i++) {
//   var coords = results.features[i].geometry.coordinates;
//   var latLng = new google.maps.LatLng(coords[1],coords[0]);
//   var marker = new google.maps.Marker({
//     position: latLng,
//     map: map
//   });
// }
// }

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var beaches = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'file:///Users/Marie/Documents/WebApps/mhoeger.github.io/UrbanAdventures/Images/Marie_Pictures/2017-06-18 12.07.11.jpg', // 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}

function getCircle(magnitude) {
return {
  path: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', // google.maps.SymbolPath.CIRCLE,
  // fillColor: 'red',
  // fillOpacity: .2,
  // scale: Math.pow(2, magnitude) / 2,
  // strokeColor: 'white',
  // strokeWeight: .5
};
}

function eqfeed_callback(results) {
map.data.addGeoJson(results);
}
