//////////////
//
//	CONJUGATED WORDS IN STRINGS
//
//////////////

	console.log('isn\'t my conjucated sentence printing in javascript pretty sweet?')
	// prints: isn't my conjucated sentence printing in javascript pretty sweet?



//////////////
//
//	HOISTING
//
//////////////


	// When you run this in JS, the interpreter does the following:

	// what you run:

	function myFunctionName(firstParameter, secondParameter){
	  var myProduct = firstParameter * secondParameter;
	  return myProduct
	}

	var myThoughts = 'this is my thought and i will be hoisted'
	var myDonut = 'this is my donut'


	// becomes:

	var myThoughts // this is just what's called a DECLARATION
	var myDonut
	function myFunctionName(firstParameter, secondParameter){
	  var myProduct = firstParameter * secondParameter;
	  return myProduct
	}

	var myThougts = 'this is my thought and i will be hoisted' // when a value is added, this is called ASSIGNMENT (to your declaration)
	var myDonut = 'this is my donut'

	// what happens is HOISTING, where the JS interpreter pulls ALL the variables to the top,
	// sets them to UNDEFINED and then later fills in their values
	// all FUNCTIONS get HOISTED immedietely BENEATH the VAR definitions


	// this example here:
	awesome();
	function awesome() {
		console.log("too good to be true");
	}

	// will be hoisted like this:
	// JS rearranges your code before running it
	function awesome() {     // the function floated to the top!
		console.log("too good to be true");
	}
	awesome();               // so now awesome is defined before we invoke it!


	// however, for functions whom are set to a variable
	// we can get an UNDEFINED error

	// example, this:
	varFunction();          
	var varFunction = function() {
		console.log("How will this get hoisted?")
	}

	// becomes this:
   // HOW THE JS INTERPRETER REARRANGES THE CODE
	var varFunction;	// the variable declaration gets hoisted to the top
	varFunction();  // this tries to invoke "undefined": we get "undefined is not a function"
	varFunction = function() {
		console.log("How will this get hoisted?")
	}

	// when the function is invoked, it won't work because hoisting has set our varFunction to undefined for now. if your functions aren't working, and they're set as variables, this could be a reason

//////////////
//
//	FUNCTIONS
//
//////////////

	// These are factories which return something.

	function myFunctionName(firstParameter, secondParameter){   // note, 'myFunctionName' is called the 'identifer'
	  var myProduct = firstParameter * secondParameter; // the stuff inside the brackets is known as the 'body'
	  return myProduct // if a return is not set, you'll get an 'UNDEFINED' returned
	}


	//////////////
	//
	//	STORING RESULT OF A FUNCTION INTO VARIABLE
	//
	//////////////
	
	// we can store the results of a function into a variable

	var theProductOfFiveAndFourteen = myFunctionName(5,14);
	// will run the values of 5 and 14 into myFunctionName and then store the results into theProductOfFiveAndFourteen


