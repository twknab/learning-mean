// Begin Angular Client-Side Code:

var app = angular.module('app', []);
app.controller('favFoods', function($scope){
	$scope.foods = [];
	$scope.addFood = function(){
		$scope.foods.push($scope.favFood);
		$scope.food = '';
	}
})