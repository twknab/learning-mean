app.controller('newController', ['$scope', 'friendFactory', '$location', function($scope, friendFactory, $location) {
  // Get data from Factory:
  function friends(data){
    $scope.friends = data;
    $scope.friend = {};
  };

  // Create:
  $scope.create = function(){
    friendFactory.create($scope.friend, friends);
    // By adding '$location' in the controller above, we can now use $location to
    // create a redirect to a new route. In the example  below we can actually just pass
    // '/' as this is already caught in our routes and will render the appropriate view.
    $location.url('/')
  };

}]);