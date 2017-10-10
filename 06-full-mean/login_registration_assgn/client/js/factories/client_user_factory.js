app.factory('userFactory', ['$http', function($http) {
    // Construct our Factory Object
    var users = [];
    var factory = {};

    // Create:
    // Note: these functions become a part of the 'factory' object above
    // there are a few different ways to construct this object, but this
    // has been my personal preference so far.
    factory.create = function(newUser) {
        return $http.post('/users', newUser)
        // .then(function(addedUser) {
        //     console.log(addedUser.data);
        //     // users.push(returnData.data.newUser);
        //     // note: the line above would, if uncommented, send the data
        //     // to the 'users' array defined at the top of this document.
        //     // This would make our object available to our views in angular,
        //     // however instead we are going to query the database to get all
        //     // users and use this to update our view instead. Just wanting
        //     // to clarify to help in understanding how things are working.
        //     console.log(addedUser);
        //     return addedUser;
        // });
    };

    // Read (All):
    factory.index = function(callback) {
        $http.get('/users').then(function(returnData) {
            console.log(returnData.data);
            users = returnData.data.allUsers;
            callback(users);
        });
    };

    // Read (Single):
    factory.show = function(id, callback) {
        $http.get('/users/' + id).then(function(returnData) {
            console.log(returnData.data);
            var foundUser = returnData.data.foundUser;
            console.log(foundUser);

            var createdAt = new Date(foundUser.createdAt);
            var updatedAt = new Date(foundUser.updatedAt);

            foundUser.createdAt = new Date(foundUser.createdAt);
            foundUser.updatedAt = new Date(foundUser.updatedAt);

            callback(foundUser);
        });
    };

    // Update:
    factory.update = function(id, updatedUser) {
        $http.put('/users/' + id, updatedUser).then(function(returnData) {
            console.log(returnData.data);
        });
    };

    // Destroy:
    factory.destroy = function(id) {
        console.log('Communicating with database...');
        $http.delete('/users/' + id).then(function(returnData) {
            console.log(returnData.data);
        });
    };

    return factory;
}]);
