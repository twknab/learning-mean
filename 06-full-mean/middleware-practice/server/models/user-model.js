// Setup dependencies here (mongoose, bcrypt):
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    // bcrypt could go here if we needed to add in a password hashing later

// Setup a schema:
var UserSchema = new Schema (
    {
        username: {
            type: String,
            minlength: [2, 'Username must be at least 2 characters.'],
            maxlength: [20, 'Username must be less than 20 characters.'],
            required: [true, 'Your username cannot be blank.'],
            trim: true,
            unique: true, // username must be unique
            dropDups: true,
        }, // end username field
    },
    {
        timestamps: true,
    }
);

// This instantiates our model (which we export at the very end of this file):
var User = mongoose.model('User', UserSchema);

// Finally, our module is exported:
module.exports = User;
