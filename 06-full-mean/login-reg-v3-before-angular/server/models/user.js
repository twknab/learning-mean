// Setup Dependencies:
var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-as-promised');

// Setup UserSchema:
var UserSchema = new mongoose.Schema (
    {
        first_name: {
            type: String,
            minlength: 2,
            required: true,
            trim: true,
            validate: {
                validator: function(first_name) {
                    return first_name.length > 2;
                },
                message: 'Last name must be longer than 2 characters...',
            }
        },
        last_name: {
            type: String,
            minlength: 2,
            required: true,
            trim: true,
            validate: {
                validator: function(last_name) {
                    return last_name.length > 2;
                },
                message: 'Last name must be longer than 2 characters...',
            }
        },
        email: {
            type: String,
            minlength: 5,
            required: true,
            trim: true,
            unique: true,
            validate: {
                validator: function(email) {
                    //////////////////////////////////
                    ///// CONFUSION POINT ONE ///////////
                    ////////////////////////////////////////
                    ///
                    /// Is there a way to also validate
                    /// for minlength in addition to the
                    /// the regex pattern below?
                    /// Note: say something like,
                    /// return email.length > 5
                    ///
                    ////////////////////////////////////////
                    /////////////////////////////////////
                    //////////////////////////////////
                    var regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
                    return regex.test(email) && email.length > 5;
                },
                message: 'Your email must be greater than 5 characters, containing only letters and numbers and valid domain formatting.'
            }
        },
        birthday: {
            type: Date,
            required: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            validate: {
                validator: function(password) {
                    console.log('Password validator running...');
                    console.log(this.checkPasswordMatch());
                    return password.length > 7;
                },
                message: 'Password is too short...',
            }
        },
    }, {
        timestamps: true,
    }
);

// Check Schema before Saving Instance:

    // This checks to see if Password Value has been Modified.
    // If it hasn't been modified, hash the password entered by user and store it.

UserSchema.pre('save', function(next) {

    var self = this; // captures instance to avoid scoping issues below

    // Encrypts our Password:
    bcrypt.hash(this.password, 10) // will return a promise
        .then(function(hash) {
            self.password = hash; // updates p/w entry to hash
            next(); // runs next() afterwards
        })
        .catch(next); // catches any errors

    self.checkPasswordMatch()
});

// Setup Additional Instance Methods:

// Verify User Entered Password to Hash:
UserSchema.methods.verifyPassword = function(password) {
    return bcrypt.compare(password, this.password);
};

// Compare Password and Password Confirm:
UserSchema.methods.checkPasswordMatch = function(password, password_confirm) {
    return password === password_confirm;
};

// Instantiate our Model and Export:
module.exports = mongoose.model('User', UserSchema);
