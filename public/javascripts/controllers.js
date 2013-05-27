'use strict';

function HomeCtrl($scope, Blog, User) {
	$scope.blogs = Blog.list();

    User.onAuthentication($scope, function () {
        $scope.user = { isLoggedIn: User.isLoggedIn };
    });

    $scope.user = { isLoggedIn: User.isLoggedIn };
}

HomeCtrl.$inject = ['$scope', 'Blog', 'User'];

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

    $scope.delete = function (title) {
        var id = (title) ? title.split(' ').join('_') : title;

        Blog.delete({ id: id }, function (data) {
            $scope.blog.showSuccessMsg = true;
        }, function (error) {
            $scope.blog.showErrorMsg = true;
        });
    };
}

EditCtrl.$inject = ['$scope', '$routeParams', 'Blog'];