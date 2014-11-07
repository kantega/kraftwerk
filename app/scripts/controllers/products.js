'use strict';

/**
 * @ngdoc function
 * @name hastwerkKraftwerkApp.controller:productsCtrl
 * @description
 * # productsCtrl
 * Controller of the hastwerkKraftwerkApp
 */
var productsControllers = angular.module('productControllers', []);

productsControllers.controller('ProductsCtrl', ['$scope', 'Strompris',
  function($scope, Strompris) {
    $scope.products = Strompris.query();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
