// Setup Dependencies:
var session = require('express-session');

module.exports = function(express, app, path, bodyParser) {

    // Setup Session Information:
    var sessionInfo = {
        secret: "MoreCookiesPlease",
        resave: false,
        saveUninitialized: true,
        name: 'myAppCookie',
        cookie: {
            secure: false, // if using HTTPS set true
            httpOnly: false, // if true would force HTTP only
            age: 3600000
        }
    };

    // Setup Static Folders, BodyParser and Invoke Session:
    app.use(express.static(path.join(__dirname, './../../client'))) // provides access to client folders and static content
        .use(express.static(path.join(__dirname, './../../bower_components'))) // provide access to bower_components and our Angular packages
        .use(bodyParser.urlencoded({extended: true}))
        .use(session(sessionInfo)); // invoke session with session info
        // .use(bodyParser.json); // setup body-parser to send as JSON

};
