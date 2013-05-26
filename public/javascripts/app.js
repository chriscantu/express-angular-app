'use strict';

angular.module('light', ['ui.bootstrap', 'services', 'directives', 'filters']).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.
			when('/home', { controller: HomeCtrl, templateUrl: 'partials/home.html'}).
			when('/create', { controller: CreateCtrl, templateUrl: 'partials/create.html'}).
            when('/edit/:title', { controller: EditCtrl, templateUrl: 'partials/create.html'}).
			otherwise({ redirectTo: "/home"});
	}]);