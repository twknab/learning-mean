This exercise will allow you to utilize all 4 CRUD methods with Mongoose. In this exercise, you'll build an app which manages a pack of some kind of animal (think otter, rabbit, or owl). You need to be able to add a new animal, update it, and delete it. You should use the following routes to build this app:

// Routes:

	GET '/' Displays all of the cat.
	GET '/cats/:id' Displays information about one cat.
	
	GET '/cats/new' Displays a form for making a new cat.
	POST '/cats' Should be the action attribute for the form in the above route (GET '/cats/new').
	
	GET '/cats/:id/edit' Should show a form to edit an existing cat.
	POST '/cats/:id' Should be the action attribute for the form in the above route (GET '/cats/:id/edit').
	
	POST '/cats/:id/destroy' Should delete the cat from the database by ID.
	Remember these routes are just examples, avoid using mongooses for your dashboard if you can!

// Setup project folder
	
	+ create views, static folders //DONE
	+ create empty server.js //DONE
	+ npm init -y //DONE
	+ npm install ejs express body-parser mongoose --save //DONE

// Setup index.ejs

	+ frame out //DONE
	+ add ejs template loop to show all cats //DONE
	+ add button to make a new cat (see routes above for naming) //DONE
	+ add button to edit each cat (see routes above for naming) //DONE
	+ add button to delete each cat (see routes above for naming) //DONE

// Setup add.ejs

	+ frame out //DONE
	+ add form to add a new cat name and cat color and hair type: //DONE
	+ add button which submits new cat to database //DONE

// Setup edit.ejs

	+ frame out //DONE
	+ add form which allows cat name and color and hair type to be edited //DONE
	+ add button which sends this updated cat to database //DONE

// Edit server.js

	+ setup basic app structure //DONE
	+ import dependencies //DONE
	+ hook up mongo, static/views folders, body-parser //DONE
	+ setup root route //DONE

// Start MongoDB Server:

	+ sudo mongod before testing server //DONE
	+ test server and index page //DONE

// Edit server.js

	+ setup route to handle add //DONE
	+ setup route to handle edit //DONE
	+ setup route to handle destroy //DONE

// Refactor, Modularize, Clean-Up
	
	+ refactor all code //DONE
	+ modularize routes //DONE
	+ modularize database //DONE