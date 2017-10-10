// DEPENDENCIES & BASIC APP SETUP:
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express(),
    port = 8000;

// APP CONFIG SETUP:
require('./config/app')(app, express, path, bodyParser);

// MONGOOSE SETUP:
require('./config/db')

// ROUTES & CONTROLLERS SETUP:
require('./config/routes')(app);

// RUN SERVER:
app.listen(port, function(){
    console.log('App running on port:', port);
});
