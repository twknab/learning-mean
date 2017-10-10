//////////////////////
//
//	VALIDATIONS
//
//////////////////////

	//////////////////////
	//
	//	SETUP VALIDATORS
	//
	//////////////////////

		// Using required fields, as seen below, we can force mongoose to help us
		// our validations. Checkout the code below:

		var UserSchema = new mongoose.Schema({
			first_name: { type: String, required: true, minlength: 6 },
			last_name: { type: String, required: true, maxlength: 20 },
			age: { type: Number, min: 1, max: 150 },
			email: { type: String, required: true }
		}, { timestamps: true });

		// you can see above using 'required' key in your schema creation automatically brings in mongoose validations.

		// here's more info on validations:
		// http://mongoosejs.com/docs/validation.html


	//////////////////////
	//
	//	VALIDATIONS
	//
	//////////////////////

		/////////////////////
		//	Server.js Side:
		/////////////////////

			app.post('/users', function(req, res){
				var user = new User(req.body);
				user.save(function(err){
					if(err){
						res.render('index', {title: 'you have errors', errors: user.errors});
					} else {
						res.redirect('/users');
					}
				});
			});

		/////////////////////
		//	Index.ejs Side:
		/////////////////////
			 
			// Note: this is commented out as HTML, copy and paste into a .html/.ejs to see syntax:
			// Essentially, here you iterate through the errors list and print each one:

			/*<!-- HTML -->

				<% if(typeof(errors) != 'undefined') { %>
					<% for (var x in errors) { %>
						<h3><%= errors[x].message %></h3>
					<% } %>
				<% } %>

			<!-- END HTML -->*/


		// If the built in validation functions aren't enough, check out this node module, 'Mongoose Validator':
		// https://github.com/leepowellcouk/mongoose-validator
		// npm install mongoose-validator --save



	// From the Quiz:
	UserSchema.path('email').required(true, 'User email cannot be blank');


		