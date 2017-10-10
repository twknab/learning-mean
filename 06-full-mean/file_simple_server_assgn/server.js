// DEPENDENCIES & SETUP
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var port = 8000;

// APP SETUP
require('./server/config/app')(app, express, path, bodyParser);

// MONGOOSE SETUP
require('./server/config/mongoose')(mongoose, path);

// CONTROLLERS AND ROUTES FOR DATABASE:
require('./server/config/routes')(mongoose, app);

// RUN SERVER
app.listen(port, function() {
	console.log('Listening on http://localhost:' + port);
});