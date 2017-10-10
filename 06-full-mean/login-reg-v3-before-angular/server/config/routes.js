// Setup Controllers
var UsersController = require('./../controllers/users');

module.exports = function(app) {
    console.log('Server side routes now loaded...');
    app.post('/register', UsersController.register)
        .post('/login', UsersController.login)
        .get('/dashboard', UsersController.dashboard);
};
