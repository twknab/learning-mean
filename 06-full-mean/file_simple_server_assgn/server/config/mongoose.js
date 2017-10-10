module.exports = function(mongoose, path){

	/////////////////////////
	/////////////////////////
	/// 
	/// 	Setup Mongoose Connection to Database:
	/// 
	/////////////////////////
	/////////////////////////

	var db = 'simpleServer'; // be sure to change this value for whatever database you'd like to use
	mongoose.connect('mongodb://localhost/' + db, function() {
		console.log('Connected to Mongo and ' + db + ' database! (...future connection and model loading now...)');
	});

	/////////////////////////
	/////////////////////////
	/// 
	/// 	Load Models:
	/// 
	/////////////////////////
	/////////////////////////

	// looks for all .js files in models folder and loads them:
	var fs = require('fs');
	var models_path = path.join( __dirname, '/../models'); // make sure this path is correctly pointing to your models folder
	fs.readdirSync(models_path).forEach(function(file) {
		if (file.indexOf('.js') > 0) {
			require(models_path + '/' + file)(mongoose); // Note: if models file is not setup passing an argument will break the application
		}
	});

	/////////////////////////
	/////////////////////////
	/// 
	/// 	Disconnect Events:
	/// 
	/////////////////////////
	/////////////////////////

	// on mongoose disconnect:
	mongoose.connection.on( 'disconnected', function() {
		console.log('Mongoose connection now disconnected.');
	});

	// if node connection ends:
	process.on( 'SIGINT', function() {
		mongoose.connection.close(function(){
			console.log('Mongoose disconnected after Node application termination');
			process.exit(0);
		});
	});

};