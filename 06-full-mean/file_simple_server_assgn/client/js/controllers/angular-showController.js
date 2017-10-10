app.controller('showController', ['$scope', 'friendFactory', '$location', '$routeParams', function($scope, friendFactory, $location, $routeParams) {

  // Update Scope
  function showFriend(data){
    $scope.foundFriend = data;
  };

  // Read (Single):
  $scope.show = function(id){
    friendFactory.show(id, showFriend);
  };

  // console.log($routeParams);
  // Note: uncomment the line above and inspect element
  // to see what the route parameter is and the data it holds.
  $scope.show($routeParams.id);

}]);