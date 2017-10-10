module.exports = function(mongoose, Comment, Post){
	// comments controller
	return {
		create : function(req, res){
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
		},
	};
};