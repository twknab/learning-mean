// Grab our Mongoose Model for 'User' (that's the name we chose)
var User = require('mongoose').model('User');

module.exports = {
    // Find an existing username:
    create: function(req, res) {
        console.log('3: Server Controller: Here is the bodyParser data...', req.body);
        User.create(req.body)
            .then(function(newUser) {
                console.log(newUser)
                req.session.userID = newUser._id;
                console.log('%%%%% S E S S I O N %%%%');
                console.log(req.session.userID);
                console.log('%%%%%%%%%%%%%%%%%%%%%%%%');

                return res.json(newUser);
            })
            .catch(function(err) {
                console.log(err);
                return res.status(500).json(err);
            })
    },
    status: function(req, res) {
        console.log('%%%%%% I N F O %%%%%%%');
        console.log(req.session.userID);
        console.log(req.user);
        console.log('%%%%%%%%%%%%%%%%%%%%%%');

        if (req.user) {
            console.log('&*&*&*&*&*&*&*&*&*&');
            return res.json(req.user);
        } else {
            console.log('$#$#$#$#$#$#$#$#$#$');
            return res.json(req.session.userID);
        }
    },
};
