module.exports = function(mongoose){
	var PeopleSchema = new mongoose.Schema({ 
		name: {type: String, required: true}, 
	}, {timestamps: true});
	mongoose.model('People', PeopleSchema);
};