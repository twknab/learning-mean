// App Dependencies & Basic Variables Setup:
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    bcrypt = require('bcrypt'),
    port = 8000;

// App Setup:
require('./server/config/server_app_config')(app, express, path, bodyParser);

// Mongoose Setup:
require('./server/config/server_mongoose_config')(mongoose, path);

// Controllers and Routes Setup:
require('./server/config/server_routes_config')(mongoose, app, bcrypt);

// Run Server:
app.listen(port, function() {
  console.log('Listening on http://localhost:' + port);
});
