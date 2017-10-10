app.factory('friendFactory', ['$http', function($http){
	// Construct our Factory Object
	var friends = [];
	var factory = {};

	// Create:
	// Note: these functions become a part of the 'factory' object above
	// there are a few different ways to construct this object, but this
	// has been my personal preference so far.
	factory.create = function(newFriend, callback){
		$http.post('/friends', newFriend).then(function(returnData){
			console.log(returnData.data.newFriend);
			callback(returnData.data);
		});
	};

	// Read (All):
	factory.index = function(callback){
		$http.get('/friends').then(function(returnData){
			console.log(returnData.data);
			friends = returnData.data.allFriends;
			callback(friends);
		});
	};

	// Read (Single):
	factory.show = function(id, callback){
		$http.get('/friends/' + id).then(function(returnData){
			console.log(returnData.data);
			var foundFriend = returnData.data.foundFriend;
			console.log(foundFriend);

			var createdAt = new Date(foundFriend.createdAt);
			var updatedAt = new Date(foundFriend.updatedAt);

			foundFriend.birthday = new Date(foundFriend.birthday);
			foundFriend.createdAt = new Date(foundFriend.createdAt);
			foundFriend.updatedAt = new Date(foundFriend.updatedAt);

			callback(foundFriend);
		});
	};

	// Update:
	factory.update = function(id, updatedFriend){
		$http.put('/friends/' + id, updatedFriend).then(function(returnData){
			console.log(returnData.data);
		});

	};

	// Destroy:
	factory.destroy = function(id){
		console.log('about to run to DB...');
		$http.delete('/friends/' + id).then(function(returnData){
			console.log(returnData.data);
		});
	};

	return factory;
}]);
