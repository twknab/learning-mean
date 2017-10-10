/////////////////
/////////////////
////
////	Server-Side Routes
////
////////////////////////////////////////////////
////////////////////////////////////////////////

var path = require('path'); // only required if over-riding default static index

module.exports = function(app){

    /////////////////////////
    /////////////////////////
    ///
    /// 	Setup Controllers:
    ///
    /////////////////////////
    /////////////////////////

    /*

    Note: The server-side controllers will actually be doing the
    Database querying for you, and will also send a response back
    to the Angular factory whom iniated it and updating the View.

    */

    var PetController = require('./../controllers/pets_controller')();
    var OwnerController = require('./../controllers/owners_controller')();
    console.log('Server-side Controllers Loaded...');

    /////////////////////////
    /////////////////////////
    ///
    /// 	Setup Routes:
    ///
    /////////////////////////
    /////////////////////////

    console.log('Server-side Routes Loaded...');

    // Non-Static Express Index Route (if desired):
    // app.get('/', function(req, res){
    //     console.log('Non-static server-side index ("/") route running now...');
    //     var file = path.resolve(__dirname, './../../client/html/test.html');
    //     res.sendFile(file);
    // });
    /*

    Note: The above "root" route will not run if you've setup
    Express static folders (ie, like a `/client` folder).
    Instead, your root route ('/') will automatically load any
    'index.html' file that may exist in that static folder.

    Note: If you would like to manually override the autoload of
    your index.html file in your static folder, you may see the
    comments in 'server/config/app.js' which can show you how
    to do this rather simply.

    */

    // Create New Pet Route:
    app.post('/pets', PetController.create);

    // Note: data is sent to the PetController for DB querying
    // and for any data returned.

    // Show All Pets Route:
    app.get('/pets', PetController.index);

    // Show Single Pet:
    app.get('/pets/:id', PetController.show);

    // Update Single Pet:
    app.put('/pets/:id', PetController.update);

    // Delete Single Pet:
    app.delete('/pets/:id', PetController.delete);
};
