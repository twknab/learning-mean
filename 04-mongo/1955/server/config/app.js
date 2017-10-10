module.exports = function(app, express, bodyParser, path){
	app.set('views', path.join(__dirname, '../../client/views'));
	app.set('view engine', 'ejs');
	app.use(express.static(path.join(__dirname, '../../client/static')));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
};