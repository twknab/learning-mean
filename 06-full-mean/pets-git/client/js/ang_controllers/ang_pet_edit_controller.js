/////////////////
/////////////////
////
////	Angular Edit Pet Controller
////
////////////////////////////////////////////////
////////////////////////////////////////////////

app.controller('editPetController', ['$scope', 'petFactory', '$location', '$routeParams', function($scope, petFactory, $location, $routeParams){
	// Get data from Factory:
	function showPetCallback(data){
		$scope.pet = data;
	};

	// Show One Pet:
	function showUser(id){
		console.log("Angular show pet controller now running...");
		petFactory.show(id, showPetCallback);
	};
	showUser($routeParams.id);

    $scope.updateUser = function(){
        petFactory.update($routeParams.id, $scope.pet);
        $location.url('/');
    };
}]);
