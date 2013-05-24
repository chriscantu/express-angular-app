function HomeCtrl($scope, Blog) {
	$scope.blogs = Blog.list();
}

HomeCtrl.$inject=['$scope', 'Blog'];

function CreateCtrl($scope, Blog) {

	$scope.save = function() {
		Blog.save($scope.blog, function( data ) {
			$scope.blog.showSuccessMsg = true;
		}, function(error) {
			$scope.blog.showErrorMsg = true
		});
	}
}

CreateCtrl.$inject = ['$scope', 'Blog']