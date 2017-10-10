var http = require('http');
var staticLoader = require('./staticLoader.js');
var port = 7077;


//creating a server
server = http.createServer(function (request, response){
  staticLoader(request, response);
});


server.listen(port);
console.log('Running in localhost on port'+port);
