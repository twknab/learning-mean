// GRAB DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// SETUP APP
var app = express();
var port = 8000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'static')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// CAPTURE ROUTES
var routes = require('./routes/routes.js')(app);

// RUN APP
app.listen(port,function(){
	console.log('Running on: http://localhost:'+port);
});