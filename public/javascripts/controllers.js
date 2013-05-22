function HomeCtrl($scope, Blog) {
	$scope.user = Blog.list();
}

HomeCtrl.$inject=['$scope', 'Blog'];