module.exports = function(mongoose, path){

	// Updates Mongoose Promise Library:
	mongoose.Promise = global.Promise;

	// Connect Mongoose to Mongo Database:
	var db = 'firstlogindb'; // change value to your database name
	mongoose.connect('mongodb://localhost/' + db, function() {
		console.log('Connected to Mongo (using "' + db + '" database)!');
	});

	// Load all Mongoose Models files:
	var fs = require('fs');
	var models_path = path.join( __dirname, '/../models'); // change value to point to your correct folder
	fs.readdirSync(models_path).forEach(function(file) { // goes through each file in above folder
		if (file.indexOf('.js') > 0) { // looks only for .js files
			require(models_path + '/' + file)(mongoose); // requires each .js file
      // Note: if model(s) files are not setup, passing 'mongoose' will break application
		}
	});

	// Mongoose Disconnection Event:
	mongoose.connection.on( 'disconnected', function() {
		console.log('Mongoose connection now disconnected.');
	});

	// Node Disconnection Event:
	process.on( 'SIGINT', function() {
		mongoose.connection.close(function(){
			console.log('Mongoose disconnected and Node application terminated');
			process.exit(0);
		});
	});

}; // end module.exports
