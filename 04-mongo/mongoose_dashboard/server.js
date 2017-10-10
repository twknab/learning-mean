// DEPENDENCIES & SETUP:
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8000;
var app = express();

// APP SETUP:
require('./server/config/app')(app, express, bodyParser, path);
/
// MONGOOSE:
require('./server/config/mongoose')(mongoose, path);// the '.Cat' refers the to Cat object inside of database.js  - look at the math module assignment to see why this is invoked this way (using .cat)

// ROUTES:
require('./server/config/routes')(app, mongoose);

// RUN:
app.listen(port, function(){
	console.log('Listening on http://localhost:'+port);
});