// Requiring our Node Package Modules
var isValidZip = require('is-valid-zip');
var zipcodes = require('zipcodes');

// Initializing Angular module
var weatherApp = angular.module('weatherApp', []);

// Building our Angular Controller
weatherApp.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.zipCodeInput = '';

  $scope.getForecast() {
    var req = {
      url: 'https://api.darksky.net/forecast/' + MY_SECRET_KEY + '/' + lat + ',' + long,
      method: 'GET',
    }
  }
}]);