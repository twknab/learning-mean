// DEPENDENCIES AND APP SETUP:
var express = require('express');
var path = require('path');
var port = 8000;
var app = express();
var counter = 0;

// SETUP EJS:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// SETUP STATIC FOLDER
app.use(express.static(path.join(__dirname,'static')));

// STATIC FOLDER SETUP INSIDE OF ANOTHER FOLDER (KEEP FOR FUTURE REFERENCE)
// app.use('myDir', express.static(path.join(__dirname,'static')));

// ROUTES:
app.get('/', function(req, res) {
	res.render('index');
});

// RUN SERVER:
var server = app.listen(port, function(){
	console.log('Listening on http://localhost:'+port);
});

// SETUP SOCKETS:
var io = require('socket.io').listen(server);

// SOCKET LISTENERS AND EMITS:
io.sockets.on('connection', function(socket){

	// Confirm Sockets Connection:
	console.log('Sockets connected.', 'Your socket id is:', socket.id);
	socket.emit('connected', 'Welcome to the button game and sockets! :)');

	// Listen for Epic Button Clicks:
	socket.on('buttonClicked', function(){
		console.log('Epic Button has been clicked!');
		counter++;
		io.emit('updateCount', counter);
	});

	// Listen for Reset Button Click:
	socket.on('resetClicked', function(){
		console.log('Reset has been clicked!');
		counter = 0;
		io.emit('updateCount', counter);
	});
});