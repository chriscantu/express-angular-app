'use strict';

angular.module('light', ['ui.bootstrap','services', 'directives']);

function ListCtrl($scope, User) {
	$scope.user = User.list();
}

ListCtrl.$inject=['$scope', 'User'];