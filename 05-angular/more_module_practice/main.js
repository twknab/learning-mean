// our controller stuff goes here:

var app = angular.module('app', []);
app.controller('myController', ['$scope', function($scope){
	// printController will show the current $scope:
	$scope.printController = function(){
		console.log($scope);
	}
}]);