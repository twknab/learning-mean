/////////////////
/////////////////
////
////	Angular Create Pet Controller
////
////////////////////////////////////////////////
////////////////////////////////////////////////
/*

    Note: This angular controller is not going to do much logic. Instead, it is
    going to pass objects or data over to your Angular Factory, which will do
    the actual logic or AJAX requests to your server-side routes.

    The controller is really your place to organize data, choose which factory
    or factory methods you'd like to invoke, and pass along the proper data.

    Note: you can also, in your Controller, use the '$location' service to send
	a redirect. This redirect will load following the controller method
	invocation. When invoking the `$location` service, be sure to pass in the
    server-side URL route (you must have a route setup to be caught) as your
    parameter.

    Note: Do not forget to create a callback function which you can also pass
    to your Factory so that any data currently in the scope is updated after
    the Factory is done doing its logic!

*/

app.controller('createPetController', ['$scope', 'petFactory', '$location', function($scope, petFactory, $location){
	// Get data from Factory:
	function pets(data){
		$scope.pets = data;
		$scope.pet = {};
	};

	// Create New Pet:
	$scope.create = function(){
        console.log('Angular controller now running..sending to factory...');
		petFactory.create($scope.pet, pets);
		/*
			By adding '$location' in the controller above, we can now use '$location'
        	to create a redirect to a new route. In the example,  below we can actually
	        just pass '/urlToRedirectTo' and if we have a route setup, we will be able
	        to render the appropriate view. Uncomment the line below to take advantage
	        of the $location service in this petController (also be sure that '$location'
        	has been added to both the depedencies array, and the passed in function).
		*/
		$location.url('/'); // takes user back to r00t route - 3733t m4ng
	};
}]);
