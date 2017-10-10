var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-as-promised');

var UserSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            minlength: 2,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            minlength: 5
        },
        password: {
            type: String,
            required: true,
            trim: true
        }
    }, {
        timestamps: true
    }
);

// Do these before the instance saves:

UserSchema.pre('save', function(next) { // next is a function that runs after things save as next()
    if (!this.isModified('password')) return next(); // `isModified` will return true or false if modified -- this line is saying, if this HASN'T been changed, run the next() function
    // this code below will run only if the password HAS changed (such as new password creation):

    var self = this;

    bcrypt.hash(this.password, 10) // will return a promise
        .then(function(hash) {
            self.password = hash;
            next();
        })
        .catch(next);
});

UserSchema.methods.verifyPassword = function(password){
    return bcrypt.compare(password, this.password); // this will send back a promise
};

// Instantiates our model and exports it
module.exports = mongoose.model('User', UserSchema);
