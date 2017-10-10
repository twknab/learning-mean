var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.json());


// See your index.html for routing


app.listen(port, function(){
	console.log('Server running on http://localhost:'+port);
})
