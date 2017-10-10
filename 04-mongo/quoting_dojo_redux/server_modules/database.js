module.exports = function(mongoose){
	mongoose.connect('mongodb://localhost/quotes', function(){ console.log('Connected to Mongo!'); });
	var QuoteSchema = new mongoose.Schema({ name: String, quote: String, vote: Number }, {timestamps: true}); // creates new Schema
	mongoose.model('Quote', QuoteSchema); // invoke schema and create mongoose model as 'Quote'
	return {
		Quote : mongoose.model('Quote'), // invoke mongoose Quote model, stored as 'Quote'
	} 
};