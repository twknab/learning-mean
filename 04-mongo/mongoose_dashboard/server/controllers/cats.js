module.exports = function(Cat){
	return {
		show : function(req, res){
			Cat.find({}, function(err, cats){
				if(err){
					console.log('Something went wrong', err);
				} else {
					console.log('Successfully queried all cats...');
					console.log(cats);
					res.render('index', {cats: cats});
				}
			});
		},
		showAjax : function(req, res){
			Cat.find({},function(err, allCats){
				if(err){
					console.log(err)
					res.json(err);
				} else {
					res.json(allCats);
				}
			});
		},
		create : function(req, res){
			Cat.create(req.body, function(err, result){ // if the values from req.body (name field on the form) correlate they should automatically be added to your schema
				if (err) { 
					console.log(err); 
				} else {
					console.log(result);
					res.redirect('/');
				}
			});
		},
		createAjax : function(req, res){
			Cat.create(req.body, function(err){
				if (err) {
					res.status(500);
					console.log(err);
					res.json(err);
				} else {
					res.redirect('/cats_ajax');
				}
			});
		},
		edit : function(req, res){
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
		},
		editAjax : function(req, res){
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
		},
		saveEdit : function(req, res){
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
		},
		destroy : function(req, res){
			console.log('Removing from db...');
			Cat.remove({_id: req.params.id}, function(err){
				if (err){
					console.log('Remove was unsuccessful!', err)
				}
			});
			res.redirect('/');
		},
	};
};