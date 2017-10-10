// SETUP DEPENDENCIES AND APP
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = 8000;

// SETUP EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// SETUP BODY-PARSER
app.use(bodyParser.urlencoded({extended: true}));

// SETUP STATIC FOLDER
app.use(express.static(path.join(__dirname,'static')));

// ROUTES
var routes = require('./modules/routes.js')(app);

// RUN SERVER
var server = app.listen(port, function(){
	console.log('Listening on http://localhost:'+port);
});

// SOCKETS
var sockets = require('./modules/mySockets.js')(server);

