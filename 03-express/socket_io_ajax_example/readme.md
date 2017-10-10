
/////////////////////////////////////
//
//	Ajax and Socket.io Example Project
//
/////////////////////////////////////

	In this example project, we are going to create a server that uses both ajax to deliver timed data, but also a mini chat using socket.io.

///////////
// 
//	TO DO:
//
///////////

*[ NOTE ]* Make sure to test each feature as you go, including basic app setup.

// setup folder structure:

	+ //DONE setup project directory with empty server.js file
	+ //DONE create 'views' directory 
	+ //DONE create 'static' directory
	+ //DONE in project/views create empty index.ejs file

// frame out index page:

	+ //DONEframe index.ejs:
		+ //DONE import jquery
		+ //DONE add sockets script tag **VERY IMPORTANT
		+ //DONE setup empty script tag (we'll put our jquery here for now)
		+ //DONE h1 with text 'stock prices' (name of page)
		+ //DONE h3 with class 'stock_price' (will show stock prices)
		+ //DONE div with class 'chat'
		+ //DONE form:
			+ //DONE input:text
			+ //DONE button
			+ //DONE give form the route '/chat'
		
		//DONE [Build out Server.js Root Route then come back] =>
			+ //DONE build in basic jquery:
				+ //DONE on doc load:
					+ //DONE ping an ajax route called '/stock'
					+ //DONE return this data and overwrite our h3 stock_price contents
					+ //DONE have this happen every 3 seconds

// build out server file:

	+ in server.js:
		+ //DONE first npm init
		+ //DONE then npm install dependencies --save 
			+ //DONE express, ejs, body-parser, socket.io
		+ //DONE import dependencies and setup basic app structure
		+ //DONE setup link to 'static' and 'views' folders
		+ //DONE create root route to load index.ejs
		+ //DONE setup server and test
		+ //DONE setup sockets and basic connection event
		+ //DONE [In views/index.ejs do the following]:
			+ //DONE hook sockets up
			+ //DONE test
		+ //DONE create /stock route to handle ajax pings:
			+ //DONE build a function which generates a random number between 18-25 (to mimic a stock fluctuating)
			+ //DONE return that value
		+ create route to handle /chat (POST)
			+ when user posts it emits to server
			+ server then broadcasts all to update chat text