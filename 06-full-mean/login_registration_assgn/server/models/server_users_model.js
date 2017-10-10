var bcrypt = require('bcrypt');

module.exports = function(mongoose) {
    var UserSchema = new mongoose.Schema({
        first_name: {
            type: String,
            required: true,
            minlength: 2
        },
        last_name: {
            type: String,
            required: true,
            minlength: 2
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            validate: {
                validator: function(password){
                    console.log('Validator function is running...');
                    return password.length > 7; // this line should be your logic
                },
                message: "Password is too short",
            }
        }
    }, {
        timestamps: true
    });
    UserSchema.methods.comparePasswords = function(password, password_confirm){
        console.log('Compare passwords is running...');
        console.log('%%%%%%%%%%')
        console.log('Password 1: ', password);
        console.log('Password 2: ', password_confirm);
        console.log('%%%%%%%%%%')
        // console.log(password, password_confirm)
        return password === password_confirm;
    };
    UserSchema.methods.encryptPassword = function(){
        console.log(this); // `this` is our current instance of UserSchema
        console.log(this.password);
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
        console.log(this);
    };
    mongoose.model('User', UserSchema); // you can also just use `module.exports =` here
};
