var http = require('http');
var fs = require('fs');
var port = 6789;
// creates a server using the http module
var server = http.createServer(function(request,response){
	// here's how to setup routing:
	var file;
	var contentType = 'text/html';

	// switch/case is similar to if/else statements
	switch(request.url){
		case '/':
			file = 'templates/index.html';
			break;
		case '/ninjas':
			file = 'templates/ninjas.html';
			break;
		case '/dojos/new':
			file = 'templates/dojos.html';
			break;
		case '/static/js/main.js':
			file = 'static/js/main.js';
			contentType = 'text/javascript'
			break;
		default:
			file = 'templates/404.html';
			break;
	}

	if (file !== 'templates/404.html'){
		fs.readFile(file, 'utf8', function(errors, contents){
			if (errors){ console.log(errors); }
			response.writeHead(200, {'Content-Type': contentType});
			response.write(contents);
			response.end();
		})
	} else {
		fs.readFile(file, 'utf8', function(errors, contents){
			if(errors){ console.log(errors); }
			response.writeHead(404, {'Content-Type': contentType});
			response.write(contents);
			response.end();
		})
	}


	/*
	
	The above uses some variables and the 'Switch/Case' approach to reduce the amount of repeated code.
	The method below uses a series of if/else statements to achieve the same thing, and the duplicate code can be seen.
	Either method will deliver your result, but to be a good programmer you want to try and reduce duplicate code.

	*/

	// if(request.url === '/'){
	// 	fs.readFile('templates/index.html', 'utf8', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type' : 'text/html'}); // send data about response
	// 		response.write(contents); // send response body
	// 		response.end(); // finished
	// 	});
	// } 

	// else if(request.url === '/ninjas'){
	// 	fs.readFile('templates/ninjas.html', 'utf8', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type' : 'text/html'}); // send data about response
	// 		response.write(contents); // send response body
	// 		response.end(); // finished
	// 	});
	// }	

	// else if(request.url === '/dojos/new'){
	// 	fs.readFile('templates/dojos.html', 'utf8', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type' : 'text/html'}); // send data about response
	// 		response.write(contents); // send response body
	// 		response.end(); // finished
	// 	});
	// }

	// else if(request.url === '/static/js/main.js'){
	// 	fs.readFile('static/js/main.js', 'utf8', function(errors, contents){
	// 		response.writeHead(200, {'Content-Type' : 'text/javascript'}); // send data about response
	// 		response.write(contents); // send response body
	// 		response.end(); // finished
	// 	});
	// }

	// // if request didnt't match anything:
	// else {
	// 	fs.readFile('templates/404.html', 'utf8', function(errors, contents){
	// 		response.writeHead(404, {'Content-Type' : 'text/html'}); // send data about response
	// 		response.write(contents); // send response body
	// 		response.end(); // finished
	// 	});
	// }


});
// tell server which port to run on
server.listen(port);
// print to terminal
console.log('Running in localhost at port '+port);