module.exports = function(mongoose, app){
	// controllers and routes setup

	// CONTROLLERS
	var Post = mongoose.model('Post');
	var Comment = mongoose.model('Comment');
	var postsController = require('../controllers/posts')(mongoose, Post);
	var commentsController = require('../controllers/comments')(mongoose, Comment, Post);

	// ROUTES
	app.get('/', postsController.show);
	app.post('/', postsController.create);
	app.post("/:id/comment", commentsController.create);
};