module.exports = function(mongoose, path){
	// sets up mongoose database
	mongoose.connect('mongodb://localhost/messageBoard', function() { // using 'messageBoard' as db
		console.log('Connected to Mongo!');
	});

	// scans all folders and loads and js
	var fs = require('fs');
	var models_path = path.join( __dirname, '/../models');
	fs.readdirSync(models_path).forEach(function(file) {
		if (file.indexOf('.js') > 0) {
			require(models_path + '/' + file)(mongoose);
		}
	});
};