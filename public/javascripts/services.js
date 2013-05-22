'use strict';

angular.module('services', ['ngResource'])
	.factory('User', function($resource) {
		return $resource('/:action', 
			{},
			{
				login: { method: 'POST', isArray: false, params: { action: 'login' } },
				logout: { method: 'GET', isArray: false, params: {action: 'logout'} },
				loggedIn: { method: 'GET', isArray: false, params: { action: 'loggedIn'} },
				list : { method: 'GET', isArray: false, params: { action: 'users'} }
			}
		);
	})
	.factory('Blog', function($resource) {
		return $resource('/:action', 
			{},
			{
				list: { method: 'GET', isArray: true, params: {action: 'blog'} }
			}
		);
	});