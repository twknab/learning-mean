var express = require('express');
var app = express();
var port = 8000;
var io = require('socket.io');
var stockPrice = Math.round(Math.random() * 50);

setInterval(function() {
	stockPrice = Math.round(Math.random() * 50);
}, 2000)


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/price', function(req, res) {
	res.json(stockPrice);
});

var server = app.listen(port, function() {
	console.log('running on:', port);
});

var io = io.listen(server);

io.sockets.on('connection', function(socket) {
	console.log('a connection has been made!');
	console.log(socket.id);

	socket.emit('hello');
	socket.emit('helloParams', 'This is a way to emit with a parameter'); // in this example we are passing data to the client

	socket.on('hi', function() {
		console.log('hi event has been sent from the client!'); // ON SERVER SIDE
	})

	// listen for chat:
	socket.on('somethingSaid', function(text) {
		console.log(text);
		// broadcast all
		io.emit('textUpdated', text);
	})
});

// let's do setInterval again but this time let's also run a socket emit
setInterval(function() {
	stockPrice = Math.round(Math.random() * 50);
	io.emit('stockUpdated', stockPrice)
}, 2000)