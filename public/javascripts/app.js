'use strict';

angular.module('light', ['services', 'directives']);

function ListCtrl($scope) {
	$scope.name = "Chris"
}

ListCtrl.$inject=['$scope'];