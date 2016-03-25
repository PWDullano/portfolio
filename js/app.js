var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'mainController'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'mainController'
      })
});
