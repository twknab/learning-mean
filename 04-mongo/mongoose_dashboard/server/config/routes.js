module.exports =  function (app, mongoose){
	// Controller:
	var Cat = mongoose.model('Cat');  // returns the invoked mongoose 'Cat' model as 'Cat'
	var catsController = require('../controllers/cats')(Cat);
	// Root Route:
	app.get('/', catsController.show);
	// Add New Cat Page:
	app.get('/cats/new', function(req, res){ res.render('add'); });
	// Add New Cat Page (AJAX Style)
	app.get('/ajax_style', function(req, res){ res.render('ajax_style') });
	// Submit New Cat (Add to DB):
	app.post('/cats', catsController.create);
	// Submit New Cat AJAX Style (returns JSON):
	app.post('/cats_ajax', catsController.createAjax);
	// Show All Cats AJAX Style (returns JSON):
	app.get('/cats_ajax', catsController.showAjax);
	// Edit Cat Page:
	app.get('/cats/:id/edit', catsController.edit);
	// Edit Cat AJAX Style (returns JSON):
	app.get('/cats_ajax/:id/edit', catsController.editAjax);
	// Submit Edited Cat (Change vals in DB):
	app.post('/cats/:id', catsController.saveEdit);
	// Destroy Cat (please don't destroy kitties):
	app.post('/cats/:id/destroy', catsController.destroy);
};