// setup app dependencies:
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 8000;

// configure app and setup static folders (including session):
require('./config/app')(express, app, bodyParser, path);

// setup mongoose and models:
require('./config/db');

/*-----------------------*/
/*   INSERT MIDDLEWARE   */
/*-----------------------*/

app.use(function(req, res, next) {
    var User = require('mongoose').model('User')

    console.log('!!!!!!! MIDDLEWARE RUNNING !!!!!!!');

    if (req.session.userID) {
        User.findById(req.session.userID)
            .then(function(user) {
                req.user = user;
                next();
            })
            .catch(next);
    } else {
        next();
    }
;})

/*-----------------------*/
/*    END MIDDLEWARE     */
/*-----------------------*/

// setup server routing:
require('./config/routes')(app);

// listen and run:
app.listen(port, function() {
    console.log('App running on port:', port);
});
