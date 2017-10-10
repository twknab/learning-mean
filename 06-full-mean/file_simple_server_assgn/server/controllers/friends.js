module.exports = function(mongoose, Friend){
	return {

		index : function(req, res) {
			Friend.find({}, function(err, allFriends){
				if (err) {
					console.log(err);
				} else {
					res.json({allFriends:allFriends});
				}
			});
		},
		show : function(req, res) {
			Friend.findOne({_id: req.params.id}, function(err, foundFriend){
				if (err) {
					console.log(err);
				} else {
					res.json({foundFriend:foundFriend});
				}
			});
		},
		create : function(req, res) {
			var newFriend = new Friend();
			newFriend.first_name = req.body.first_name;
			newFriend.last_name = req.body.last_name;
			newFriend.birthday = req.body.birthday;
			newFriend.save(function(err){
				if (err) {
					console.log(err);
				} else {
					res.json({newFriend:newFriend});
				}
			});
		},
		update : function(req, res) {
			Friend.findOne({_id: req.params.id}, function(err, friendToUpdate){
				if (err) {
					console.log(err);
				} else {
					console.log(friendToUpdate);
					console.log('######################');
					console.log(req.body);
					console.log('######################');
					friendToUpdate.first_name = req.body.first_name;
					friendToUpdate.last_name = req.body.last_name;
					friendToUpdate.birthday = req.body.birthday;
					// note: angular is so cool the 'updatedAt' is done automatically for you!
					friendToUpdate.save(function(err, updatedFriend){
						if (err) {
							console.log(err);
						} else {
							res.json({updatedFriend:updatedFriend});
						}
					});
				}
			});
		},
		destroy : function(req, res) {
			console.log('running delete controller on server...');
			Friend.remove({_id: req.params.id}, function(err){
				if (err) {
					console.log(err);
				} else {
					res.json({message:'User successfully deleted.'});
				}
			});
		},
	};
};
