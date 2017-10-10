File Structure and Simple Server:

	The goal of this assignment is to build a simple Express server. Server should:

		+ Be able to serve static files from ./client, and ./bower_components.
		+ It should render index.html when a user hits the root route ‘/’ that has "Welcome" in the body.
		+ It should require body-parser.
		+ And you should be able to explain what body-parser does.
		+ It should require a mongoose.js file from “./server/config”. To confirm that the mongoose.js file loads have the top of this file console.log(‘future mongoose connection and model loading’);
		+ It should require a routes.js file from “./server/config”. To confirm that the routes.js loads have the routes.js console.log(‘future routes’). The routes.js file should export an empty function that has a parameter (app);
		+ It should listen at a port of your choosing.


	+ Work flow: Server > Model > API > Angular > Expand


Root ('/'):
	
	+ should load index.html which should load partials/index.html partial //DONE
	+ should build table with: //DONE
		+ Name //DONE
		+ Show (show) //DONE
		+ Update (edit) //DONE
		+ Delete (delete) //DONE
	//////////////////////////////////////////////
	/////////// I N C O M P L E T E //////////////
	//////////////////////////////////////////////
	+ birthday filter // NOT SURE HOW TO DO THIS
	//////////////////////////////////////////////
	//////////////////////////////////////////////
	//////////////////////////////////////////////
	
	+ new friend button ('#/new')

    Controller Methods:

		+ index -> factory.index (build table) //DONE
		+ $scope.delete -> factory.delete (delete user) //DONE
		
	Other things:

		+ ng-route //DONE
		+ routeParams //DONE
		+ filter //DONE


Partial ('/#/new'):
	
	+ form: //DONE
		+ first name //DONE
		+ last name //DONE
		+ birthday //DONE
		+ 'create' submit button //DONE

	Controller Methods:

		+ $scope.create -> factory.create  //DONE

	Other things:

		+ $location service  //DONE
		+ ng-model  //DONE
		+ ng-submit/ng-click  //DONE


Partial ('/#/edit/:id'):

	+ form:  //DONE
		+ first name (value filled in)  //DONE
		+ last name (value filled in)  //DONE
		+ birthday  //DONE
		+ 'create' submit button  //DONE

	Controller Methods: 

		+ $scope.update -> factory.update   //DONE
		+ show -> factory.show  //DONE

	Other things:

		+ $location service  //DONE
		+ routeParams  //DONE


Partial ('/#/show/:id'):

	form:
		+ first name: (filled in)  //DONE
		+ last name (filled in)  //DONE
		+ birthday (filled in)  //DONE
		+ user created (datetime filled in)  //DONE
		+ user updated (datetime filled in)  //DONE

	Controller Methods:
		+ show -> factory.show  //DONE

	Other things:

		+ $location service  //DONE
		+ routeParams  //DONE


Setup Project Folder:

	+ create blank server.js //DONE
	+ mkdir client //DONE
		+ mkdir client/assets //DONE
		+ mkdir client/partials //DONE
		+ touch client/index.html //DONE
	+ mkdir server //DONE
		+ mkdir server/config //DONE
			+ touch server/config/mongoose.js //DONE
			+ touch server/config/routes.js //DONE
		+ mkdir server/controllers //DONE
		+ mkdir server/models //DONE


Bower and NPM Setup and Dependencies:

	+ bower init //DONE
	+ bower install angular angular-route jquery --save //DONE
	+ npm init -y //DONE
	+ npm install express body-parser mongoose --save //DONE


Overall Idea:

	REQUEST FROM BROWSER -> ANGULAR ROUTES -> ANGULAR VIEWS -> ANGULAR CONTROLLER -> ANGULAR FACTORY -> ANGULAR MODELS -> SERVER ROUTE -> SERVER CONTROLLER -> MONGOOSE DATABASE -> ANGULAR CONTROLLER -> UPDATE ANGULAR VIEWS

