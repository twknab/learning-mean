module.exports = function(app, Quote){

	/////////////////////// BEGIN NON-AJAX ///////////////////////
	// Root:
	app.get('/', function(req, res){
		res.render('index');
	});

	// Create Quote:
	app.post('/quotes', function(req, res){
		Quote.create(req.body, function(err, newQuote){
			if (err){ 
				console.log('Quote addition not successful!', err) 
			} else {
				console.log('Quote added successfully...');
				res.redirect('/quotes');
			}
		});
	});

	// Show All Quotes:
	app.get('/quotes', function(req, res){
		Quote.find({}).sort({'vote': 'desc'}).exec(function(err, allQuotes){ // 'desc' can also be 'asc' for ascending
			if (err) {
				console.log('All Quotes retrieval not successful!', err);
			} else {
				console.log('All Quotes successfully retrieved', allQuotes);
				res.render('quotes', {quotes: allQuotes});
			}
		});
	});

	// Up Vote:
	app.get('/:id/upVote', function(req, res){
		console.log('Up Vote Clicked!');
		Quote.findOne({_id: req.params.id}, function(err, quote){
			quote.vote += 1;
			quote.save(function(err){
				if (err){
					console.log('There were errors up voting!', err)
				} else {
					console.log(quote);
					res.redirect('/quotes');
				}
			});
		});
	});

	// Down Vote:
	app.get('/:id/downVote', function(req, res){
		console.log('Down Vote Clicked!');
		Quote.findOne({_id: req.params.id}, function(err, quote){
			quote.vote -= 1;
			quote.save(function(err){
				if (err){
					console.log('There were errors down voting!', err)
				} else {
					console.log(quote);
					res.redirect('/quotes');
				}
			});
		});
	});
	//////////////////////// END NON-AJAX ////////////////////////
};