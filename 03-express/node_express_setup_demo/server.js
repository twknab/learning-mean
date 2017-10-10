var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); //this is used for ejs
var port = 8000;
var submissions = [];

var app = express();

app.use(bodyParser.urlencoded({ extended: true })); // use body-parser
app.use(express.static(path.join(__dirname, "static"))); // setup folder for static content
app.set('views', path.join(__dirname, 'views')); // setup folder for views
app.set('view engine', 'ejs');


// --- BEGIN ROUTES -------------

app.get('/', function(req, res){
	res.render('index', {data: submissions});
});

app.post('/submit', function(req, res){
	submissions.push(req.body);
	console.log(submissions);
	res.redirect('/');
});

app.get('/reset', function(req, res){
	submissions = [];
	console.log(submissions);
	res.redirect('/');
});

// --- END ROUTES ----------------


app.listen(port, function(){
	console.log('Listening on port: '+port);
})

