// Angular JS File for Controlling Users Assignment:

var app = angular.module('app', []);
app.controller('users', function($scope){
	$scope.users = [];
	$scope.addUser = function(){
		$scope.users.push($scope.user);
		$scope.user = '';
		console.log($scope.user);
	};
	$scope.printIndex = function(value){
		console.log(value);
		$scope.deleteUser(value);
	};
	$scope.deleteUser = function(userDelete){
		console.log(userDelete);
		$scope.users = $scope.users.filter(function(myUsers){
			return myUsers !== userDelete;
		})
		// var userIdx = $scope.users.indexOf(userDelete);
		// console.log(userIdx);
		// for (var i = 0; i < $scope.users.length; i++){
		// 	if ($scope.users[i] == $scope.users[userIdx]) {
		// 		$scope.users.splice($scope.users[userIdx],1);
		// 	}
		// }
	};
});