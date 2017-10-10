// Grab Mongoose Models:
var User = require('mongoose').model('User');

module.exports = {

    // Create a New User for Registration (and validate):
    register: function(req, res) {
        console.log('Register route running...');
        var err;

        // Checks if email and email confirm match:
        if (req.body.email !== req.body.email_confirm) {
            err = { message: 'Email addresses do not match.' };
            return res.status(500).json(err);
        };

        // Checks if password and password confirm match:
        if (req.body.password !== req.body.password_confirm) {
            err = { message: 'Passwords do not match.' };
            return res.status(500).json(err);
        };

        // If Emails and Passwords all match, Create User:
        User.create(req.body)
            .then(function(newUser) { // after user is created:
                req.session.userID = newUser._id;
                console.log(req.session.userID);
                res.redirect('/dashboard');
            })
            .catch(function(err) { // if error:
                console.log(err);
                res.status(500).json(err);
            })
    },
    // Find an Existing User for Login:
    login: function(req, res) {
        User.findOne({email: req.body.email})
            .then(function(user) {
                // after looking up user, check password:
                user.verifyPassword(req.body.password)
                .then(function() {
                    req.session.userID = user._id;
                    res.redirect('/dashboard');
                })
            })
            .catch(function(err) {
                console.log(err);
                res.status(500).json(err);
            })
    },
    // Lookup User for User Dashboard:
    dashboard: function(req, res) {
        if (req.session.userID) {
            User.findOne({_id: req.session.userID})
                .then(function(user) {
                    return res.json(user);
                })
                .catch(function(err) {
                    console.log('%%%%%%%%%%%%%%%%%%%%');
                    console.log(err);
                })
        } else {
            res.redirect('/');
        }
    },
};
