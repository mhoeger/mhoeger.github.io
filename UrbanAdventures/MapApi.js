/*
* @Author: Marie Hoeger
* @Date:   2017-06-12 18:55:48
* @Last Modified by:   Marie Hoeger
* @Last Modified time: 2017-06-22 16:42:53
*/

'use strict';
var map;
function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
  zoom: 2,
  center: new google.maps.LatLng(2.8,-187.3),
  styles: [
	  {
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#ebe3cd"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#523735"
	      }
	    ]
	  },
	  {
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#f5f1e6"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      {
	        "color": "#c9b2a6"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.land_parcel",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      {
	        "color": "#dcd2be"
	      }
	    ]
	  },
	  {
	    "featureType": "administrative.land_parcel",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#ae9e90"
	      }
	    ]
	  },
	  {
	    "featureType": "landscape.natural",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#dfd2ae"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#dfd2ae"
	      }
	    ]
	  },
	  {
	    "featureType": "poi",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#93817c"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#a5b076"
	      }
	    ]
	  },
	  {
	    "featureType": "poi.park",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#447530"
	      }
	    ]
	  },
	  {
	    "featureType": "road",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#f5f1e6"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#fdfcf8"
	      }
	    ]
	  },
	  {
	    "featureType": "road.arterial",
	    "elementType": "labels",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#f8c967"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      {
	        "color": "#e9bc62"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway",
	    "elementType": "labels",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway.controlled_access",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#e98d58"
	      }
	    ]
	  },
	  {
	    "featureType": "road.highway.controlled_access",
	    "elementType": "geometry.stroke",
	    "stylers": [
	      {
	        "color": "#db8555"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "stylers": [
	      {
	        "visibility": "off"
	      }
	    ]
	  },
	  {
	    "featureType": "road.local",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#806b63"
	      }
	    ]
	  },
	  {
	    "featureType": "transit.line",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#dfd2ae"
	      }
	    ]
	  },
	  {
	    "featureType": "transit.line",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#8f7d77"
	      }
	    ]
	  },
	  {
	    "featureType": "transit.line",
	    "elementType": "labels.text.stroke",
	    "stylers": [
	      {
	        "color": "#ebe3cd"
	      }
	    ]
	  },
	  {
	    "featureType": "transit.station",
	    "elementType": "geometry",
	    "stylers": [
	      {
	        "color": "#dfd2ae"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "geometry.fill",
	    "stylers": [
	      {
	        "color": "#b9d3c2"
	      }
	    ]
	  },
	  {
	    "featureType": "water",
	    "elementType": "labels.text.fill",
	    "stylers": [
	      {
	        "color": "#92998d"
	      }
	    ]
	  }
	]
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
  console.log(ImageData[Names]);
  var image = {
  	// https://ryanmo.co/2013/11/03/dropboxsharedlinks/
  	// dl.dropboxusercontent.com/s/<number>/<name of file>
    url: 'https://dl.dropboxusercontent.com/s/nv42ml3e6b8cks5/2017-06-19%2013.16.06.jpg', // 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    scaledSize: new google.maps.Size(25, 38),
    size: new google.maps.Size(20,20),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };

  readImage('https://dl.dropboxusercontent.com/s/nv42ml3e6b8cks5/2017-06-19%2013.16.06.jpg');
  // img1.onload = function () {
  // }

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

function readImage(imageSrc) {
    var img = new Image();
    img.onload = function () {
		console.log("buthere");
		EXIF.getData(img, function () {
	  		console.log("here");
		  	var long = EXIF.getTag(this, 'height');
		  	var toDecimal = function (number) {
		       return number[0].numerator + number[1].numerator /
		           (60 * number[1].denominator) + number[2].numerator / (3600 * number[2].denominator);
			};
			alert(toDecimal);
		});
		// document.body.removeChild(img);     // Removes the image from the DOM (This does not destroy the image element)
	};
	img.src = imageSrc;
	img.style.position = "absolute";
	img.style.left = -9999;             // Image width must not exceed 9999 pixels
	img.style.visibility = "hidden";    // Maybe you can remove this
	document.body.appendChild(img);
	//var temp1 = ImageInfo(imageSrc);
	//console.log(ImageInfo);
	//console.log("imageinfo");
	//console.log(ImageInfo.getField(imageSrc, "height"));
	//var temp = temp1.getField(imageSrc, "height");
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
