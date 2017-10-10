module.exports = function(mongoose){
	var Schema = mongoose.Schema;
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
};