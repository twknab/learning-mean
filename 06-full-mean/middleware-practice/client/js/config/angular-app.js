// Define Module:
var app = angular.module('app', ['ngRoute']);

// Define Routes:
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/index.html', // root route partial
            controller: 'indexController',
        })
        .otherwise({
            redirectTo: '/',
        })
});
