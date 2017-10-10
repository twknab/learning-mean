var express = require('express');
var path = require('path');
var app = express();
var port = 8000;

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.listen(port, function(){
	console.log('Server now running on http://localhost:'+port);
})