// DEPENDENCIES & SETUP
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = 8000;

// APP SETUP
require('./server/config/app_setup')(app, express, path, bodyParser);

// MONGOOSE SETUP
require('./server/config/mongoose_setup')(mongoose, path);

// CONTROLLERS AND ROUTES
require('./server/config/routes')(mongoose, app);

// RUN SERVER
app.listen(port, function() {
	console.log('Listening on http://localhost:' + port);
});