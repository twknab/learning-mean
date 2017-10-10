app.controller('indexController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, $routeParams) {

    function userCallback(newUser) {
        $scope.person = {};
        $scope.newUser = newUser;
        $scope.status();
    };

    function statusCallback(info) {
        $scope.info = info;
    };

    // Setup Login Method in Controller:
    $scope.create = function() {
        console.log('1: Ang Controller: Creating user...', $scope.person);
        userFactory.create($scope.person, userCallback);
    };

    $scope.status = function() {
        console.log('STATUS FUNCT: Controller running...');
        userFactory.status(statusCallback);
    };

    $scope.status();

}]);
