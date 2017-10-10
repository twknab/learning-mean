/////////////////
/////////////////
////
////	Angular Pet Factory
////
////////////////////////////////////////////////
////////////////////////////////////////////////
/*

    Note: This Factory is actually what queries our Server-Side Routes,
    and the data which is returned we then use to update our $scope (if needed).

    Any AJAX-style requests are going to go in your Factory -- not your Controller!

    Note: Be sure to include a callback function as a parameter in your factory
    methods if you need to update $scope data! See the note in the head of the
    Controller file!

*/
app.factory('petFactory', ['$http', function($http){
	var pets = [];
	var factory = {};

	// Create a Pet:
	factory.create = function(pet, callback){
        /*
            Insert AJAX ($http) requests to Server Routes here!
            Note: We are *not* querying our Angular routes, and instead
            we're focusing in on our Server Routes Only!
        */
		// Send new pet to the server!
		console.log('Angular factory running..sending to server...');
        $http.post('/pets', pet).then(function(newPet){
			console.log('Ajax data returned from server...');
			console.log(newPet.data);
		});
	};

	// Show All Pets:
	factory.index = function(callback){
		$http.get('/pets').then(function(allPetsReturned){
			console.log(allPetsReturned.data);
			pets = allPetsReturned.data;
			/////////////////////////
			/////////////////////////
			///
			/// 	Callbacks to Update $scope:
			///
			/////////////////////////
			/////////////////////////

			/*
			You might want to run a Callback function to update
			your $scope so you can then use this data in your Views.

			See 'file_simple_server_assgn' in your other projects folders:
			'Google Drive/web-design/coding-dojo/ch16-mean/06-full-mean/file_simple_server_assgn/'
			for a better example of how you can use callbacks to update your view.
			*/
			callback(pets);
		});
	};

	// Show Single Pet:
	factory.show = function(id, callback){
		$http.get('/pets/' + id).then(function(foundUserReturned){
			var foundPet = foundUserReturned.data;
			callback(foundPet);
		});

		// Note: If you are trying the easier method that
		// was noted in the Angular Pet Show Controller,
		// you can uncomment the lines below. You'll notice
		// that a promise is not used here -- instead we
		// are directly returning the data from the AJAX
		// request and the promise instead is going to be
		// handled by the controller (see ang_pet_show_controller).

		// return $http.get('/pets/' + id);

		// The line above, if uncommented, will return
		// the object given back from the AJX request
		// back over the controller

	};

	// Update Single Pet:
	factory.update = function(id, pet, callback){
		$http.put('/pets/' + id, pet);
	};

	// Delete User:
	factory.delete = function(id){
		$http.delete('/pets/' + id);
	};

	return factory; // adds all methods to `factory` object
}]);
