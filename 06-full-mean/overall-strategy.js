/////////////////////////////
/////////////////////////////
///
///		MEAN STRATEGY
///
/////////////////////////////
/////////////////////////////

/*

	////////
	/// How To Approach:
	////////

		+ When you're beginning a MEAN project, things can be confusing because of all of the "working parts".
		+ Here's some tips on how you can approach things in a managable level:

		///////
		// 1. SETUP PROJECT FOLDER : Setup project folder, bower init, npm init, create 'server' and 'client' folder and empty 'server.js' 
		///////

			+ Use past projects as an example in regards to folder structure.
			+ The more modularized and clean working pieces, the better.

		///////
		// 2. INSTALL DEPENDENCIES 
		///////

			+ Install any dependencies and be sure to use --save so your init files are updated.		

		///////
		// 3. SETUP SERVER.JS 
		///////

			+ First setup your server.js file:
				+ setup your dependencies
				+ setup access to your bower components and client folders
				+ setup port and set server to listen

		///////
		// 4. SETUP SERVER.JS 
		///////

			+ First setup your server.js file:
				+ setup your dependencies
				+ require APP SETUP - give access to your bower components and client folders
				+ setup port and set server to listen

		///////
		// 5. SETUP MONGOOSE
		///////

			+ Require MONGOOSE file which sets up and configures mongoose and your DB connection
			+ Your mongoose file should load all files in your /models folder
			+ Your mongoose file should have some detection events (like disconnect and a console message to be nice and clean)

		///////
		// 6. SETUP SERVER CONTROLLERS AND ROUTES SETUP
		///////

			+ Setup your server-side controllers and routes
			+ This defines your valid http routes
			+ This points those routes to your controller
			+ Your controller is what interacts with the DB directly

		///////
		// 7. SETUP PARTIALS & HTML FILES
		///////

			+ Build your html files and partials
			+ Setup your angular views and be sure to:
				+ include angular.js in your script tags
				+ include angular-route.js in your script tags
				+ if using ajax later bower install jQuery --save and add jQuery to script tag.

		///////
		// 8. SETUP ANGULAR FACTORIES, CONTROLLERS & ROUTES
		///////

			+ Frame out your controllers and factories files
			+ Be sure that the methods you create match the methods defined in your server-side controllers/models

		///////
		// 9. BUILD FUNCTIONALITY FOR AJAX RETURNED DATA
		///////

			+ Build out functionality in your angular controllers and factories so that they talk to your db and return your ajax data

		///////
		// 10. UPDATE YOUR VIEWS
		///////

			+ Update your views with your returned AJAX data

*/

/////////////////////////////
/////////////////////////////
///
///		SUMMARY 
///
/////////////////////////////
/////////////////////////////
/*

	Information flows from the SERVER to the CLIENT initially.
	The initial HTML and JS and CSS is delivered.
	When the user initiates something requiring a database response:
		
		Information flows:

			from the client-side view ==> 
			to the index controller ==> 
			to the index factory ==> 
			to the server routes ==> 
			to the server controller ==> 
			to the database ==> 
			back to the server controller ==> 
			data as json sent the views ==> 
			ajax updates view

*/

