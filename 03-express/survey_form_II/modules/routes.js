module.exports = function Routes(app){
	// INDEX
	app.get('/', function(req, res) {
	res.render('index');
})

	// CATCH 404s
	app.use(function(req, res, next) {
		  res.status(404).send('Page not found!');
	});
};