// Load controller so routes can access it:
// Remember, the controller is where the actual Mongoose commands live.
var UsersController = require('./../controllers/server-user-controller');

// Routes go here:
// These routes are used for your Angular Factory to send or retrieve data.
module.exports = function(app) {
    console.log('Server side routes loaded...');
    app.post('/create', UsersController.create)
        .get('/status', UsersController.status)
};
