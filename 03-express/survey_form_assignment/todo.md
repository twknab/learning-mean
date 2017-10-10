Survey Form Assignment:

Build a survey whose results are displayed on another page.

// BUILD DIRECTORIES AND SETUP BASIC FILES 
	+ Create project directory, server.js file, npm init to create a project package.json file.
	+ Create directories, 'static' and 'views' (we'll hook these in later)
	+ In /views create 'index.ejs' and 'result.ejs' for the two view files we'll be using
	+ index.ejs - Build basic form on: 
		+ name
		+ location
		+ favorite language
		+ comments (optional)
		+ route to '/result' (we will build our results and server file next, but first:)
	+ result.ejs - Frame empty page and we'll come back
	+ npm install express, body-parser, ejs (we know we'll be using these)

// SERVER.JS BUILDOUT
	+ add required node modules
	+ choose port
	+ setup static and views folders
	+ setup basic index route
	+ set app to listen and server to console log running

// FORM ROUTES BUILDOUT
	+ build route to handle /result:
		+ route to result.ejs
		+ display user form data
		+ pass context dictionary
	+ modify result.ejs to show form result

// FOR FUN
	+ add a css sheet with some basic styles



