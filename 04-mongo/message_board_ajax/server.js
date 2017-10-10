/*

In this project I tried to use AJAX for post and comment submissions.
I found out that once I initially send a JSON response, it seems that
any additional JSON send causes conflicts with headers, and my page
instead directs to a JSON object, and the DOM is never modified in my .done() ajax
callback.

Below I was trying to load the whole page contents with ajax on page load,
and then append data. I found any additional appending causes the error.

See the 'message_board_ajax' folder for an example that is less
intense than this one. Eitherway, this will be something I have
to learn how to understand and deal with, as I may want to do
multiple ajax requests to the server.

My Theory On What It Wasn't Working:

Once I append to the DOM via jquery (on doc ready) and on submit,
the new elements are listed. However now when I try and submit a new comment
to a brand new post for example, my theory is that to the browser, the post
does not even necessarily exist, as it was not there on page load. Thus
the first comment submission to a new post (after the post was added via ajax)
was not working (I was being redirected to a page with the JSON object itself).
However, if I refreshed the page, suddenly the DOM object was able to take
comment appends (note, this was the behavior before I modified to the code
to its current state for purposes of experimentation...). Eitherway, I'm
not sure what I am doing wrong and need to move on.



*/











// SETUP DEPENDENCIES AND APP
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = 8000;

// EJS, VIEWS FOLDER, BODY-PARSER SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// SETUP DATABASE, ONE-TO-MANY SCHEMAS, VALIDATIONS
mongoose.connect('mongodb://localhost/messageBoard', function() { // using 'messageBoard' as db
	console.log('Connected to Mongo!');
});
var Schema = mongoose.Schema; // create a Schema variable to access mongoose data
var PostSchema = new mongoose.Schema({ // setup post schema and associate with comment document
	name: {
		type: String,
	},
	message: {
		type: String,
	},
	_comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
}, {
	timestamps: true
});
PostSchema.path('name').required(true, 'Post error: your name cannot be blank!');
PostSchema.path('message').required(true, 'Post error: your message cannot be blank!');
var CommentSchema = new mongoose.Schema({ // setup comments schema and associate with post document 
	_post: {
		type: Schema.Types.ObjectId,
		ref: 'Post'
	},
	name: {
		type: String,
	},
	message: {
		type: String,
	}
}, {
	timestamps: true
});
CommentSchema.path('name').required(true, 'Comment error: your name cannot be blank!');
CommentSchema.path('message').required(true, 'Comment error: your message cannot be blank!');
mongoose.model('Post', PostSchema); // creates model using schema
mongoose.model('Comment', CommentSchema);
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

// ROUTES
// Loads Homepage
app.get('/', function(req, res) {
	res.render('index');
});

// Loads all Posts and Comments:db
app.get('/all', function(req, res) {
	Post.find({}) // note: use .find() when wanting ALL users and .findOne() when only needing one
		.populate('_comments') // note: these are chained functions on top of Post.find()...
		.exec(function(err, allPosts) {
			if (err) {
				console.log('Error getting all posts and comments...', err);
			} else {
				console.log('All posts and comments retrieved...')
				res.json(allPosts);
			}
		});
});

// Submits and Creates New Post
app.post('/', function(req, res) {
	Post.create(req.body, function(err, newPost) { // if the values from req.body (name field on the form) correlate they should automatically be added to your schema
		if (err) {
			console.log('Error creating post...', err);
			res.render('index', {
				errors: err.errors
			});
		} else {
			console.log('New Post successfully created...');
			res.set();
			res.redirect('/');
		}
	});
})

// Submits and Creates New Comment
app.post("/:id/comment", function(req, res){
	var post_id = req.params.id;
	Post.findOne({_id: post_id}, function(err, post){
		var newComment = new Comment({name: req.body.name, message: req.body.message});
		newComment._post = post._id;
		newComment.save(function(err){
			if(err){
				console.log('Errors saving comment...', err);
				res.render('index', {
					errors: newComment.errors
				});
			} else {
				console.log("Comment succesfully added...");
				Post.update({_id: post._id}, {$push: {_comments: newComment}}, function(err){
					if (err) {
						console.log('Error pushing comments...', err)
					} else {
						console.log(newComment);
						res.redirect('/');
					}
				});
			}
		});
	});
});

// RUN SERVER
app.listen(port, function() {
	console.log('Listening on http://localhost:' + port);
});