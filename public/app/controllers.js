// Initializing our Angular controller
angular.module('ControllersCtrl', [])
.controller('MainCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  // Our user's zip code input
  $scope.zipCodeInput = '';

  // getForecast() runs when user submits their zipcode
  $scope.getForecast = function() {

    // Our http request to the backend
    $http.get('/api/' + $scope.zipCodeInput).then(function success(res) {
      $scope.results = res;
      console.log($scope.results);
    }, function error(res) {
      // If there's an error, we want to log the message and alert the user
      console.log(res);
      alert("We're very sorry - an error occurred. We're hoping for clear skies soon!")
    });
  };
}]);