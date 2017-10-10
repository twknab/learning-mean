app.factory('userFactory', ['$http', function($http) {
    // Setup Factory Object:
    var factory = {};

    factory.create = function(user, userCallback) {
        console.log('2: Ang Factory: Creating user...', user);
        $http.post('/create', user)
            .then(function(newUser) {
                console.log('4: Ang Factory: Data returned from server:', newUser.data);
                userCallback(newUser.data);
            })
            .catch(function(err) {
                console.log(err);
            })
    };

    factory.status = function(statusCallback) {
        console.log('STATUS FUNCT: Factory running...');
        $http.get('/status')
            .then(function(info) {
                console.log('STATUS FUNCT DATA:', info.data);
                statusCallback(info.data)
            })
            .catch(function(err) {
                console.log(err);
            })
    };

    // Return Factory Object:
    return factory;
}]);
