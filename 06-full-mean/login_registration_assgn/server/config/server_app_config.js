module.exports = function(app, express, path, bodyParser){

	// Setup app access to 'client' and 'bower_components' folders:
	app.use(express.static(path.join(__dirname, '../../client')));
	app.use(express.static(path.join(__dirname, '../../bower_components')));

	// Setup body-parser so data from forms can be sent to server as JSON objects:
	app.use(bodyParser.json());

};
