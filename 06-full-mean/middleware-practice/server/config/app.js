// Grab session dependency:
var session = require('express-session');

// Setup Session, setup 'client' and 'bower_components' static folders, invoke session.
module.exports = function(express, app, bodyParser, path) {

    console.log('Server app setup running...');

    // Setup session:
    var sessionInfo = {
        secret: 'gimmeMoreCookies',
        resave: false,
        saveUninitialized: true,
        name: 'middlewareCookie',
        cookie: {
            secure: false, // if using HTTPS set as true
            httpOnly: false, // forces HTTP if true
            age: 3600000, // expiration is 1 year
        }
    };

    // Setup Static Folders (client and bower_components)
    app.use(express.static(path.join(__dirname, './../../client')))
        .use(express.static(path.join(__dirname, './../../bower_components')))
        .use(session(sessionInfo))
        .use(bodyParser.json()); // setup bodyParser to send form data as JSON
        // don't forget if using session to invoke it here also
};
