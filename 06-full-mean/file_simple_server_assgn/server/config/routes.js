module.exports = function(mongoose, app){

	console.log('Server routes loading...');

	// What is this 'friends' object we are referencing below??
	// ANSWER: the 'friends' object is our friends controller which references how we interact with the database

	//CONTROLLERS
	var Friend = mongoose.model('Friend');
	var friends = require('../controllers/friends')(mongoose, Friend);

	// ROUTES
	// note: the methods in the routes below are in the 'server/controllers' folder
	// be sure not to confuse your angular controllers with your server controllers
	app.get('/friends', friends.index);
	app.get('/friends/:id', friends.show);
	app.post('/friends', friends.create);
	app.put('/friends/:id', friends.update);
	app.delete('/friends/:id', friends.destroy);

	// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.

};