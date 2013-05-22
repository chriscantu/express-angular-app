'use strict';

angular.module('light', ['ui.bootstrap','services', 'directives']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/home', { controller: HomeCtrl, templateUrl: 'partials/home.html'} ).
			otherwise({ redirectTo: "/home"});
	}]);