//////////////
//
//	FIRST CLASS - FUNCTIONS ARE OBJECTS
//
//////////////

	/* functions are FIRST CLASS objects and can go wherever they want
		they can:
			+ stand alone
			+ they can be the value of a variable
			+ they can be an attribute in a javascript object (this is called a method)
			+ they can be an argument in another function (this is known as a callback and outlined below)
			+ functions can be returned from functions (this is called a closure and outlined below)
	*/

	//////////////
	//
	//	CALLBACK FUNCTIONS
	//
	//////////////	
	
		// Note that the item in the click method's parameter is a function, not a variable.​

		​// The item is a callback function
		$("#btn_1").click(function() {
		  alert("Btn 1 Clicked");
		});

		// a call back is when a parameter is actually a function:

		function sayHello(){
			console.log('hello');
		}

		function saySomething() {
			sayHello();
		}

		saySomething();


		function thisFunction(param1){
			if (typeof param1 === 'function') {
				param1();
			} else {
				console.log('not passed a function!');
			};
		};

		// whatever param1 is entered as will try and run a function with that name, ie, param1()

		// if we entered param1 as a function, like 'sayHello()', because sayHello() doesn't return anything, 'undefined' would be returnedand the if statement will return false



		// here's another example

		function forEach(arr, callback){
			for (var i=0; i<arr.length; i++){
				callback(arr[i], i);
			}	
		}

		var someArray = [4,9,12,3];

		forEach(someArray, function( element, idx ){
			console.log(element, idx);
		});


		// is it (line 3), `callback(arr[i], i);` that allows us to pass the
		// variables `element`, `idx`?  (line 9)? ie,  'element' being arr[i], // and 'i' being 'idx'?





	//////////////
	//
	//	CLOSURE FUNCTIONS
	//
	//////////////

		// functions can manipulate variables both inside and outside of themselves
		// take the two examples:

		// manipulates 'a' inside of itself
		function myInsideVarFunction()) {
	    var a = 4;
	    return a * a;
		}

		// manipulates 'a' outside of itself
		var a = 4;
		function outsideVarFunction() {
		    return a * a;
		}

		// give the following closure function a investigation:

		var add = (function () { // creates an anonymous function
		    var counter = 0;
		    return function () {return counter += 1;}
		})();

		add();
		add();
		add();


		// the counter is now 3

		/*  
			The variable add is assigned the return value of a self-invoking function.
			The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
			This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
			This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
			The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
			A closure is a function having access to the parent scope, even after the parent function has closed.
		*/

		// here's another way to write it to make more sense:

		var add = (function() { 
			var counter= 0; 
			return function() { 
				return counter += 1; 
			} 
		})();



//////////////
//
//	CONDITIONALS
//
//////////////

		//////////////
		//
		//	IF/ELSE:
		//
		//////////////

			if ( condition_1 ) {
			   // code
			} else if ( condition_2 ) {
			   // code
			} else {
			   // code
			}


			// here's an example
			if ( x < 10 ) {
			   console.log("x is less than 10");
			} else if ( x < 20 ) {
			   console.log("x is less than 20");
			} else {
			   console.log("x is greater than 20!");
			}


		//////////////
		//
		//	TERNARY OPERATOR
		//
		//////////////

			(condition) ? console.log(true) : console.log(false)
			// if condition is true, log true, else log false


		//////////////
		//
		//	OTHER OPERATORS
		//
		//////////////

			<	 // less than	10 < 20 is true
			>	 // greater than	10 > 20 is false
			<=	 // less than or equal to	10 <= 10 is true
			>=	 // greater than or equal to	10 >= 10 is true
			==	 // is equal to value (Abstract Value Comparison)	"x" == "x" evaluates to true
			===	 // is equal to value and type (Strict Equality Comparison)	“1” === 1 evaluates to false
			!	 // inverse (not)	!true == false is true, 'x' !== 'y' is true
			||	 // or	true || false is true
			&&	 // and	true && false is false


		//////////////
		//
		//	WHILE LOOPS:
		//
		//////////////

			function countDown(number){
			  while(number > 0){
			    console.log(number);
			    number --;
			  }
			}
			countDown(10);


			//////////////
			//
			//	DO-WHILE LOOPS:
			//
			//////////////

				// Another less-often-used construction to guarantee that a while loop runs at least once is the do-while loop:

				do {
				// ride the water slide
				// check parent_permission
				}
				while (parent_permission)




