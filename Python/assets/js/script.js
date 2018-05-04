var rooms = [];
var StemLat = rooms.push(40.5138724);
var StemLng = rooms.push(-74.56389229999999);
var ELALat = rooms.push();
var ELALng = rooms.push();


function getCoordinates() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  function success(pos) {
    var crd = pos.coords;
    var long = crd.latitude;
    var lati = crd.longitude;
    var currentPosition = {};
    data.push(crd.latitude);
    data.push(crd.longtitude);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }


  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
navigator.geolocation.getCurrentPosition(success, error, options);

}

getCoordinates();
var data = [];
if (data[0] == rooms[0] && data[1] == data[1] ) {
  console.log("You Are In Stem");
} else {
  console.log("Invalid Location");
}
console.log(rooms);
console.log(data);

// navigator.geolocation.getCurrentPosition(success, error, options);
// navigator.geolocation.getCurrentPosition(function(pos, success, ));u

// // var geocoder = new google.maps.Geocoder();
// //
// //    function address_to_coordinates(address_text, callback) {
// //     var address = address_text;
// //     geocoder.geocode( { 'address': address}, function(results, status) {
// //       if (status == google.maps.GeocoderStatus.OK) {
// //         callback(results[0].geometry.location);
// //
// //       } else {
// //         alert("Geocode was not successful for the following reason: " + status);
// //       }
// //     });
// //   }
// //
// // address_to_coordinates('15bkoolidgecourt', function(location){
// //   console.log(location);
// // });
// var rooms = [];
//
// console.log(rooms);
//
//
// function getLocation(callback) {
//     if (navigator.geolocation) {
//         var lat_lng = navigator.geolocation.getCurrentPosition( function(position) {
//           console.log(position);
//           var user_position = {};
//           user_position.lat = position.coords.latitude;
//           user_position.lng = position.coords.longitude;
//           callback(user_position);
//           var lati = position.coords.latitude;
//           var long = position.coords.longtitude;
//         });
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }
//
// var HistoryLat = rooms.push(40.521514499999995);
//                             40.521514499999995
// var HistoryLang = rooms.push(-74.55588279999999);
//                               74.55588279999999
//
// var HealthLat = rooms.push(1);
// var HealthLang = rooms.push(2);
//
// getLocation(function(lat_lng,long,lati){
//   if (lati == rooms[0]) {
//     console.log("You Are In History");
//   } else {
//     alert("Unknown Position");
//   }
// });
