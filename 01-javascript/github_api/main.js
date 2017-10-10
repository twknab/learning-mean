$(document).ready(function(){

	$('#getName').on('click', function(){
		var api = 'https://api.github.com/users/timothyknab'
		$.get(api, displayName)
		// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
		function displayName(data) {
			console.log(data);
			printName(data);
		};		
	});

	function printName(data){
		var htmlStr = ''
		htmlStr += '<ul>'
		htmlStr += '<li>' + data.name + ' <-- github name</li>';
		htmlStr += '<li>' + data.login + ' <-- github name</li>';
		htmlStr += '<li>' + data.location + ' <-- github location</li>';
		htmlStr += '</ul>'
		document.getElementById('fetched_data').innerHTML = htmlStr;
		console.log('call back function running...asynch fetched..');
		console.log(data.name, '<-- github name');
		console.log(data.login, '<-- github login');
		console.log(data.location, '<-- github location');
	}

});