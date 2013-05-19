'use strict';

angular.module('light', ['ui.bootstrap','services', 'directives']);

function ListCtrl($scope) {
	$scope.name = "Chris"	
}

ListCtrl.$inject=['$scope'];