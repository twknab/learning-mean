/////////////////
/////////////////
////
////	Angular Show Pet Controller
////
////////////////////////////////////////////////
////////////////////////////////////////////////

app.controller('showPetController', ['$scope', 'petFactory', '$location', '$routeParams', function($scope, petFactory, $location, $routeParams){
	// Get data from Factory:
	function showPetCallback(data){
		$scope.foundPet = data;
	};

	// Show One Pet:
	function showPet(id){
		console.log("Angular show pet controller now running...");
		petFactory.show(id, showPetCallback);
	};
	showPet($routeParams.id);

	// Here's another way to write the above, using promises instead
	// of the callback function way you have previously. Uncomment the
	// lines below and comment in the lines above to see below working:

	// petFactory.show($routeParams.id).then(function(returnedUser){
	// 	$scope.foundPet = returnedUser.data;
	// });

	// Note: When uncommenting the lines below, you must also
	// make some changes to your Angular Pet Factory so that
	// the appropriate data is returned so that the promise runs.
}]);
