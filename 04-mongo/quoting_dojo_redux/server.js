// SETUP APP AND DEPENDENCIES:
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

// SETUP DATABASE AND SCHEMA
var Quote = require('./server_modules/database')(mongoose).Quote;

// BEGIN SERVER ROUTES ----------
require('./server_modules/routes')(app, Quote);

// RUN SERVER
app.listen(port, function(){
	console.log('Listening on http://localhost:'+port);
});
