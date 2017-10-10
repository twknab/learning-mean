module.exports = function(mongoose, User, bcrypt){
	return {

		show : function(req, res) {
			User.findOne({_id: req.params.id}, function(err, foundUser){
				if (err) {
					console.log(err);
				} else {
					res.json({foundUser:foundUser});
				}
			});
		},
		create : function(req, res) {
			console.log(req.body);

			User.create(req.body, function(err, newUser){
				if (err) {
					res.status(404);
					res.json( err.errors );
					console.log(err);

					// Use flash messages to display!!
					// or ng-messages
					// angular flash

				} else {
					console.log(newUser);
					res.json(newUser);
				//////////////////////////////////////////
				//////////////////////////////////////////
				// THIS RUNS THROUGH YOUR PW VALIDATION //
				//////////////////////////////////////////
				//////////////////////////////////////////
				// 	if (!newUser.comparePasswords(req.body.password, req.body.password_confirm)) {
				// 		console.log('Passwords did not match!');
				// 		res.json('Passwords must match!');
				// 	} else {
				// 		console.log('Passwords matched, encrypting pw...')
				// 		newUser.encryptPassword();
				// 		// newUser.save(function(err, createdUser){
				// 		// 	if (err) {
				// 		// 		console.log(err);
				// 		// 		res.json(err);
				// 		// 	} else {
				// 		// 		console.log('TIS ALL GOOD G');
				// 		// 		res.json(createdUser);
				// 		// 	}
				// 		// })
				// 		res.json(newUser);
				// 	};
				//////////////////////////////////////////
				//////////////////////////////////////////
				// THIS RUNS THROUGH YOUR PW VALIDATION //
				//////////////////////////////////////////
				//////////////////////////////////////////
				}
			})


			// Here's another way we can create our new User

			// var myNewUser = new User(req.body);
			// console.log(myNewUser.validateSync());
			// console.log('%%%%%%%%%%')
			// console.log('Password to turn to hash: ', req.body.password);
			// console.log('%%%%%%%%%%')
			// console.log(myNewUser.comparePasswords(req.body.password, req.body.password_confirm));
			// if (!myNewUser.comparePasswords(req.body.password, req.body.password_confirm)) {
			// 	console.log('Passwords did not match!');
			// 	res.json('Passwords must match!');
			// } else {
			// 	console.log('Passwords matched, encrypting pw...')
			// 	myNewUser.encryptPassword();
			// 	myNewUser.save(function(err, createdUser){
			// 		if (err) {
			// 			console.log(err);
			// 			res.json(err);
			// 		} else {
			// 			console.log('TIS ALL GOOD G');
			// 			res.json(createdUser);
			// 		}
			// 	})
			// 	// res.json(myNewUser); // sends back our new user
			// };
			/*
				You can put bcrypt here, as noted below, however in this project
				we are invoking our usage of bcrypt in the server mongoose models.
				Uncomment the lines below to use bcrypt to convert password to hash:
			*/
			// var newUser = new User();
			// newUser.first_name = req.body.first_name;
			// newUser.last_name = req.body.last_name;
			// newUser.email = req.body.email;
			// newUser.pw_hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
			// newUser.save(function(err){
			// 	if (err) {
			// 		console.log(err);
			// 	} else {
			// 		res.json({newUser:newUser});
			// 	}
			// });
		},
		update : function(req, res) {
			User.findOne({_id: req.params.id}, function(err, userToUpdate){
				if (err) {
					console.log(err);
				} else {
					console.log(userToUpdate);
					userToUpdate.first_name = req.body.first_name;
					userToUpdate.last_name = req.body.last_name;
					// note: angular is so cool the 'updatedAt' is done automatically for you!
					userToUpdate.save(function(err, updatedUser){
						if (err) {
							console.log(err);
						} else {
							res.json({updatedUser:updatedUser});
						}
					});
				}
			});
		},
		destroy : function(req, res) {
			console.log('running delete controller on server...')
			User.remove({_id: req.params.id}, function(err){
				if (err) {
					console.log(err);
				} else {
					res.json({message:'User successfully deleted.'});
				}
			});
		},
	};
};
