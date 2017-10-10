module.exports = function(mongoose, app, bcrypt){

	console.log('Server routes loading...');

	// Server Controllers:
	var User = mongoose.model('User');
	var users = require('../controllers/server_users_controller')(mongoose, User, bcrypt);

	// Server Routes:
	app.get('/users/:id', users.show); // methods defined in your controller
	app.post('/users', users.create);
	app.put('/users/:id', users.update);
	app.delete('/users/:id', users.destroy);

};
