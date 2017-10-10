var http = require('http');
var fs = require('fs');
var port = 7077;
var server = http.createServer(function(request, response){
	console.log(response);
	var file;
	var type;
	var contentTypes = {
		html : 'text/html',
		css : 'text/css',
		png : 'image/png',
	};

	console.log(request.url);
	var urlArray = request.url.split('/'); // this splits url request into an array, so parts of the url can be evaluated
	console.log(urlArray);

	switch(urlArray[1]){ // looking at urlArray, index of 1 from original url request
		case 'stylesheets':
			console.log('stylesheet loaded');
			file = 'stylesheets/'+urlArray[2];
			type = contentTypes.css;
			break;
		case 'images':
			console.log('image loaded');
			file = 'images/'+urlArray[2];
			type = contentTypes.png;
			break
		default: // notice here the use of nested switch statements
			switch(urlArray[1]){
				case 'cars':
					if (urlArray[2] == 'new' && urlArray[3] == undefined){ // the undefined here is to catch anything after the cars/new url (ie, cars/new/something)
						console.log(urlArray[3]);
						console.log('car new page loaded');
						file = 'views/create_cars.html';
					} else if (urlArray[2] == undefined) {
						console.log('car page loaded');
						file = 'views/'+urlArray[1]+'.html';
					};
					type = contentTypes.html;
					break;
				case 'cats':
					console.log('cat page loaded');
					file = 'views/'+urlArray[1]+'.html';
					type = contentTypes.html;
					break;
				default:
					console.log('404 loaded');
					file = undefined;
					type = contentTypes.html;
					break;
			}
	};

	if (file !== undefined && type == contentTypes.html || type == contentTypes.css){

		fs.readFile(file, 'utf8', function(errors, contents){
			if (errors){ console.log(errors); };
			response.writeHead(200, {'Content-Type': type});
			response.write(contents);
			response.end();
		});
	} 
	// runs fs.readFile() but without 'utf8' parameter (for images) - is there a cleaner way to do this?
	else if (type == contentTypes.png) {
		fs.readFile(file, function(errors, contents){
			if (errors){ console.log(errors); };
			response.writeHead(200, {'Content-Type': type});
			response.write(contents);
			response.end();
		})
	}
	else {
		response.writeHead(404, {'Content-Type': type});
		response.end('File not found.');
	};
});

server.listen(port);
console.log('Server running on port: http://localhost:'+port);