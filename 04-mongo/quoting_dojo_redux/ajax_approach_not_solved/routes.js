//Routes for AJAX

///////////////////////////////////// BEGIN AJAX /////////////////////////////////////

	// Root:
	app.get('/index_ajax', function(req, res){
		res.render('index_ajax');
	});

	// Create Quote:
	app.post('/ajax_quotes', function(req, res){
		Quote.create(req.body, function(err, newQuote){
			if (err){
				console.log('Quote addition via AJAX was unsuccessful...',err)
				res.json(err);
			} else {
				console.log('Quote addition via AJAX successful...');
				res.redirect('/ajax_quotes');
			}
		});
	});

	// Show All Quotes:
	app.get('/ajax_quotes', function(req, res){
		Quote.find({}).sort({'vote': 'desc'}).exec(function(err, allQuotes){
			if (err){
				console.log('All Quotes AJAX retrieval not succesful!', err);
				res.json(err);
			} else {
				console.log('All Quotes retrieved via AJAX...');
				res.json(allQuotes);
			}
		});
	})

	// Up Vote quote:

	// Down Vote quote:

	// Destroy:
	app.get('/:id/destroy', function(req, res){
		Quote.remove({_id: req.params.id}, function(err){
			if (err){
				console.log('Remove was unsuccessful...', err);
				res.json(err);
			};
			console.log('DELETED...getting new quotes list...');
			res.redirect('/ajax_quotes');
		});
	});

	////////////////////////////////////// END AJAX //////////////////////////////////////