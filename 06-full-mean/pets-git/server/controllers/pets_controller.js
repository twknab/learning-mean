/////////////////
/////////////////
////
////	Server-Side Pet Controller
////
////////////////////////////////////////////////
////////////////////////////////////////////////

module.exports = function(){
    var mongoose = require('mongoose');
    var Pet = mongoose.model('Pet');
    return {
        create : function(req, res) {
            ////////////////////////////////////////////////////////
            //////// I N S E R T  D A T A B A S E  L O G I C ///////
            ////////////////////////////////////////////////////////
            /*
                Insert some Database Logic here!

                This is where your server-side routes will
                actually go to talk to the database (here),
                and if needed, send something back as a 'res' (response).

                Most often, this will be in the form of JSON
                data, as, 'res.json(<data-to-send>)'.

                Any page redirects are instead handled by your
                Angular Controller.

                Data flows from your ang controller, to your ang
                factory, to your server-side routes, to your server-side
                controllers (ie, this file) and any data returned
                then goes back to your angular factory, which can
                then update your $scope and resulting View.

                Remember, you use promises in your ajax requests,
                (using '.then'), which gives you a way to take the data
                returned from the factory and update your scope and View.
            */
            Pet.create(req.body, function(err, newUser){
                if (err) {
                    res.json(err);
                } else {
                    res.json(newUser);
                };
            });
            ////////////////////////////////////////////////////////
            ////////// E N D  D A T A B A S E  L O G I C ///////////
            ////////////////////////////////////////////////////////
        }, // end create()
        index : function(req, res) {
            Pet.find({}, function(err, allPets){
                if(err) {
                    res.json(err);
                } else {
                    res.json(allPets);
                }
            });
        },
        show : function(req, res) {
            Pet.findOne({_id : req.params.id}, function(err, foundPet){
                if (err) {
                    console.log(err);
                } else {
                    // console.log(foundPet);
                    res.json(foundPet);
                }
            });
        },
        delete : function(req, res){
            // database command to delete user
            console.log('Running delete method on server controller...');
			Pet.remove({_id: req.params.id}, function(err){
				if (err) {
					console.log(err);
				} else {
					res.json({message:'User successfully deleted.'});
				}
			});
        },
        update : function(req, res){
            // database commmand to update user
            Pet.findOneAndUpdate({_id: req.params.id}, req.body, function(err, updatedUser){
                if (err) {
                    res.json(err)
                } else {
                    console.log(updatedUser);
                    res.json(updatedUser);
                    // res.redirect('/pets/' + req.params.id);
                }
            });
        },
    }; // end return
}; // end module exports
