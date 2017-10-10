/////////////////
//
//	Angular Code for Product & Orders Assignment
//	Key Concepts: Factories and Controllers
//
/////////////////

// App Setup
var app = angular.module('app', []);

/////////////////
/////////////////
////
////	Factories
////
////////////////////////////////////////////////
////////////////////////////////////////////////

// Product Factory
app.factory('productFactory', ['$http', function($http){
	var products = [];
	var factory = {};

	// Create:
	factory.create = function(product, callback){
		product.quantity = 50;
		products.push(product);
		callback(products);
	};

	// Read:
	factory.index = function(callback){
		callback(products);
	};

	// Destroy:
	factory.destroy = function(id, callback){
		products.splice(id, 1);
		callback(products);
	};

	// Buy:
	factory.buy = function(order, callback){
		console.log(order)
		if (order.quantity > 0){
			order.quantity -= 1;
		} else {
			console.log('You have run out of this product');
		}
	};

	return factory;
}]);

/////////////////
/////////////////
////
////	Controllers
////
////////////////////////////////////////////////
////////////////////////////////////////////////


// Product Controller
app.controller('productController', ['$scope', 'productFactory', function($scope, productFactory){
	// Get data from Factory:
	function products(data){
		$scope.products = data;
		$scope.product = {};
	};

	// Create:
	$scope.create = function(){
		productFactory.create($scope.product, products);
	};

	// Read:
	$scope.index = function(){
		productFactory.index(products);
	};
	// Invokes the function above to pass any existing Factory data to $scope:
	// Note: that in this project there isn't any, but it's good to know what's going on
	// and to get into a good habit of making sure to run this just in case.
	$scope.index();

	// Destroy:
	$scope.destroy = function(id){
		productFactory.destroy(id, products);
	}

}]);

// Order Controller
app.controller('orderController', ['$scope', 'productFactory', function($scope, productFactory){
	function orders(data){
		$scope.orders = data;
		$scope.order = {};
	};

	$scope.index = function(){
		productFactory.index(orders);
	};

	$scope.index();

	$scope.buy = function(id){
		productFactory.buy(id, orders);
	}
}]);