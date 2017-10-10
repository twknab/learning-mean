var app = angular.module('app', []); // first argument must match app name on view file
app.controller('divController', function($scope){
	$scope.myName = 'Timothy';
	$scope.myFavoriteLanguage = 'JavaScript';
	$scope.myFavoriteJSLibrary = 'Angular';
});