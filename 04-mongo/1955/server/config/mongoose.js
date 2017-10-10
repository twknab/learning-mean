module.exports = function(mongoose, path){
	mongoose.connect('mongodb://localhost/1955', function(){ console.log('Connected to Mongo!'); });
	// scans all folders and loads and js
	var fs = require('fs');
	var models_path = path.join( __dirname, '/../models');
	fs.readdirSync(models_path).forEach(function(file) {
		if (file.indexOf('.js') > 0) {
			require(models_path + '/' + file)(mongoose);
		}
	});
}