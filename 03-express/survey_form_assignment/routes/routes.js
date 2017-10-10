module.exports = function Routes(app){
	app.get('/',function(request,response){
		response.render('index');
	});
	app.post('/result',function(request,response){
		console.log(request.body);
		response.render('result', {surveyData: request.body});
	});
	app.use(function(req, res, next) {
	  res.status(404).send('Page not found!');
	});
};