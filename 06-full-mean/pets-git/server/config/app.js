module.exports = function(app, express, path, bodyParser){
	app.set('view engine', 'ejs');
	// Setup app access to 'client' and 'bower_components' folders:
	// app.use(express.static(path.join(__dirname, './../../client'), {index: '/html/test.html'}));
	app.use(express.static(path.join(__dirname, './../../client')));
	app.use(express.static(path.join(__dirname, './../../bower_components')));
	// Setup body-parser so data from forms can be returned to server as json objects:
	app.use(bodyParser.json());
};
