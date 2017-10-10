// DEPENDENCIES AND APP SETUP:
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 8000;
var app = express();

// EJS, VIEWS/STATIC & BODY-PARSER SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// CONNECT DATABASE & CREATE SCHEMAS
var cat = require('./server_modules/database')(mongoose).Cat; // the '.Cat' refers the to Cat object inside of database.js  - look at the math module assignment to see why this is invoked this way (using .cat)

// ROUTES
require('./server_modules/routes')(app, cat);

// RUN SERVER
app.listen(port, function(){
	console.log('Listening on http://localhost:'+port);
});