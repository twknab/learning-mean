$(document).ready(function() {
	// Establish Sockets Connection:
	var socket = io.connect();

	// Listen for Sockets Connection Confirmation:
	socket.on('connected', function(welcomeMsg){
		console.log(welcomeMsg);
	});

	// Send Survey Data:
	$('#submitBtn').click(function() {
		var survey = $('form').serializeArray();
		console.log('sending survey to server for organization...')
		socket.emit('postingForm', survey); // to be organized by server
		$('form input[type="text"], textarea, select').val(''); // clear fields after submit and emit
		$('div').empty(); // clears former survey values
		return false;
	});

	// Listen for organized Survey Data:
	socket.on('updatedMessage', function(survey){
		console.log('...survey received back from server for client display');
		$('.survey').show();
		$('div').append('<h3> You emitted the following information to the server: { name: '+survey.name+', location: '+survey.location+', language: '+survey.language+', comment: '+survey.comments+' } </h3>');
		console.log(survey);
	});

	// Listen for randomNumber:
	socket.on('randomNumber', function(number){
		$('div').append('<h3> Your lucky number is: '+number+'</h3>');
		console.log(number);
	});
});