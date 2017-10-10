A button game using sockets. When the button is pushed all users see the new count. The reset button resets for all users.

// setup project folder: //DONE
	
	+ create server.js //DONE
	+ create static and views folder //DONE
	+ create views/index.ejs //DONE
	+ npm init --f //DONE
	+ npm install express ejs sockets.io --save //DONE


// basic setup server.js: //DONE

	+ setup basic app //DONE
	+ setup basic dependencies and port //DONE
	+ set app variable to invoke express() //DONE
	+ setup path (for static folder and views folder) //DONE
	+ setup ejs //DONE
	+ setup static folder //DONE
	+ setup root route to deliver 'index.ejs' //DONE
	+ setup server listen //DONE
	+ setup sockets and pass along server //DONE

// basic setup index.ejs: //DONE

	+ create basic html frame //DONE
	+ add jquery script tag //DONE
	+ add sockets script tag //DONE
	+ add script tag where we will later put client-side code //DONE
	+ add sockets to script tag to hook in //DONE
	+ build dom elements:  //DONE
		+ h1 = 'Button has been pushed: ' + span = 'times'  //DONE
		+ p = 'Push the button to update the count' //DONE
		+ button = 'Push Epic Button' //DONE
		+ button = 'Reset' //DONE

// test server: //DONE

	+ confirm page loads properly //DONE

// server side emits and listeners setup:

	+ create global variable to count button presses //DONE
	+ create listener for epic button click 			use: 'buttonClicked' //DONE
	+ create emit (to all) to update button count 		use: 'updateCount' //DONE
	+ create listener for reset button click 			use:'resetClicked' //DONE
	+ create emit (to all) to reset count 				use: 'updateCount' //DONE

// client side emits and listeners setup:

	+ create emit when button is clicked				use: 'buttonClicked' //DONE
	+ create listener for update button count			use: 'updateCount' //DONE
	+ create emit when reset is clicked					use: 'resetClicked' //DONE
	+ create listen for reset count						use: 'updateCount' //DONE

// add basic styling: (optional)
	
	+ center text
	+ make button huge
	+ make reset button red

---------------------------------

	DATE: 10/28/2016
	TOTAL TIME SPENT: 37 MINUTES (no stylings added)

---------------------------------