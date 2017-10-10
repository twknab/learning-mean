/////////////////
//
// Angular Code for Product Factory Assignment:
//
/////////////////

// APP SETUP:
var app = angular.module('app', []);

// FACTORY:
app.factory('productFactory', ['$http', function($http){
	var products = [];
	var factory = {};
	factory.index = function(callback){
		callback(products);
	}
	factory.create = function(product, callback){
		console.log(product);
		console.log(products);
		products.push(product);
		console.log(products);
		callback(products)
	}
	factory.delete = function(id, callback){
		products.splice(id, 1);
		callback(products);
	}
	return factory;
}]);

// CONTROLLER:
app.controller('productController', ['$scope', 'productFactory', function($scope, productFactory){
	// Create a function which helps us bind our factory data to our $scope data:
	function allProducts(data){
		$scope.products = data;
		$scope.product = {};
	};

	// Create a function which displays all factory product data by bind it to our $scope:
	$scope.index = function(){
		productFactory.index(allProducts);
		// passing along 'allProducts' allows us to bind our factory values to $scope
	};

	// Invoke index right away so our $scope binds to our factory product data:
	$scope.index();

	// Creates a new product:
	$scope.create = function(){
		productFactory.create($scope.product, allProducts);
		// by supplying the form product values and 'allProducts' to 'create'
		// we are able to push the new product into our factory, and then bind
		// our factory values to our $scope variables, thus updating them.
	};

	// Deletes a product from the product array:
	$scope.delete = function(id){
		productFactory.delete(id, allProducts);
		// passes the id of the product to be deleted, along with the $scope binding function
	};

}]);
/*
TO-DO:
	+ setup html //DONE
	+ setup directives //DONE
	+ setup controller //DONE
	+ setup factory //DONE
		+ modify so products are stored in factory //DONE
		+ setup delete function //DONE
		+ setup add function //DONE
		+ setup index function (show all) //DONE
*/