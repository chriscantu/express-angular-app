function HomeCtrl($scope, Blog) {
	$scope.blogs = Blog.list();
}

HomeCtrl.$inject=['$scope', 'Blog'];

function CreateCtrl($scope, Blog) {

}

CreateCtrl.$inject = ['$scope', 'Blog']