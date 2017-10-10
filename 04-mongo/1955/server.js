// DEPENDENCIES & SETUP:
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = 8000;

// APP SETUP:
require('./server/config/app')(app, express, bodyParser, path);

// MONGOOSE SETUP:
require('./server/config/mongoose')(mongoose, path);

// ROUTES:
require('./server/config/routes')(mongoose, app);
// RUN:
app.listen(port, function(){
	console.log('Listening on http://localhost:'+port);
});

