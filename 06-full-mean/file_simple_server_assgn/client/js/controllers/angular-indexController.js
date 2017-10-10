app.controller('indexController', ['$scope', 'friendFactory', '$location', '$routeParams', function($scope, friendFactory, $location, $routeParams) {
  // Get data from Factory:
  function friends(data){
    $scope.friends = data;
    $scope.friend = {};
  };

  // Read (All):
  $scope.index = function(){
    friendFactory.index(friends);
  };
  // Invokes the function above to pass any existing Factory data to $scope:
  $scope.index();

  $scope.update = function(id){
    friendFactory.update(id, friends);
  };

  // Destroy:
  $scope.destroy = function(id){
    console.log('destroying...');
    friendFactory.destroy(id);
    $scope.index();
  };

}]);