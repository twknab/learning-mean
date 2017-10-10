// Setup Dependencies:
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Setup a Schema:
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

// Pre Save Hook:
UserSchema.pre('save', function(next) {
    var self = this;

    console.log('TESTING PRE SAVE');
});


// Post Save Hook:
UserSchema.post('save', function(err, doc, next) {
    console.log('Username save post hook running...', doc);
    if (err.name === 'MongoError' && err.code === 11000) {
        next(new Error('Username already taken.'));
    } else {
        next(err);
    }
});

// Instantiate Mongoose Model:
var User = mongoose.model('User', UserSchema);

// Export Model:
module.exports = User;
