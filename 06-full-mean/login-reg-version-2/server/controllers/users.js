var User = require('mongoose').model('User');
module.exports = {
    register: function(req, res) {
        User.create(req.body)
            .then(function(newUser){
                req.session.userID = user._id;
                res.json(newUser);
            })
            .catch(function(err){
                console.log(err);
                res.status(500).json(err);
            })
    },
    index: function(req, res){
        console.log(req.session);
        if (req.session.userID) {

            // To add more security you could see the following:
            // Uncomment the lines below and check it out...
            // Note that 'isAdmin' would be a value stored in the DB in your model
            // User.findOne({ _id: req.session.userID })
            //     .then(function(user) {
            //         if (user.isAdmin) {
            //             return res.send('Admin eyes only!');
            //         }
            //     })

            return res.send('hello');
        }
        res.redirect('/');
    },
    login: function(req, res) {
        User.findOne({email: req.body.email})
            .then(function(user) {
                return user.verifyPassword(req.body.password)
                    .then(function() {
                        req.session.userID = user._id;
                        res.redirect('/users');
                    });
            })
            .catch(function(err) {
                res.status(500).json(err);
            })
    },
};
