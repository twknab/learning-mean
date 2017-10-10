module.exports = function Sockets(server){
	// RANDOM NUM GENERATOR
	function randomNumber(min, max) {
		return Math.floor(Math.random()*(max-min+1))+min;
	}

	// SETUP AND HOOK SOCKETS INTO SERVER
	var io = require('socket.io').listen(server);

	// SOCKET EVENT LISTENERS:
	io.sockets.on('connection', function(socket){

		// Confirm Sockets Connection:
		console.log('Sockets are connected.', 'Your socket id is:', socket.id);
		socket.emit('connected', 'Welcome to the survey and sockets! :)')

		// Listen for Survey Submissions:
		socket.on('postingForm', function(surveyData){
			var survey = {};
			console.log(surveyData);
			for (var x in surveyData){
				survey[surveyData[x].name] = surveyData[x].value; // organize surveyData
			};
			// Send back randomNumber and organized survey data:
			socket.emit('randomNumber', randomNumber(1,1000));
			socket.emit('updatedMessage', survey);
		});
	});
};