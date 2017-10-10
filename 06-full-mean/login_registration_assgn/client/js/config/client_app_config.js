// Setup Angular App:
var app = angular.module('app', ['ngRoute']);

// Setup Angular Routes:
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'html/index.html',
		})
		.when('/login', {
			templateUrl: 'html/login.html',
			controller: 'loginController'
		})
		.when('/register', {
			templateUrl: 'html/register.html',
			controller: 'registrationController'
		})
		.otherwise({
			redirectTo: '/',
		})
});
