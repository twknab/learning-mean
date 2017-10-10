// Basic app and dependencies setup:
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 6770;

// Folders and models setup:
require('./config/app')(app, express, path, bodyParser);

// Connect to our database:
require('./config/mongoose')(path);

// Server side routes:
require('./config/routes')(app);

// Listen to server:
app.listen(port, function(){
    console.log('App running on http://localhost:' + port);
});
