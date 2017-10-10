// Setup Basic App Dependencies:
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    port = 8000;

// Configure App, Setup Static Folders and Session:
require('./config/app')(express, app, path, bodyParser);

// Setup Mongoose Connection and Load Mongoose Models:
require('./config/db');

// Setup Routes and Server-Side Controllers:
require('./config/routes')(app);

// Run Server:
app.listen(port, function() {
    console.log('Running on port:', port);
});
