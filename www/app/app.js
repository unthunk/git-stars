'use strict';

/* global angular */

var app = {
  name: 'gitsortApp',
  controllers: angular.module('gitsortAppControllers', []),
  services: angular.module('gitsortAppServices', [])
};

var gitsortApp = angular.module(app.name, ['ngRoute', 'ngResource', 'gitsortAppControllers', 'gitsortAppServices'])
	.config(['$routeProvider' ,function ($routeProvider) {
	  $routeProvider
	    .when('/', {
	      controller: 'mainCtrl',
	      templateUrl: 'app/views/main/main.html'
	    })
			.otherwise({
        redirectTo: '/'
      });
}]);
