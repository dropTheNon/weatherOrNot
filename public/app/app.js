// Initializing Angular module
var weatherApp = angular.module('weatherApp', ['ui.router', 'ControllersCtrl']);

// Configuring our app
weatherApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home.html',
      controller: 'MainCtrl'
    })
    .state('404', {
      url: '/404',
      templateUrl: 'app/views/404.html'
    });

    $locationProvider.html5Mode(true);
}]);