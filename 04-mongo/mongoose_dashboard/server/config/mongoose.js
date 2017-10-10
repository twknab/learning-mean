// Connect Mongoose to MongoDB and Schema Setup:
module.exports = function(mongoose, path){
	mongoose.connect('mongodb://localhost/cats', function(){ console.log('Connected to Mongo!'); });
	// scans all folders and loads and js
	var fs = require('fs');
	var models_path = path.join( __dirname, '/../models');
	fs.readdirSync(models_path).forEach(function(file) {
		if (file.indexOf('.js') > 0) {
			require(models_path + '/' + file)(mongoose);
		}
	});
}
/*

For your reference, here's how this was accomplished in server.js 
before modularizing things into this database.js file:

mongoose.connect('mongodb://localhost/cats', function(){ console.log('Connected to Mongo!'); });
var CatSchema = new mongoose.Schema({ name: String, color: String, hair: String }); // create the Schema structure
mongoose.model('Cat', CatSchema); // invokes the schema and creates model as 'Cat'
var Cat = mongoose.model('Cat'); // hooks variable into our mongoose Cat model, available as 'Cat'

*/