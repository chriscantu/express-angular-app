'use strict';

angular.module('light', ['services']);

function ListCtrl($scope) {
	$scope.name = "Chris"
}

function LoginCtrl($scope, User){
	$scope.username = "";
	$scope.password = "";

	$scope.submit = function() {
		User.login({username: this.username, password: this.password});
		this.password = '';
	}
}

ListCtrl.$inject=['$scope'];
LoginCtrl.$inject=['$scope', 'User'];