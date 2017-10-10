module.exports =  function (app, Cat){

	// Root Route:
	app.get('/', function(req, res){
		Cat.find({}, function(err, cats){
			if(err){
				console.log('Something went wrong', err);
			} else {
				console.log('Successfully queried all cats...');
				console.log(cats);
				res.render('index', {cats: cats});
			}
		});
	});

	// Add New Cat Page:
	app.get('/cats/new', function(req, res){
		res.render('add');
	});

	// Add New Cat Page (AJAX Style)
	app.get('/ajax_style', function(req, res){
		res.render('ajax_style')
	});

	// Submit New Cat (Add to DB):
	app.post('/cats', function(req, res){
		// var cat = new Cat({name: req.body.name, color: req.body.color, hair: req.body.hair});
		// cat.save(function(err) {
		//     if(err) {
		//     	console.log('Something went wrong', err);
		//     } else {
		//     	console.log('Successfully added a cat!');
		// 	}
		// });
		// Here's another way to create a document in the DB:
		Cat.create(req.body, function(err, result){ // if the values from req.body (name field on the form) correlate they should automatically be added to your schema
			if (err) { console.log(err); }
			console.log(result);
		});

		res.redirect('/');
	});

	// Submit New Cat AJAX Style (returns JSON):
	app.post('/cats_ajax', function(req, res){
		console.log('Adding Cat');
		console.log(req.body);
		Cat.create(req.body, function(err){
			if (err) {
				res.status(500);
				console.log(err);
				res.json(err);
			} else {
				res.redirect('/cats_ajax');
			}
		});
	});

	// Show All Cats AJAX Style (returns JSON):
	app.get('/cats_ajax', function(req, res){
		Cat.find({},function(err, allCats){
			if(err){
				console.log(err)
				res.json(err);
			} else {
				res.json(allCats);
			}
		});
	});

	// Edit Cat Page:
	app.get('/cats/:id/edit', function(req, res){
		console.log('Loading edit cat page...');
		console.log(req.params.id);
		Cat.find({_id: req.params.id}, function(err, cat){
			if(err){
				console.log('Error editing cat, cannot find cat!', err);
				res.redirect('/');
			} else {
				console.log('Cat found...');
				console.log(cat);
				res.render('edit', {cat: cat[0]}); // use index to only pass the one cat instead of the full list and iterating over it (previous setup)
			}
		});
	});

	// Edit Cat AJAX Style (returns JSON):
	app.get('/cats_ajax/:id/edit', function(req, res){
		console.log('Loading edit cat page...');
		console.log(req.params.id);
		Cat.find({_id: req.params.id}, function(err, cat){
			if(err){
				console.log('Error editing cat, cannot find cat!', err);
				res.json(err);
			} else {
				console.log('Cat found...');
				console.log(cat[0]);
				res.json(cat[0]); // use index to only pass the one cat instead of the full list and iterating over it (previous setup)
			}
		});
	});

	// Submit Edited Cat (Change vals in DB):
	app.post('/cats/:id', function(req, res){
		console.log('Updating Cat now...');
		Cat.findOne({_id: req.params.id}, function(err, cat){
			if (err) {
				console.log('Errors finding Cat..', err);
			} else {
				cat.name = req.body.name;
				cat.color = req.body.color;
				cat.hair = req.body.hair;
				cat.save(function(err){
					if (err){ console.log('Error updating cat...', err) }
				})
				console.log('Cat updated.');
			}
		});
		res.redirect('/');
	});

	// Destroy Cat (please don't destroy kitties):
	app.post('/cats/:id/destroy', function(req, res){
		console.log('Removing from db...');
		Cat.remove({_id: req.params.id}, function(err){
			if (err){
				console.log('Remove was unsuccessful!', err)
			}
		});
		res.redirect('/');
	});
};