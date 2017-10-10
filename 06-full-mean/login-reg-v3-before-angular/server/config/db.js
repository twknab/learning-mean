// Setup Dependencies:
var mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    dbName = 'loginregv3DB',
    modelsPath = path.join(__dirname, './../models'); // direct path to models folder

// Load all files in Models folder:
fs.readdirSync(modelsPath).forEach(function(file) {
    if (file.indexOf('.js') > 0) {
        require(modelsPath + '/' + file);
    }
});

// Update Mongoose Promise Library (to remove deprecation warning):
mongoose.Promise = global.Promise;

// Connect to Mongo Database:
mongoose.connect('mongodb://localhost/' + dbName);

// Mongoose and MongoDB Connection Events:
mongoose.connection
    .on('connected', function() { // on successful Mongoose and MongoDB connection
        console.log('Mongoose now connected to MongoDB using DB:', dbName);
    })
    .on('disconnected', function() { // on Mongoose and MongoDB disconnection
        console.log('Mongoose has lost connection to MongoDB and is now disconnected');
    })
    .on('error', function(err) { // if connection error
        console.log('An error has occurred connecting to MongoDB.', err);
    });

// If Connection to Node breaks, close Mongoose and MongoDB Connection:
process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        console.log('Mongoose and MongoDB connection terminated as Node has become disconnected.');
        process.exit(0);
    });
});
