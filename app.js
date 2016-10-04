// Requiring our Node Package Modules
var isValidZip = require('is-valid-zip');
var zipcodes = require('zipcodes');

// Initializing Angular module
var weatherApp = angular.module('weatherApp', []);

// Building our Angular Controller
weatherApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.zipCodeInput = '';

  $scope.getForecast = function() {
    // Making sure our zip code is an integer
    var zip = parseInt(zipCodeInput);
    
    // First, we need to check to see if our ZIP code is valid
    if (isValidZip(zip)) {
      // Then, we need to convert our ZIP code to latitude and longitude
      var data = zipcodes.lookup(zip);
      var lat = data.latitude,
          long = data.longitude,
          key = process.env.MY_SECRET_KEY
      // Our API call to DarkSky.net, using our API key and lat/long coordinates
      var req = {
        url: 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + long,
        method: 'GET'
      }
    } else {
      alert("Sorry, I didn't recognize that zip code. Please enter a valid zip code");
    }

    // Our http request
    $http(req).then(function success(res) {
      // For now, we'll just console.log the response
      console.log(res);
    }, function error(res) {
      // If there's an error, we want to log the message and alert the user
      console.log(res);
      alert("We're very sorry - an error occurred. We're hoping for clear skies soon!")
    });
  };
}]);