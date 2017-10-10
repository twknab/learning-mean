app.controller('editController', ['$scope', 'friendFactory', '$location', '$routeParams', function($scope, friendFactory, $location, $routeParams) {
  // Update Scope
  function showFriend(data){
    $scope.foundFriend = data;
  };


  // Show Friend
  // Note: important so you can show the friend on a form prior to updating:
  $scope.show = function(id){
    friendFactory.show(id, showFriend);
  };

  // invoke Show friend function for id matching route parameter:
  $scope.show($routeParams.id);

  // Update Friend
  $scope.update = function(id){
    friendFactory.update(id, $scope.foundFriend); // note: if we don't pass along $scope.foundFriend (which matches our form model), we won't be able to access req.body in server-side controller
    $location.url('/'); // redirects to homepage
  };


}]);