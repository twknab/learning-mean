module.exports = function(mongoose, People){
	return {
		show : function(req, res){
			People.find({}, function(err, people){
				if (err) {
					console.log(err);
				} else {
					res.json(people);
				}
			})
		},
		create : function(req, res){
			var newPerson = new People();
			newPerson.name = req.params.name;
			newPerson.save(function(err){
				if (err) {
					console.log(err);
				} else {
					res.redirect('/');
				}
			})
		},
		destroy : function(req, res){
			People.remove({name: req.params.name}, function(err){
				if (err) {
					console.log(err);
				} else {
					res.redirect('/');
				}
			})

		},
		get : function(req, res){
			People.findOne({name: req.params.name}, function(err, person){
				if (err) {
					console.log(err);
				} else {
					res.json(person);
				}
			})
		},
	};
}