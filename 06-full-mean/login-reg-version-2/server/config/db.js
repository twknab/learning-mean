/// SETUP DEPENDENCIES AND DB NAME:
var mongoose = require('mongoose'),
db = 'sessionTestDB',
path = require('path'),
fs = require('fs'),
models_path = path.join(__dirname, './../models') // make sure this direct path

// LOAD ALL MODELS:
fs.readdirSync(models_path).forEach(function(file) { // goes through each file in above folder
    if (file.indexOf('.js') > 0) { // looks only for .js files
        require(models_path + '/' + file)(mongoose); // requires each .js file
        // Note: if model(s) files are not setup, passing 'mongoose' will break application
    }
});

// UPDATE PROMISE LIBRARY
mongoose.Promise = global.Promise;

// CONNECT TO DATABASE:
mongoose.connect('mongodb://localhost/' + db);

// WHEN CONNECTED:
mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to: ' + db);
});

// IF CONNECTION ERROR:
mongoose.connection.on('error', function(err){
    console.log(err);
});

// WHEN DISCONNECTED:
mongoose.connection.on( 'disconnected', function() {
    console.log('Mongoose now disconnected.');
});
