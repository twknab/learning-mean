/*

This module will load:
	+ any HTML files placed in /views
	+ any .JS files placed in /static/js
	+ any .CSS files placed in /static/css
	+ any .GIF/.PNG/.JPG placed in /static/images

Problems: 
	One problem with this module is that it does
	not have any 404 detection. Partly, this is so that any
	.html, .js, .css, .png/gif/jpg can be dropped into their
	appropriate directory (/views, /static/js, /static/css, 
	static/images). Until this is fixed, there are issues,
	as any URL can be placed in that format and will break
	the server.... [ how do I fix this? ]

Potential Solution:
	Could you try fs.open to see if the path exists, if not and error, render 404?
	https://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback


*/


module.exports = function(request, response){
	var file;
	var fs = require('fs');
	var urlArray = request.url.split('/');
	var contentTypes = {
		css : 'text/css',
		html : 'text/html',
		js : 'text/javascript',
		gif : 'image/gif',
		png : 'image/png',
		jpg : 'image/jpg',
	}	
	function urlJoin(array){
		var myURL = array.join('/');
		return myURL.slice(1);
	};

	function writeContent(file, contentType){
		response.writeHead(200, {'Content-type': contentType});
		if (contentType == 'image/gif' || contentType == 'image/png' || contentType == 'image/jpg'){
			fs.readFile(file, function (errors, contents){
				if (errors){ console.log(errors); };
				response.write(contents);
				response.end();
			});
		} else {
			fs.readFile(file, 'utf8', function (errors, contents){
				if (errors){ console.log(errors); };
				response.write(contents);
				response.end();
			});
		};
	};

	switch (urlArray[1]){
		case 'static':
			if (urlArray[2] == 'css'){
				file = urlJoin(urlArray);
				writeContent(file, contentTypes.css);
		    	break;
			};
			if (urlArray[2] == 'js'){
				file = urlJoin(urlArray);
				writeContent(file, contentTypes.js);
				break;
			};
			if (urlArray[2] == 'images'){
				var fileExtension = urlArray[urlArray.length-1];
				var regexPattern = new RegExp(/.(gif|png|jpg)/ig);
				var result = regexPattern.exec(fileExtension);
				file = urlJoin(urlArray);
				if (result[0] == '.gif'){
					writeContent(file, contentTypes.gif);
				};
				if (result[0] == '.png'){
					writeContent(file, contentTypes.png);
				};
				if (result[0] == '.jpg'){
					writeContent(file, contentTypes.jpg);
				};
				break;
			};
			break;
		default:
			switch (urlArray[1]){
				case '':
					file = 'views/index.html';
					writeContent(file, contentTypes.html);
					break;
				case 'dojo.html':
					file = 'views/dojo.html';
					console.log(urlArray);
					writeContent(file, contentTypes.html);
					break;
				default:
					if (urlArray[1] == 'favicon.ico'){
						file = urlArray[1];
					} else {
						file = 'views/'+urlArray[1];
						writeContent(file, contentTypes.html);
					}					
			}
	}; // end urlArray[1] switch
}; // end module.exports