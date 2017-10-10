// Connect Mongoose to MongoDB and Schema Setup:
module.exports = function(mongoose){
	mongoose.connect('mongodb://localhost/cats', function(){ console.log('Connected to Mongo!'); });
	var CatSchema = new mongoose.Schema({ 
		name: {type: String, required: true}, 
		color: {type: String, required: true}, 
		hair: {type: String, required: true} 
	});
	mongoose.model('Cat', CatSchema); // creates a model called 'Cat' using 'CatSchema'
	return {
		Cat : mongoose.model('Cat'),  // returns the invoked mongoose 'Cat' model as 'Cat'
		// this can also be written as: var Cat = mongoose.model('Cat')  but must be done outside of an object
	}
}
/*

For your reference, here's how this was accomplished in server.js 
before modularizing things into this database.js file:

mongoose.connect('mongodb://localhost/cats', function(){ console.log('Connected to Mongo!'); });
var CatSchema = new mongoose.Schema({ name: String, color: String, hair: String }); // create the Schema structure
mongoose.model('Cat', CatSchema); // invokes the schema and creates model as 'Cat'
var Cat = mongoose.model('Cat'); // hooks variable into our mongoose Cat model, available as 'Cat'

*/