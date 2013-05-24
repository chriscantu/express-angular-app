'use strict';

angular.module('light', ['ui.bootstrap','services', 'directives']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home', { controller: HomeCtrl, templateUrl: 'partials/home.html'} ).
			when('/create', { controller: CreateCtrl, templateUrl: 'partials/create.html'}).
			otherwise({ redirectTo: "/home"});
	}]);
