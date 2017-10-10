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
	factory.buy = function(id, callback){
		for (var x in products){
			if (products[x] == products[id]){
				if (products[id].quantity > 0) {
					products[id].quantity -= 1;
				} else {
					console.log('You have run out of this product.')
				}
				console.log(products[id].quantity);
			}
		}
	}

	return factory;
}]);