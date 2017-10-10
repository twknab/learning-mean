/////////////////
/////////////////
////
////	Angular Module and Routes Setup
////
////////////////////////////////////////////////
////////////////////////////////////////////////

// Create Angular Module:
var app = angular.module('app', ['ngRoute']);

// Setup Angular Routes:
app.config(function($routeProvider) {
	$routeProvider
        .when('/', {
            templateUrl: 'html/index.html',
			controller: 'indexPetController'
        })
        .when('/create', {
            templateUrl: 'html/create.html',
			controller: 'createPetController'
        })
        .when('/edit/:id', {
            templateUrl: 'html/edit.html',
			controller: 'editPetController'
        })
		.when('/show/:id', {
			templateUrl: 'html/show.html',
			controller: 'showPetController'
		})
		.otherwise({
			redirectTo: '/',
		})
});
