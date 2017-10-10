/* QUESTIONS:
	
	(1): Can we use Try and Except style to handle validations?
	 	For example) If I enter a string of text into the age field, the schema breaks
	 	as it expects a number. (Ironically enough if you do a typeof(req.body.age), it
	 	is a string...) The app will break if not a number (despite the typeof difference),
	 	and it would be sweet to be able to catch that error.



*/

// APP DEPENDENCIES AND SETUP
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = 8000;
// var users = []; // from before I added the db to test functionality

// SETUP EJS, STATIC FOLDER & BODY PARSER
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: true}));

// CONNECT DATABASE
mongoose.connect('mongodb://localhost/basic_mongoose', function(){
	console.log('connected to mongo!');
}); // note: 'basic_mongoose' is the DB name (will create it if it doesn't exist)

// CREATE DATABASE SCHEMAS
var UserSchema = new mongoose.Schema({ // 'UserSchema' defines the structure for our schema
 name: String,
 age: Number
})
mongoose.model('User', UserSchema); // this actually creates the schema, naming it 'User' and using 'UserSchema' as the skeleton
var User = mongoose.model('User') // we assign 'User' to our newly created schema called 'User'..this lets us do CRUD operations easier

// ROUTES
app.get('/', function(req, res){
	User.find({}, function(err, users){
		if(err){
			console.log('something went wrong', err);
		} else {
			console.log('successfully queried all users...');
			res.render('index', {users: users});
		}
	});
});

app.post('/users', function(req, res){
	console.log(req.body);
	console.log(typeof(req.body.name));
	console.log(typeof(req.body.age));
	// users.push(req.body); // this was before I added in the DB to test functionality

	// create a new User with the name and age corresponding to those from req.body
	var user = new User({name: req.body.name, age: req.body.age});
	// note you could also type:
	// User.create( {name: req.body.name, age: req.body.age}, function(err, createdUser){
	// 	if (err){
	// 		console.log('There were errors!',err);
	// 	} else {
	// 		console.log('Created book!');
	// 		res.redirect('/');
	// 	}
	// })
	// Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
	user.save(function(err) {
	    // if there is an error console.log that something went wrong!
	    if(err) {
	    	console.log('something went wrong', err);
	    } else { // else console.log that we did well and then redirect to the root route
	    	console.log('successfully added a user!');
	    	res.redirect('/');
		}
	});
});

// RUN SERVER
app.listen(port, function(){
	console.log('Listening on http://localhost:'+port);
});