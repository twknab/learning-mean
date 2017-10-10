//////////////
//
//	Mongo and NoSQL:
//
//////////////

	/* 
	Mongo is a NoSQL database: (means 'not only sql') -- this database allows for a few more robust ways of storing data beyond basic 'tabular storage' (what you've been doing in SQL, aka, arranging data into tables). However, the thing different with NoSQL is that it doesn't allow for any RELATIONS between data (ie, no JOIN)
	*/

	//////////////
	//
	//	Stored as JSON data:
	//
	//////////////

		// Everything in MongoDB is stored as a JSON object:

			{
			 'first_name': 'James',
			 'last_name': 'Johnson',
			 'age': 32
			}


	//////////////
	//
	//	Web Server and Database Server Not Together:
	//
	//////////////

		// In MAMP for example the web server and database server were together, however this is not the case // with MongoDB. We must boot up a server. 