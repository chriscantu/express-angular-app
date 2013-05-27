'use strict';

angular.module('services', ['ngResource'])
	.factory('User', function ($resource, $rootScope) {
        var AUTH_EVENT = "AUTH_EVENT";
		var user = $resource('/:action',
			{},
			{
				login: { method: 'POST', isArray: false, params: { action: 'login' } },
				logout: { method: 'GET', isArray: false, params: {action: 'logout'} },
				loggedIn: { method: 'GET', isArray: false, params: { action: 'loggedIn'} },
				list : { method: 'GET', isArray: false, params: { action: 'users'} }
			});

        user.isLoggedIn = false;
        user.userAuthenticated = function (user) {
            $rootScope.$broadcast(AUTH_EVENT, user);
        };
        user.onAuthentication = function ($scope, handler) {
            $scope.$on(AUTH_EVENT, function (event, message) {
                user.isLoggedIn = !user.isLoggedIn;
                handler(message.user);
            });
        }

        return user;
	})
	.factory('Blog', function ($resource) {
		return $resource('/:action/:id',
			{},
			{
				list: { method: 'GET', isArray: true, params: {action: 'blog'} },
				save: { method: 'POST', isArray: false, params: {action: 'blog'} },
                get: { method: 'GET', isArra: false, params: {action: 'blog'} }
			});
	});