//////////////////////
//
//	ASSOCIATIONS IN MONGOOSE
//
//////////////////////

	/* We can create:

		+ One to Many relationships
		+ One to One relationships

		- Many to Many relationships are not well suited for this ORM or MongoDB!

	*/


	///////////////////
	//	ONE TO MANY SETUP
	///////////////////

		// In this example, we're going to setup a mongoose Schema, and then create a Post schema and a Comment schema.
		// the Post schema will 'own' the Comment schema, creating a 'One to Many' relationship (One Post has Many Comments):

		// setup:
		var Schema = mongoose.Schema; // allows your models to read and understand the huge ObjectId attributes MongoDB automatically generates

		// post model:
		var postSchema = new mongoose.Schema({
			text: { type: String, required: true },
			comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }] // this hooks us into our Comment model
		}, { timestamps: true });

		// (1) if we look at the 'comments' key, we know that refers to 'many' comments, as it is an Array
		// (2) the 'type' property inside of the 'comments' value refers the ObjectId (tells mongoose what to look for)
		// (3) in this case, that ObjectId is referring the 'Comment' table

		// Mongoose basically stores an array full of associated comment IDs.  <-- key concept


		// Let's build out our Comments model:

		// comments model:
		var commentSchema = new mongoose.Schema({
			// we use an underscore to refer the fact we're referencing the model's owner (Post) - ie, many comments in a post (post is the owner)
			_post : { type: Schema.Types.ObjectId, ref: 'Post' }, // this hooks us up into our Post model
			text : { type: String, required: true },
		}, { timestamps: true });



		///////////////////
		//	QUERYING ONE TO MANY ASSOCIATIONS:
		///////////////////

			// We'll be using things like the .populate() and .exec() methods.

			// Here's how we'll get the comments for one post:

				// note: this route is just for example and should be customized:
				app.get('/posts/:id', function(req, res){
					// populate() is what grabs all of the comments using their IDs stored in the comment property array of the post document (table)
					Post.findOne({_id: req.params.id}); // req.params.id should grab the id from the route!
					.populate('comments')
					.exec(function(err, post){
						res.render('post', {post: post});
					})
				});


			// Adding a comment:
			// When adding a comment, we must update both parties (Comment and Post documents)

				// note: just another sample route:
				app.post('/posts/:id', function(req, res){
					Post.findOne({_id: req.params.id}, function(err, post){
						// data from form on the front end:
						var comment = new Comment(req.body);
						// set up the reference:
						comment._post = post._id;
						// save both to the db:
						comment.save(function(err){
							if(err) {
								console.log('Error');
							} else {
								res.redirect('/');
							}
						});
					});
				});


				// Putting everything from above together!

				var Schema = mongoose.Schema; // create a Schema variable to access mongoose data
				var PostSchema = new mongoose.Schema({ // setup post schema and associate with comment document
					text: {type: String, required: true},
					comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
				}, {timestamps: true});
				var CommentSchema = new mongoose.Schema({ // setup comments schema and associate with post document 
					_post: {type: Schema.Types.ObjectId, ref: 'Post'},
					text: {type: String, required: true}
				}, {timestamp: true});
				mongoose.model('Post', PostSchema); // creates model using schema
				mongoose.model('Comment', CommentSchema);
				var Post = mongoose.model('Post');
				var Comment = mongoose.model('Comment');
				app.get('/posts/:id', function(req, res){
					Post.findOne({_id: req.params.id});
					.populate('comments')
					.exec(function(err, post){
						res.render('post', {post: post});
					})
				});


	///////////////////
	//	DATA STRUCTURE
	///////////////////

		// One other thing to remember when building your data structures
		// is that the more separate objects you have, the more intense 
		// the orm querying you have to do. 

		// Instead try and build things using arrays and keeping things
		// into self contained objects, that way your querying and reaching
		// across data can be more easily accomplished.

		// Here's an example of a single document in mongo:

			// Rather than build each location a separate document,
			// we can nest them all into one array under a key called, 'locations'.
			{
				name: 'CodingDojo',
				locations: [{
					street: '1077 Main Street',
					city: 'Bellevue',
					state: 'WA',
					zip: '98004'
				}, {
					street: '1980 Zanker Road',
					city: 'San Jose',
					state: 'CA',
					zip: '95112'
				}]
			}

		// this concept above is called 'embedding documents'

		// NOTE: This is only useful when you don't have to retrieve
		// each location individually (if you did, you could create individual documents),
		// else you'd have to query for each, one at a time



