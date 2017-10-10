/ Create a Survey with Node, Express and Sockets


+ Setup Dependencies:
	+ npm init //DONE
	+ ejs --save //DONE
	+ body-parser --save //DONE
	+ express --save //DONE
	+ socket.io --save //DONE

+ Setup basic app:	
	+ setup express //DONE
	+ setup views folder //DONE
	+ create basic index.ejs file in /views //DONE
	+ setup port and start server and test //DONE

+ Create index route ('/') that loads index.ejs (use ejs):
	+ edit index.ejs: //DONE
		+ form: //DONE
			+ name //DONE
			+ dojo location //DONE
			+ favorite language //DONE
			+ comment (optional) //DONE
			+ submit button //DONE
	+ hook index.ejs into sockets (add jquery and sockets script) //DONE
	+ emit form to the server ('postingForm') //DONE
	+ setup server to listen ('postingForm') //DONE
 	+ have server organize form data, AND generate a random number and emit it back as ('updatedMessage') //DONE
 	+ have client listen for 'randomNumber' - when triggered show in HTML //DONE
 	+ have client listen for 'updatedMessage' - when triggered message shown in HTML //DONE


 + Optional: Modularize the routes and socket portion within your server file.