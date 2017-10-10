var express = require('express'); // imports express
var bodyParser = require('body-parser'); // imports body-parser
var session = require('express-session'); // imports session (for demo purposes only) note: don't forget to npm install express-session and know that session is not commonly used but wanted to demo how to bring it in
var app = express(); // invokes express()

/*

Express allows you to remove all of the case/switch statements and res.writeHead statements, etc
that are required to render views. Instead, you can use the built in formattings in Express to
more easily manipulate your views.

Question: This file is my controller, correct?

*/

app.use(express.static(__dirname + '/static')); // sets '/static' as folder for static content
app.use(bodyParser.urlencoded({extended:true})); // bodyParser was installed via npm (this is called middleware) and adds a great deal of functionality to our request.body and request.params readout
app.use(session({secret: 'codingdojorocks'})); // a string is provided for encryption


// note: EJS is setup below, but you can handle views without it (however it is EJS that lets us update our views)
app.set('views', __dirname + '/views'); // sets '/views' as folder to serve view files (html)
app.set('view engine', 'ejs'); // gets EJS up and running


app.get('/', function(request, response){
	response.send('<h1>Hello Express</h1>');
});

app.get('/main', function(request, response){
	response.sendFile(__dirname + '/static/main.html');
});

app.post('/sendData', function(request, response){
	console.log(request.body);
	response.redirect('/main');
});

app.post('/sendUser', function(request, response){
	request.session.name = request.body.name; // here's how we actually store a variable under session. in this case we are storing request.body.name as request.session.name
	console.log(request.session.name);
	// add user to db
	response.redirect('/main');
})

app.get('/tim/:dogName', function(request, response){
	console.log(request.params);
	response.redirect('/main');
});

// a way to setup a route to access our CSS file if we hadn't already setup our static folder above
app.get('/css', function(request, response){  // we can now set our href to '/css' on any of our html pages
	response.sendFile(__dirname + '/static/style.css');
});

// a route which can pass along data to EJS
app.get('/users', function(request, response){
	var users_array = [
		{name: 'Michael', email: 'mike@dojo.com'},
		{name: 'Jay', email: 'jay@dojo.com'},
		{name: 'Brendan', email: 'brendan@dojo.com'},
		{name: 'Andrew', email: 'andrew@dojo.com'},
	];
	response.render('users', {users: users_array});
});


// runs our server ---- all code must be above this line -----
app.listen(7077, function(){
	console.log( 'listening on port 7077...' );
});