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

// Post Schema:
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
mongoose.model('Post', PostSchema); // creates model using schema

// Comment Schema:
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
mongoose.model('Comment', CommentSchema);

// BASIC CONTROLLERS
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

// var postsController = {
// 	show : function(){

// 	}
// }


// ROUTES
// Loads all Posts and Comments
app.get('/', function(req, res) {
	Post.find({}) // note: use .find() when wanting ALL users and .findOne() when only needing one
		.populate('_comments') // note: these are chained functions on top of Post.find()...
		.exec(function(err, allPosts) {
			if (err) {
				console.log('Error getting all posts and comments...', err);
			} else {
				console.log('All posts and comments retrieved...')
				res.render('index', {
					allPosts: allPosts
				});
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
			console.log('New Post successfully created...', newPost);
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
			}
		});
		Post.update({_id: post._id}, {$push: {_comments: newComment}}, function(err){
			if (err) {
				console.log('Error pushing comments...', err)
			} else {
				res.redirect("/");
			}
		});
	});
});

// RUN SERVER
app.listen(port, function() {
	console.log('Listening on http://localhost:' + port);
});