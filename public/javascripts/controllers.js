function HomeCtrl($scope, User) {
	$scope.user = User.list();
}

HomeCtrl.$inject=['$scope', 'User'];