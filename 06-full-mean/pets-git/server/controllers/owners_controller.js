module.exports = function(){
    var mongoose = require('mongoose');
    var Owner = mongoose.model('Owner');
    return {
		create : function(req, res) {
            // we're going to send stuff to the factory
		},
	};
}
