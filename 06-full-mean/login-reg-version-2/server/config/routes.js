var Users = require('./../controllers/users');

module.exports = function(app) {
    app.post('/register', Users.register)
        .post('/login', Users.login)
        .get('/users', Users.index);
};
