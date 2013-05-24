'use strict';

angular.module('directives', [])
	.directive('ltAuth', function (User, $location) {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'directive-templates/auth.html',
			link: function(scope, element, attrs) {

				User.loggedIn({}, function(data) { scope.user = data }, function(data) { scope.user = data });
				scope.auth = { invalidLogin: false, showLogin: false };

				scope.authenticate = function() {
					User.login({username: this.user.username, password: this.user.password}, 
						function(data){
							scope.auth = { invalidLogin: false, showLogin: false};
							scope.user = data;
						}, 
						function(){
							scope.auth = { invalidLogin : true,  showLogin : true };
						}
					);
					this.user.password = '';
				}

				scope.logout = function() {
					User.logout({}, function(){
						scope.user.loggedIn = false;
					});
				}

				scope.toggleLogin = function() { scope.auth.showLogin = !scope.auth.showLogin }

				scope.$watch( function() {
					return $location.path();
				}, function(newValue, oldValue){
					var links = document.querySelectorAll("div.navbar div.navbar-inner ul.nav li")
					
					for ( var i = 0; i < links.length - 2; i++) {
						var href = links[i].firstElementChild;
						var hash = href.getAttribute('href').substring(1);
						( hash == newValue ) ? links[i].className = 'active' : links[i].className = ''
					}					
				});
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

