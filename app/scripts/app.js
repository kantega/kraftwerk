'use strict';

/**
 * @ngdoc overview
 * @name hastwerkKraftwerkApp
 * @description
 * # hastwerkKraftwerkApp
 *
 * Main module of the application.
 */
angular
  .module('hastwerkKraftwerkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'productServices',
    'productControllers'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
