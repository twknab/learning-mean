///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
///////////////////////////
///////////////////////////
///
///		MVC in NodeJS and Express
///
///////////////////////////
///////////////////////////

////////////////////
///	 ROUTES
////////////////////
/*

	+ routes to Mongoose Controller methods.
	+ or function just as a Controller.
	+ preference: route through a file in the Controllers folder and leave routes just as routes.

*/
////////////////////
///	 CONTROLLERS
////////////////////
/*

	+ should function as typical Controller.
	+ they dictate which data gets returned using the response object (usually res.json()) after communicating with the models file.
	+ controllers rely on promises/callbacks to detrmine when data can be returned to views.
	+ THIN controllers.

*/
////////////////////
///	 MODELS
////////////////////
/*

	+ blueprints for communicating with the database.
	+ models can be used to do logic (validation) prior to saving information, and filter when return information.
	+ thin controllers and FAT models.

*/
////////////////////
///	 MONGOOSE
////////////////////
/*

	+ allows us to connect to the mongoose database via the mongoose connection file
	+ loads all files with a .JS extension that is found in the models folder

*/




///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
///////////////////////////
///////////////////////////
///
///		Key Pieces in Angular Front End
///
///////////////////////////
///////////////////////////

////////////////////
///	 Angular Module (app.js)
////////////////////
/*

	+ this is the angular module that we use in our views
	+ generally includes 'ngRoute', 'ngCookies', etc.
	+ often incuds config specifications including 'routeProvider' that generates routes that load partial views into ng-view directive.

*/

////////////////////
///	 Angular Factories
////////////////////
/*

	+ factories are singleton services that generate an object to be injected into other directives
	+ we use factories to inject into the angular controllers
	+ the factory stores the local data and communicates to the server via $http requests caught by the Routes file and returned as JSON information handled by a promise.

*/

////////////////////
///	 Angular Controllers
////////////////////
/*

	+ controllers integrate with factories and views (generally a partial view) that they are controlling.
	+ usually data is passed through an angular factory

*/







///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
///////////////////////////
///////////////////////////
///
///		Build Each Separately
///
///////////////////////////
///////////////////////////

////////////////////
///	 SERVER
////////////////////
/*

	+ build a simple server
	+ require (import) the right files
	+ integratation with MVC: routes.js

*/

////////////////////
///	 ROUTES, CONTROLLERS, MODELS, MONGOOSE CONNECTION
////////////////////
/*

	+ work as a team to listen for data to the server depending on the requests caught by routes.js
	+ integration through routes (HTTP requests) from factories (for JSON) and (routeProvider for partial views)

*/

////////////////////
///	 Angular Front End: Factories and routeProvider
////////////////////
/*

	+ factories and routeProvider communicates with the server

*/



