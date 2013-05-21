'use strict';

angular.module('directives', [])
	.directive('ltAuth', function (User) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directive-templates/auth.html',
			link: function(scope, element, attrs) {

				User.loggedIn({}, function(data) { scope.user = data }, function(data) { scope.user = data });
				scope.auth = { invalidLogin: false, authenticated: false };

				scope.authenticate = function() {
					User.login({username: this.user.username, password: this.user.password}, 
						function(data){
							scope.auth = { invalidLogin: false, authenticated: true};
							scope.user = data;
							scope.auth.authenticate = false;
						}, 
						function(){
							scope.auth = { invalidLogin : true,  authenticated : false };
						}
					);
					this.user.password = '';
				}

				scope.logout = function() {
					User.logout({}, function(){
						scope.user.loggedIn = false;
					})
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