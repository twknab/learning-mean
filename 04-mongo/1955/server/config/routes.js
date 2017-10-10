module.exports = function(mongoose, app){
	// Conrollers:
	var People = mongoose.model('People');
	var peopleController = require('../controllers/people')(mongoose, People);

	// Routes:
	app.get('/', function(req,res){res.render('index')});
	app.get('/all', peopleController.show);
	app.get('/new/:name', peopleController.create);
	app.get('/remove/:name', peopleController.destroy);
	app.get('/:name', peopleController.get);
};