//////////////
//
//	LOOPS
//
//////////////

	// can work for both arrays (by index) and objects (by key)

	// This means start at i = 0; as long as i < 10 keep looping; after every loop add 1 to i
	for (var i = 0; i < 10; i++) {     // notice the var keyword preceding our variable name as always  
	    console.log(i);
	}
	// anatomy: var i = 0; <-- a starting variable usually countable.
	// i < 10; <-- logic of when to end (usually just 1 thing, but you can use complex logic if you want to/need to);
	// i ++ <-- mechanism for incrementing i to reach the logical end


	// since arrays are indexed numerically:
	var array = [4,1,6,9,44];
	for (var i = 0; i < array.length; i++) {
	  console.log(array[i]);  
	}


	// for-in loops: (an if statement inside of a for loop):
	var ninja = {
		name:'Susanna',
		MEAN_belt:10,
		iOS_belt:10,
		python_belt:10,
		php_belt:9, // she hadn't mastered deploying yet!
		ruby_belt:9.75 // done in 1.5 hrs though!
	}
	for (var key in ninja) {
		if (ninja.hasOwnProperty(key)) {
			console.log(key);
			console.log(ninja[key]);
		}
	}

	//here's another for-in loop example:
	for (var key in ninja){
		console.log(key, ninja[key]); // this should iterate through 'ninja' object printing key and values![]
	}


	// this is important because:
	// JSON objects are often returned as an array with many objects inside of the array.


	//////////////
	//
	//	FOR IN LOOPS
	//
	//////////////

	var new_ninja = {
		name: 'Jessica',
		profession: 'coder',
		favorite_language: 'JavaScript', //like that's even a question!
		dojo: 'Dallas'
	}

	for (m in new_ninja){
		console.log(m + ': ' + new_ninja[m]);
	};

	// will print:
		// name: Jessica
		// main.js:59 profession: coder
		// main.js:59 favorite_language: JavaScript
		// main.js:59 dojo: Dallas



//////////////
//
//	OBJECTS
//
//////////////

	// if an array is a filing cabinet, where an index value relates to the folder/bucket
	// an object lets us escape the numerical indexing system.

	// let's look at the following examples:

	var array = [ function(){console.log('hello there');} ]

	// we can actually run the function by invoking the array:

	array[0]();

	// if we store many functions in our array, this could be difficult to remember what [bucket] each function lives in

	// we can instead, create an object:

	var object = {
		helloFunc: function(){console.log('hello there');}
	}

	// this is now a METHOD
	// 'helloFunc' is the key value
	// doesn't this look something like...JSON? =)


	// here's some more examples:

	var dojo = {}; // this creates an empty object
	dojo = {
		name: 'Coding Dojo',
		numberOfStudents: 25,
		instructors: ['Andrew', 'Michael', 'Jay'],
		location: {	// notice that the value for this key is another javascript object!
			city: 'San Jose',
			state: 'CA',
			zipcode: 95112
		}
	};

	console.log(dojo.name, dojo.numberOfStudents, dojo.instructors, dojo.location); // use dot notation to access objects

	console.log(dojo['name']); // bracket notation

	dojo.numberOfStudents = 40; // sets our key a new value
	dojo.location.city = 'Bellevue';
	dojo.location.state = 'Washington';
	dojo.location.zipcode = 'unknown';

	dojo.phoneNumber = 1231231234 // adds a new value into our object



	// OBJECTS and ARRAYS are the primary way that JS keeps data associations.
	// ARRAYS are normally used to keep track of integers
	// OBJECTS are generally used to keep attributes of a thing

	var myDonut = {
		frosting: 'glazed',
		type: 'old fashioned',
	}


	// it's also very common to see arrays filled with objects, where all objects have keys but with different values

	var glazedDonuts = [
		{
			frosting: 'glazed',
			type: 'old fashioned',
			age: '45',
			time: 'minutes',
		},
		{
			frosting: 'glazed',
			type: 'regular',
			age: '5',
			time: 'minutes',
		},
		{
			frosting: 'glazed',
			type: 'jelly filled',
			age: '1',
			time: 'seconds',
		}
	];


	// now how can we reference this?

	console.log(glazedDonuts[0].age) // 45
	console.log(glazedDonuts[1].type) // regular
	console.log(glazedDonuts[2].type) // jellyfilled

	// what if i wanted to see if i could buy the first donut out of the oven in less than 25 minutes?

	var purchase;

	if(glazedDonuts[0].age < 25 && (glazedDonuts[0].time == 'seconds' || glazedDonuts[0].time == 'minutes')){
		purchase = glazedDonuts[0];
	}
	else {
		console.log('sorry it has been a bit longer');
	}
