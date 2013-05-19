'use strict';

angular.module('directives', [])
	.directive('ltAuth', function (User) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directive-templates/auth.html',
			link: function(scope, element, attrs) {
				scope.user = { username: '', password: '', firstName: '' };
				scope.auth = { invalidLogin: false, authenticated: false };

				scope.authenticate = function() {
					User.login({username: this.user.username, password: this.user.password}, 
						function(data){
							scope.auth = { invalidLogin: false, authenticated: true};
							scope.loggedIn = false;
							scope.user.firstName = data._id;
						}, 
						function(){
							scope.auth = { invalidLogin : true,  authenticated : false };
						}
					);
					this.user.password = '';
				}
			}
		}
	})
	.directive('ltNavBar', function( ) {
		return {
			restrict: "E",
			replace: true,
			templateUrl: "directive-templates/navBar.html"
		}
	});