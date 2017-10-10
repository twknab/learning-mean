module.exports = function(mongoose, Post){
	// posts controller
	return {
		show : function(req, res) {
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
		},
		create : function(req, res) {
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
		},
	};
};