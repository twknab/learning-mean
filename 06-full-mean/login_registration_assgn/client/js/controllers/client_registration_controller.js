app.controller('registrationController', ['$scope', 'userFactory', '$location', '$routeParams', '$route', function($scope, userFactory, $location, $routeParams, $route) {

    // // Callback function to write data to $scope:
    // function usersCallback(data) {
    //     $scope.users = data;
    //     $scope.user = {};
    // };

    // Create:
    $scope.create = function(id) {
        console.log('Creating new user...');
        userFactory.create($scope.user).then(function(addedUser){
            console.log(addedUser);
        })
        .catch(function(response){
            console.log(response);
            console.log({error: response.data});
        })
            //////////////////////////////////////////////
            //////////////////////////////////////////////
            // THIS IS WHERE THINGS WERE GOING WRONG
            //////////////////////////////////////////////
            //////////////////////////////////////////////
            // .then(function(res){
            //     console.log(res);
            //     $location.url('/');
            // })
            // .catch(function(response){
            //     console.log('Error: ', response);
            // })
            //////////////////////////////////////////////
            //////////////////////////////////////////////
            // THIS IS WHERE THINGS WERE GOING WRONG
            //////////////////////////////////////////////
            //////////////////////////////////////////////
        console.log('%%%%%%% L O G G I N G %%%%% R O U T E %%%%%%%%%');
        console.log($route);
        console.log('%%%%%%% D O N E %%%%% L O G G I N G %%%%%%%%%');
        // use $location now to send the user to the 'dashboard' after being logged in
    };

    // // Update:
    // $scope.update = function(id) {
    //     userFactory.update(id);
    // };
    //
    // // Destroy:
    // $scope.destroy = function(id) {
    //     console.log('Destroying User...');
    //     userFactory.destroy(id);
    //     $scope.index();
    // };

}]);
