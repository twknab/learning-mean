////////////
//
//	INSTALL MONGO:
//
////////////

	brew install Mongodb
	// downloads and installs mongo



////////////
//
//	SETUP DATA DIRECTORY:
//
////////////

	cd / 
	// goes to root directory

	sudo mkdir data
	// makes directory

	cd data

	sudo mkdir db
	// makes directory


////////////
//
//	RUN MONGO DB SERVER AND CONNECT TO DATABASE:
//
////////////

	// this server is called a 'daemon' (a program that runs in the background and does stuff)

	sudo mongod
	// runs server (or add 'sudo' if needed)

	// WARNING: DON'T CLOSE WINDOW OR TYPE ANYTHING ELSE. MONGO
	// DB WILL CONTINUE TO RUN IN THE BACKGROUND CONTINUALLY FOREVER.

	////////////
	//
	//	SHUTDOWN MONGO DB SERVER:
	//
	////////////

		control + c
		// shuts down server normally

		ps -ax | grep mongo
		// gets information to shutdown server manually (if you closed window)
		// copy the number on the left of the row that shows 'sudo mongo', or just, 'mongo'. This is the process ID of the 'mongod' command you ran. Take that number and type

		sudo kill <that-id-number>
		// will kill that server

////////////
//
//	RUN MONGO TERMINAL:
//
////////////

	mongo // <-- type in a new tab
	// connects to your mongo databases
	// this will also open the mongo shell in the same tab

