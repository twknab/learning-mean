var express = require('express');
var path = require('path');
var port = 8000;
var app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// BEGIN ROUTES ------------

app.get('/', function(req, res){
	res.render('index');
})

// END ROUTES --------------

// we change the way we normally run a server
var server = app.listen(port, function() { // NUMBER 1: server var. notice how we now start our app by putting it into a variable called 'server'
 console.log("listening on port", port);
})

// here we actually invoke socket.io and pass along our server
var io = require('socket.io').listen(server) // NUMBER 2: io var. now we create socket.io by passing along the server variable. note: socket.io must be npm installed!


// after we've (1) run the server and (2) invoked socket.io, we can setup our connections (3):

// BEGIN SOCKET EVENTS -----------

// NUMBER 3: setup connections. here whenever a connection is started, the code in the function below will run:
io.sockets.on('connection', function(socket){
	console.log('We are using sockets!');
	console.log(socket.id);

	// let's setup a listener for 'button_clicked', which can be emitted client side:
	socket.on("button_clicked", function (data){
	    console.log('Someone clicked a button!  Reason: ' + data.reason);
	    socket.emit('server_response', {response: "sockets are the best!"});
	});

	// here's how the (3) types of emits can be utilized:
	// note: these are not setup on index.ejs, go ahead and add a button to invoke them to see if you can do it
    //  EMIT (ONE:ONE):
    socket.emit('my_emit_event');
    //  BROADCAST: (ONE:MANY)
    socket.broadcast.emit("my_broadcast_event");
    //  FULL BROADCAST: (ONE:ALL)
    io.emit("my_full_broadcast_event");
})

// END SOCKET EVENTS ------------
