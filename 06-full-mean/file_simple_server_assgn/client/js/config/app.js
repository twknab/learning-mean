// SETUP APP:
var app = angular.module('app', ['ngRoute']);

// SETUP ANGULAR ROUTES:
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/index.html',
			controller: 'indexController' 
		})	
		.when('/edit/:id', {
			templateUrl: 'partials/edit.html',
			controller: 'editController'
		})
		.when('/show/:id', {
			templateUrl: 'partials/show.html',
			controller: 'showController'
		})
		.when('/create', {
			templateUrl: 'partials/create.html',
			controller: 'newController'
		})
		.otherwise({
			redirectTo: '/',
		})
});
