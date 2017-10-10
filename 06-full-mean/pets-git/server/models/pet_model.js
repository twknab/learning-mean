module.exports = function(mongoose){
	var PetSchema = new mongoose.Schema({
		name: {
			type: String,
			required: true
		},
		breed: {
			type: String,
			required: true
		},
		_owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Owner'
		}
	}, {
		timestamps: true
	});
	mongoose.model('Pet', PetSchema);
};
