// DEPENDENCIES
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// APP SETUP
var port = 8000;
var app = express();
app.use(express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// HELPER FUNCTIONS
var helpers = {
	randomNumber: function(min, max){
      return Math.floor(Math.random()*(max-min+1))+min;
    }
};

// CATCH ROUTES
app.get('/', function(request, response){
	response.render('index');
});

app.get('/stock', function(request, response){
	response.send({stock: helpers.randomNumber(18,25)});
});

app.post('/chat', function(request, response){
	console.log('chat sent...')
});

// RUN SERVER
var server = app.listen(port, function(){
	console.log('Listening on localhost:'+port);
});

// SETUP SOCKETS
var io = require('socket.io').listen(server);

// SOCKET EVENTS
io.sockets.on('connection',function(socket){
	console.log('Sockets are working!');
	console.log('My socket.id is:', socket.id);

	// EVENT TRIGGERS/LISTENERS
	socket.emit('connected', {message: 'You are now connected! Welcome!'})
	socket.on('chat', function(chatData){
		console.log('updating chatroom text...')
		io.emit('updateChatText', {chatText: chatData});
		console.log(chatData);
	})

});
