module.exports = function(mongoose){
	var Schema = mongoose.Schema;
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
};