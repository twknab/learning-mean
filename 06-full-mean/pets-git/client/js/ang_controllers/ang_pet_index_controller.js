/////////////////
/////////////////
////
////	Angular Index Pet Controller
////
////////////////////////////////////////////////
////////////////////////////////////////////////

app.controller('indexPetController', ['$scope', 'petFactory', '$location', function($scope, petFactory, $location){
	function pets(data){
		$scope.pets = data;
		$scope.pet = {};
	};

	// Show All Pets:
	$scope.index = function(){
		console.log('Index method in pet controller now running...');
		petFactory.index(pets);
	};

	// Run Show All Pets Function so Index loads with All Pets:
	$scope.index();

	// Destroy Pet:
	$scope.delete = function(id){
		console.log('Deleting pet...');
		petFactory.delete(id);
		$scope.index();
	};
}]);
