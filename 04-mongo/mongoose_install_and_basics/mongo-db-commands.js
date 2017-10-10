////////////
//
//	GENERAL MONGO DB COMMANDS:
//
////////////

	cls
	// clears mongo terminal

	show dbs
	// shows all databases

	db
	// shows currently selected db

	use myNew_db
	// creates a db
	// note, if db exists, it will switch to it!

	use myExisting_db
	// switches to my_db if exists, else will create it!

		db.dropDatabase() // after switching to it
		// drop database ** BE CAREFUL **
		// must switch to it first via 'use'

	show collections
	// shows collections
	// collections are the tables of the mongo database

	// let's create a database then create a collection:

		use testDB
		// creates testDB and switches to it

		show collections
		// should be empty

		db.createCollection('users')
		// will create users table

		db.users.drop()
		// would drop the collection
		// it will be replaced by a 'system.indexes' filler

		db.users.insert({name: 'Tim'})
		// always use JSON objects
		// adding a document (a document is a row)
		// creates document (Row) in users (table) with the value of name=Tim


	use myDB
	db.dropDatabase()
	// REMOVE A DATABASE ENTIRELY 

////////////
//
//	CRUD (CREATE, READ, UPDATE, DESTROY) MONGO DB COMMANDS:
//
////////////


	////////////
	//	CREATE:
	////////////

		use myTestDB
		// creates myTestDB

		db.createCollection('ninjas')
		// creates 'ninjas' table inside of myTestDB

		db.ninjas.insert({name: 'Tim'})
		db.ninjas.insert({name: 'Julianna', status: 'The Best'})
		// creates document of 'name: Tim' inside of ninjas
		// ie, creates a new row in my ninja table
		// ie, also note, in example 2, you don't have to pass exactly the same key-pairs (it can be anything)


	////////////
	//	READ:
	////////////

		db.ninjas.find({})
		db.ninjas.find()
		// gives us everything inside of ninjas
		// this can be ugly so let's make it pretty():

		db.ninjas.find().pretty()
		// output is in organize json

		db.ninjas.find({name: 'Tim'}).pretty()
		// will find everything with object with the name of Tim

		db.ninjas.find().pretty()
		// gives us all ninjas again
		// see the 'ObjectId' field? - this is defaulted if you didn't create an id

		db.ninjas.find({_id: ObjectId('5480ad947a6bb3f9333c59a3')}).pretty()
		// queries by ID
		// note that you have to pass in the ENTIRE string along with '_id' as the key


	////////////
	//	DESTROY:
	////////////

		db.ninjas.remove({name: 'Tim'})
		// will remove all ninjas with name Tim

		db.ninjas.drop()
		// would drop the collection ninjas
		// it will be replaced by a 'system.indexes' filler

		db.ninjas.find().pretty()
		// ninja should now be gone

		db.ninjas.insert({name: 'Tim'})
		db.ninjas.insert({name: 'Tim'})
		// will create two ninjas with the same name but DIFFERENT IDs

		db.ninjas.remove({name: 'Tim'})
		// will remove ALL instances of Tim despite unique ids

		db.ninjas.remove({name: 'Tim'}, true)
		// only removes one thing
		// 'true' parameter only removes one!


	////////////
	//	UPDATE:
	////////////

		db.ninjas.insert({name: 'Tim', status: 'hungry', belt: 'black'})
		// create ninja

		db.ninjas.update({name: 'Tim'}, {location: 'Seattle'})
		// first argument is the query
		// second argument is the update ** WARNING THIS WILL DELETE EXISTING DATA **
		// NOTE: ONLY THE ONE OBJECT is updated, not ALL!

		db.ninjas.find().pretty()
		// should now show data but ONLY the updated data
		// THE OLD DATA WAS DELETED // LET'S ADDRESS THIS:

		db.ninjas.update({name: 'Tim'},{$set: {location: 'Seattle'}})
		// uses an UPDATE OPERATOR to prevent overwriting existing keyvalue data!
		// NOTE: ONLY THE ONE OBJECT IS UPDATED NOT ALL

		db.ninjas.find().pretty()
		// now ninja should have the extra key-value pair but no over-written data!

		db.students.updateMany({},{$set:{number_of_belts: 0}})
		// change all students to have 0 belts

		db.students.updateMany({},{$rename: {'number_of_belts':'belts_earned'}})
		// renames 'number_of_belts' to 'belts_earned'

		db.students.updateMany({},{$unset:{lucky_number: ''}})
		// remove field from document
		// (ie, remove column value from table)

		db.students.update({}, {$currentDate:{updated_on:true}},{multi:true})
		//adds new field called 'updated_on' and sets it to currentDate

		//NOTICE THE USE OF MULTI:TRUE
