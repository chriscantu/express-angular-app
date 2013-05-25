'use strict';

function HomeCtrl($scope, Blog) {
	$scope.blogs = Blog.list();
}

HomeCtrl.$inject = ['$scope', 'Blog'];

function CreateCtrl($scope, Blog) {
    $scope.page = {title : "Create"};
	$scope.save = function () {
		Blog.save($scope.blog, function (data) {
			$scope.blog.showSuccessMsg = true;
		}, function (error) {
			$scope.blog.showErrorMsg = true;
		});
	};
}

CreateCtrl.$inject = ['$scope', 'Blog'];

function EditCtrl($scope, $routeParams, Blog) {
    $scope.page = {title : "Edit"};
    Blog.get({id : $routeParams.title}, function (data) {
        $scope.blog = data;
    }, function (error) {
        $scope.showErrorMsg = true;
    });

	$scope.save = function () {
		Blog.save($scope.blog, function (data) {
			$scope.blog.showSuccessMsg = true;
		}, function (error) {
			$scope.blog.showErrorMsg = true;
		});
	};
}

EditCtrl.$inject = ['$scope', '$routeParams', 'Blog'];