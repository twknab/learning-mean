///////////////////////////////////////////////////
///////////////////////////////////////////////////
///
///		
///
///		Partials and Custom Users Assignment
/// 	Coding Dojo, November 2016
/// 	Tim Knab, presents:
///
/// 	Main.js file
///
/// 	Includes Angular: 
/// 
/// 		1. app and module setup
/// 		2. controllers
/// 		3. factory
/// 		4. routes
///
///
///
///////////////////////////////////////////////////
///////////////////////////////////////////////////

////////////////////////////
////////////////////////////
///
///		1. Setup app and module:
///
//////////////////////////////////////
//////////////////////////////////////

var app = angular.module('app', ['ngRoute']);

////////////////////////////
////////////////////////////
///
///		2. Setup controllers:
///
//////////////////////////////////////
//////////////////////////////////////

// Controller for building users on one partial page:
app.controller('CustomizeUsersController', ['$scope', 'usersFactory', '$location', function($scope, usersFactory, $location){
	// Get data from Factory:
	function users(data){
		$scope.users = data;
		$scope.user = {};
	};

	// Create:
	$scope.create = function(){
		usersFactory.create($scope.user, users);
		// By adding '$location' in the controller above, we can now use $location to
		// create a redirect to a new route. In the example  below we can actually just pass
		// '/userList' as this is already caught in our routes and will render the appropriate view.
		console.log($location);
		$location.url('/userList')
	};

	// Read:
	$scope.index = function(){
		usersFactory.index(users);
	};
	// Invokes the function above to pass any existing Factory data to $scope:
	// Note: that in this project there isn't any, but it's good to know what's going on
	// and to get into a good habit of making sure to run this just in case.
	$scope.index();

	// Destroy:
	$scope.destroy = function(id){
		usersFactory.destroy(id, users);
	}

}]);

// Controller for showing users on user lists page:
app.controller('UserListsController', ['$scope', 'usersFactory', function($scope, usersFactory){
	// Get data from Factory:
	function users(data){
		$scope.users = data;
		$scope.user = {};
	};

	// Read:
	$scope.index = function(){
		usersFactory.index(users);
	};
	// Invokes the function above to pass any existing Factory data to $scope:
	// Note: that in this project there isn't any, but it's good to know what's going on
	// and to get into a good habit of making sure to run this just in case.
	$scope.index();

}]);

////////////////////////////
////////////////////////////
///
///		3. Setup factory:
///
//////////////////////////////////////
//////////////////////////////////////

// Product Factory
app.factory('usersFactory', ['$http', function($http){
	var users = [];
	var factory = {};

	// Create:
	factory.create = function(user, callback){
		users.push(user);
		callback(users);
	};

	// Read:
	factory.index = function(callback){
		callback(users);
	};

	// Destroy:
	factory.destroy = function(id, callback){
		users.splice(id, 1);
		callback(users);
	};

	return factory;
}]);

////////////////////////////
////////////////////////////
///
///		4. Setup routing:
///
//////////////////////////////////////
//////////////////////////////////////

app.config(function($routeProvider){
	$routeProvider
		.when('/customizeUsers', {
			templateUrl: 'partials/customizeUsers.html',
			controller: 'CustomizeUsersController' // you can include the parameter 'controller' and supply it the controller name
		})
		.when('/userList', {
			templateUrl: 'partials/userList.html',
			controller: 'UserListsController'
		})
		.otherwise({
			redirectTo: '/'
		});
});