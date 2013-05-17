'use strict';

angular.module('easternLight', []);

function ListCtrl($scope) {
	$scope.name = "Chris"
}

function LoginCtrl($scope){
	$scope.username = "";
	$scope.password = "";

	$scope.submit = function() {
		console.log(this.password);
		this.password="";
	}
}