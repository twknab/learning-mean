
+ Create a database called 'my_first_db'.
	
	use my_first_db




+ Create students collection.

	db.createCollection('students')





+ Each document you insert into this collection should have the following format: {name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}}

+ Create 5 students with the appropriate info.

	db.students.insert({name: 'Tim', home_state: 'IL', lucky_number: 108, birthday: {month: 09, day: 26, year: 1984}})

	db.students.insert({name: 'Julianna', home_state: 'IA', lucky_number: 108, birthday: {month: 07, day: 02, year: 1988}})

	db.students.insert({name: 'Chris', home_state: 'IL', lucky_number: 500, birthday: {month: 11, day: 16, year: 1987}})

	db.students.insert({name: 'Jill', home_state: 'CA', lucky_number: 123, birthday: {month: 05, day: 12, year: 1972}})

	db.students.insert({name: 'Marcus', home_state: 'AL', lucky_number: 999, birthday: {month: 02, day: 22, year: 1993}})





+ Get all students.
	
	db.students.find().pretty()




+ Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

	 db.students.find({$or:[{home_state: 'CA'}, {home_state: 'WA'}]})





+ Get all students whose lucky number is:
	- greater than 3

		db.students.find({$or:[{home_state: 'CA'}, {home_state: 'WA'}]})

	- less than or equal to 10:

		db.students.find({lucky_number: {$lte:10}})

	- between 1 and 9 (inclusive)

		db.students.find({$and:[{lucky_number: {$gt:1}},{lucky_number: {$lt:9}}]})





+ Add a field to each student collection called 'interests' that is an ARRAY.  




	- It should contain the following entries: 
		- 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

			db.students.updateMany({},{$set: {interests: ['coding','brunch','MongoDB']}})





+ Add some unique interests for each particular students into each of their interest arrays.
	
	db.students.update({name:'Tim'},{$push: {interests: 'skiing'}})

	db.students.update({name:'Marcus'},{$push: {interests: 'Pokemon'}})

	db.students.update({name:'Jill'},{$push: {interests: 'Backgammon'}})

	db.students.update({name:'Chris'},{$push: {interests: 'Gardening'}})

	db.students.update({name:'Julianna'},{$push: {interests: 'Yoga'}})





+ Add the interest 'taxes' into someone's interest array.

	db.students.update({name:'Tim'},{$push: {interests: 'Taxes'}})




+ Remove the 'taxes' interest you just added.

	db.students.update({name:'Tim'},{$pull: {interests:'Taxes'}})




+ Remove all students who are from California (or Washington).

	db.students.remove({$or:[{home_state: 'CA'},{home_state: 'WA'}]})




+ Remove a user by name. 

	db.students.remove({name: 'Marcus'})



+ Remove a student whose lucky number is greater than 5 (JUST ONE)

	db.students.remove({lucky_number: {$gt:5}},true)
	




+ Add a field to each student collection called 'number_of_belts' and set it to 0.

	db.students.updateMany({},{$set:{number_of_belts: 0}})







+ Increment this field by 1 for all students in Washington (Seattle Dojo).


	db.students.update({home_state: 'WA'},{number_of_belts: 1})


+ Rename the 'number_of_belts' field to 'belts_earned'

	db.students.updateMany({},{$rename: {'number_of_belts':'belts_earned'}})

+ Remove the 'lucky_number' field.

	db.students.updateMany({},{$unset:{lucky_number: ''}})


+ Add a 'updated_on' field, and set the value as the current date.

	db.students.updateMany({},{$set:{updated_on: ''}})
	db.students.updateMany({},{$currentDate: {updated_on: true}})

	db.students.update({}, {$currentDate:{updated_on:true}},{multi:true})




