module.exports = function(mongoose){
	var OwnerSchema = new mongoose.Schema({
		name: {type: String, required: true},
		_pets: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pet'}]
	}, {timestamps: true});
	mongoose.model('Owner', OwnerSchema);
};
