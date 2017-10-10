/* JS Fundamentals Assignment 2, Coding Dojo, October 2016, Tim Knab */

// Write all as anonymous functions.
// #1 - Create a simple loop that sums all integers between x and y (inclusive). Console log the final sum:

var simpleLoop = function(x,y){
	if (typeof (x) === 'number' && typeof (y) === 'number'){ //checks if number
		if (y > x) {
			console.log('Yes, y is greater than x.')
			var sum = 0;
			for ( var i = x; i <= y; i++ ){ //see #note1 below
				sum = sum + i; 
			}
		console.log(sum); //logs final sum
		} else {
			console.log('I can only sum between values if your second parameter is greater than your first.')
		};
	} else {
		console.log('Both parameters must be a number.');
	};
};

// testing our anonymous function, assigned to var 'simpleLoop'
simpleLoop(1,2);
simpleLoop(2,'Haha, I\'m not a number!');
simpleLoop('1','5');
simpleLoop(1,10);
simpleLoop(1,100);

/*

#note1:
i initializes as the value of x, and will loop until it reaches the end, which we've set to the value of y. a variable called sum, declared before the 'for' loop, is modified with each pass: sum is taken and the value of i (which starts as x and proceeds to y) is added. This results in the sum of each value in the range.

*/





// #2 - Loop through an array and find the minimum value and return it. Makesure an array.

var minimumValue = function(myArray){
	if ( typeof(myArray) === 'object' ){
		var min = myArray[0];

		for ( var i = 0; i < myArray.length; i++ ){
			if (myArray[i] < min){
				min = myArray[i];
			};
		};
		console.log(min);
		return min;
	} else {
		console.log('Parameter must be an array.')
	};
};

var someArray = [1,2,3,4,5];
minimumValue(someArray);
minimumValue('will my string work?'); // no!
minimumValue([1,2,3,4,-500,6]); // logs -500




// #3 - Write a loop that will go through an array, find the average of all values and then return it.

var averageArray = function(myArray){
	if ( typeof(myArray) === 'object' ){
		var sum = 0;
		for ( var i = 0; i<myArray.length; i++){
			sum = sum + myArray[i];
		};
		var average = sum/myArray.length;
		console.log(average);
		return average;
	} else {
		console.log('Please enter array.')
	};
};

averageArray([1,2,3,15]); // returns 5.25
averageArray('I do not think my string will work'); // prints '..enter array'




// #4 - Rewrite these as methods of an object.

var myFunctions = {
		simpleLoop: function(x,y){
			if (typeof (x) === 'number' && typeof (y) === 'number'){
				if (y > x) {
					console.log('Yes, y is greater than x.')
					var sum = 0;
					for ( var i = x; i <= y; i++ ){
						sum = sum + i; 
					}
				console.log(sum);
				} else {
					console.log('I can only sum between values if your second parameter is greater than your first.')
				};
			} else {
				console.log('Both parameters must be a number.');
			};
		},

		minimumValue: function(myArray){
			if ( typeof(myArray) === 'object' ){
				var min = myArray[0];

				for ( var i = 0; i < myArray.length; i++ ){
					if (myArray[i] < min){
						min = myArray[i];
					};
				};
				console.log(min);
				return min;
			} else {
				console.log('Parameter must be an array.')
			};
		},

		averageArray: function(myArray){
			if ( typeof(myArray) === 'object' ){
				var sum = 0;
				for ( var i = 0; i<myArray.length; i++){
					sum = sum + myArray[i];
				};
				var average = sum/myArray.length;
				console.log(average);
				return average;
			} else {
				console.log('Please enter array.')
			};
		},
}


console.log('***RESULTS***');
// see note2 below
myFunctions.simpleLoop(1,20) // testing simpleLoop

myFunctions.minimumValue([-100,2,3,4,5]); // testing minimumValue

myFunctions.averageArray([-500,500,1000,3,-14]); // testing averageArray

/*
#note2: 
Note that in your 'myFunction' object, you've created key value pairs, the values being functions themselves (which take parameters), and the key names being 'simpleLoop', 'minimumValue', and 'averageArray'. Now, we can literally call 'myFunctions.<insert-key-name-here>' and the corresponding function will run. What you've created here is a 'METHOD'
*/



/*

#5 - Create a JS object with these properties/methods:
	
	Properties:
		+ name - set this as your name
		+ distanceTraveled -  set this initially to 0

	Methods:
		+ remember, methods should return themselves (right?)
		+ sayName - should alert the objects name propery (must use index.html for alert)
		+ saySomething = have it accept a parameter, this function should then say for example, '<name> says: <string parameter>' (make sure string)
		+ walk - alert, '<name> is walking...' and increase distanceTraveled by 3
		+ run - '<name> is running...' and increase distanceTraveled by 10
		+ crawl - '<name> is crawling...' and increase distanceTraveled by 1

*/


// one way to approach this assignment, #5, is to try creating a function which generates a person for you. Inside of this function you can place all of your attributes that you want this person to inherit, as well as define any methods you'd like to re-use on other instances of a person.

function makePerson( name ){
	var myPerson = {};
	myPerson.name = name;
	myPerson.distanceTraveled = 0;
	myPerson.sayName = function(){
		console.log('Your name is ' + myPerson.name + '.') //using instead of alert to avoid .html needs
		return myPerson;
	};
	myPerson.saySomething = function( myString ){
		if ( typeof(myString) === 'string' ) {
			console.log( myPerson.name + ' says, "' + myString +'"');
		} else {
			console.log('You must enter a string.');
		};
		return myPerson;

	};
	myPerson.walk = function(){
		console.log( myPerson.name + ' is walking...' );
		myPerson.distanceTraveled += 3;
		return myPerson;
	};
	myPerson.run = function(){
		console.log( myPerson.name + ' is running...' );
		myPerson.distanceTraveled += 10;
		return myPerson;
	};
	myPerson.crawl = function(){
		console.log( myPerson.name + ' is crawling...' );
		myPerson.distanceTraveled += 1;
		return myPerson;
	};
	return myPerson;
};


var Tim = makePerson('Tim');
console.log(Tim);
console.log(Tim.name);
console.log(Tim.distanceTraveled);
Tim.sayName();
Tim.saySomething('Hey!');
Tim.walk().walk(); // increases distance by 3, two times (6 total)
console.log(Tim.distanceTraveled);
Tim.run() // increases distance by 10
console.log(Tim.distanceTraveled);
Tim.crawl(); // increases distance by 1
console.log(Tim.distanceTraveled);


var Julianna = makePerson('Julianna');
console.log(Julianna);
Julianna.sayName().saySomething('Hoo hah, I\'m alive, hoo hah hah!').crawl().crawl().crawl().walk().saySomething('I\'m learning to walk!..Crawl before you Walk and Walk before you...').run().run().saySomething('Catch me if you can!').run().run().run().saySomething('Tee hee!');

Tim.crawl().walk();

// done.