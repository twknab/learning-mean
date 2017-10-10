Create a message board application which exists a single page, but allows users to create messages and comment on existing messages.

Note: Try setting up routes the traditional method first, and
aftewards see if you can come back and use AJAX instead.


// Setup project folder:

	+ create empty view folder //DONE
	+ create empty server.js //DONE
	+ creaty empty file /view/index.ejs //DONE
	+ npm init -y //DONE
	+ npm install express ejs body-parser mongoose --save //DONE

// Index.ejs:

	+ frame out html to fill in later with ejs templating: //DONE
		+ h1: Dojo Message Board //DONE
		+ hr //DONE
		+ form: (leave route empty for now will fill in) //DONE
			+ name: input[type='text'] //DONE
			+ message: textarea //DONE
			+ submit button value=Post Message //DONE
		+ hr //DONE
		+ div //DONE
			+ h3: Name: 'Someone' //DONE
			+ h2: Message: 'The CodingDojo rocks!' //DONE
			+ div //DONE
				+ h4: Name: 'Someone Else' //DONE
				+ h4: Message: 'Yes it does!' //DONE
				+ form: (leave route empty for now will fill in) //DONE
					+ name: input[type='text'] //DONE
					+ comment: textarea //DONE
					+ submit button value="Post Comment" //DONE

// Server.ejs

	+ setup basic dependencies and basic app //DONE
	+ setup mongoose and db: //DONE
		+ setup schemas with validation //DONE (I think...)
		+ setup schemas with one to many relationships //DONE
	+ setup routes to index //DONE
	+ setup server listen //DONE
	+ test //DONE
	+ routes:
		+ handle message submission - POST //DONE
		+ handle comment submission - POST - return json
		+ update index.ejs with new routes/methods

// Index.ejs:

	+ setup jquery
	+ setup ejs templating for messages //DONE
	+ setup ejs templating for comments //DONE


// Bonus:

	+ add timestamps to messages and comments //DONE
	+ mongoose-validations? Did you want
	to try and install that?
	+ AJAX Style:

			+ setup ajax for message submission:
				+ call to message submission route, return json
				+ iterate over returned json displaying each message
			+ setup ajax for comment submission:
				+ call to comment submission route, return json
				+ iterate over returned json displaying each comment





