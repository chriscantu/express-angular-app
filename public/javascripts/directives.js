'use strict';

angular.module('directives', [])
	.directive('ltAuth', function (User) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directive-templates/auth.html',
			link: function(scope, element, attrs) {
				scope.user = { username: '', password: '' };

				scope.authenticate = function() {
					User.login({username: this.user.username, password: this.user.password}, 
						function(){
							alert("authenticated!")
						}, 
						function(){
							alert('fail!')
						}
					);
					this.user.password = '';
				}

				scope.test = function() {
					User.list({}, function() {
						alert("Is authenticated call");
					}, function() {
						alert("Is NOT Authed!");
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