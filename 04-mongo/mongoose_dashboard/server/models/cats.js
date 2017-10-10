module.exports = function(mongoose){
	var CatSchema = new mongoose.Schema({ 
		name: {type: String, required: true}, 
		color: {type: String, required: true}, 
		hair: {type: String, required: true} 
	});
	mongoose.model('Cat', CatSchema); // creates a model called 'Cat' using 'CatSchema'
}