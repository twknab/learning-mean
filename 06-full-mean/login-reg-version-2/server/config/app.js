module.exports = function(app, express, path, bodyParser){

    // SETUP SESSION:
    var session = require('express-session');

    // SETUP CLIENT AND BOWER STATIC FOLDERS:
    app.use(express.static(path.join(__dirname, './../../client')));
    app.use(express.static(path.join(__dirname, './../../bower_components')));

    // SETUP JSON OR URL ENCODING FOR FORM DATA SENT TO SERVER:
    // app.use(bodyParser.json); // allows body-data from forms to be sent as json object to server
    app.use(bodyParser.urlencoded({extended: true})); // encodes data in URLs -- another way to send data to the server

    // SETUP SESSION
    var sessionInfo = {
        secret: "CookieMonster", // a secret token to encode session setup
        resave: false, // checks if anything changes in session, will *not* force changes unless things have changed
        saveUninitialized: true, // saves things even if no info has been added to session
        name: "myCookie", // string name of the cookie that's stored on the client
        cookie : { // cookie information
            secure: false, // flase as we're not using HTTPS
            httpOnly: false, // forces to be over HTTP connection
            age: 3600000 // cookie will expire after this amount of time
        }
    };
    app.use(session(sessionInfo)) // invokes session using `sessionInfo` as parameters
};
