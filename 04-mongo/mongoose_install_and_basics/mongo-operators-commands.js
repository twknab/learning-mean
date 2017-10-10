////////////
//
//	MONGO OPERATOR COMMANDS:
//
////////////

	db.dojos.find({number_of_students: {$gt: 15}})
	// {$gt:} allowed us to filter by Greater Than '15'

	////////////
	//	OTHERS:
	////////////

		$gt 
		//(greater than)	
		//Use to query selectively on numerical-valued fields

		$gte 
		//(greater than or equal to)	
		//Use to query selectively on numerical-valued fields

		$lt 
		//(less than)	
		//Use to query selectively on numerical-valued fields

		$lte 
		//(less than or equal to)	
		//Use to query selectively on numerical-valued fields

		$in 
		//(in array)	
		//Use to find documents who have a particular value within an array.

	////////////
	//	DOCUMENT ARRAYS:
	////////////
		
		///////////
		// $PUSH
		///////////

			//What if you had a student like:
			{ name: 'Tim', age: 32, interests: [hiking, backpacking]}

			db.students.update({_id: ObjectId("5463d871a6a96d5ed6252f4d")}, {$push: {interests: 'skiing'}})
			// $push data into an existing document array

		
		///////////
		// $POP
		///////////

			db.COLLECTION.update({QUERY}, {$pop: {array_key: (1 or -1)}})
			// 1 pops last item in array, -1 pops first item in array


		///////////
		// $addToSet
		///////////

			$addToSet
			// Works like $push but doesn't add to array if already a duplicate.



		///////////
		// $PULL
		///////////

			$pull 
			// removes a specified value from an array, unlike $pop, which removes by location.

			db.COLLECTION.update({QUERY}, {$pull: {array_key: VALUE}})
			// this will remove all instances of VALUE from the documents with the array specified by the array_key that match QUERY.


