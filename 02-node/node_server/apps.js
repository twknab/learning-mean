/*

/////////////
//
//	CONTENT-TYPE NOTES and UTF8:
//
/////////////
	
	+ 	If you're using jQuery, or Twitter Bootstrap or anything stored somewhere other than your computer (CDN, etc), 
		you don't need to write a route for it on your server.  The routes we write in our servers are only for content 
		stored on our servers.

	+	Any file written in plain text will be served with utf-8 encoding.  

	+ 	Images won't be served with utf-8; omit that argument in the fs.readFile() method when serving images.
	
	+	Use the following table to figure out which headers to send with your server's responses:

			File type:  	Headers:
			---------------------------------------------	
			HTML 			{'Content-Type': 'text/html'}
			CSS		 		{'Content-Type': 'text/css'}
			Javascript		{'Content-Type': 'text/javascript'}
			PNG/JPG/GIF		{'Content-Type': 'image/*'} (* is the image format, ie png or jpeg etc)

*/



// gets our http module
var http = require('http');
// fs module allows us to read and write content for responses
var fs = require('fs');
// creates a server using the http module
var server = http.createServer(function(request,response){
	// here's how to setup routing:
	if(request.url === '/'){
		fs.readFile('index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'text/html'}); // send data about response
			response.write(contents); // send response body
			response.end(); // finished
		});
	}

	else if(request.url === '/dojo'){ // serves dojo.html
		fs.readFile('dojo.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'text/html'}); 
			response.write(contents);
			response.end();
		});
	}
	
	else if(request.url === '/style.css'){ // serves style.css
		fs.readFile('style.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'text/css'}); // note 'text/css' for CSS files - make sure your MIME Content Type is updated correctly :)
			response.write(contents);
			response.end();
		});
	}

	else if(request.url === '/main.js'){ // serves style.css
		fs.readFile('main.js', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'text/javascript'}); // note 'text/css' for CSS files - make sure your MIME Content Type is updated correctly :)
			response.write(contents);
			response.end();
		});
	}

	else if(request.url === '/earth.gif'){ // serves style.css
		fs.readFile('earth.gif', function(errors, contents){
			response.writeHead(200, {'Content-Type' : 'image/gif'}); // note 'text/css' for CSS files - make sure your MIME Content Type is updated correctly :)
			response.write(contents);
			response.end();
		});
	}


	// if request didnt't match anything:
	else {
		response.writeHead(404);
		response.end('File not found!');
	}
});
// tell server which port to run on
server.listen(6789);
// print to terminal
console.log('Running in localhost at port 6789');