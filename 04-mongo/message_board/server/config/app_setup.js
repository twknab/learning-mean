module.exports = function(app, express, path, bodyParser){
	// ejs, views folder, static folder, body-parser setup
	app.use(express.static(path.join(__dirname, '../../client/static')));
	app.set('views', path.join(__dirname, '../../client/views'));
	app.set('view engine', 'ejs');
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
};