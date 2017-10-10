/* Build Some Functions Assignment, Coding Dojo, October 2016, Tim Knab */

// #1 (basic) : make a function that can be used anywhere in your file, and when invoked, will console.log('i am running'); Give it the name, 'runningLogger'

function runningLogger(){
	console.log('I am running.');
};

runningLogger(); // runs function to see if it works



// #2 (basic) : make a function that is callable, has one parameter, and multiplies the value of the parameter by 10 before returning the result. Give it the name, 'multiplyByTen'. Invoke it, passing in the argument of 5.

function multiplyByTen(value){
	if (typeof value === 'number'){
		return value*10;
	} else {
		console.log('Please enter a valid number.')
	};
};

multiplyByTen(5); // runs function with argument of 5

x = multiplyByTen(5); // assigns our function to a variable
console.log(x); // console logs variable



// #3 (basic): write two functions (stringReturnOne and stringReturnTwo) that each return a different hard coded string.

function stringReturnOne(){
	var myString = 'Look Ma, a customized string!';
	return myString;
};

function stringReturnTwo(){
	var myString = 'Look Ma, a custom string!';
	return myString;
};

console.log(stringReturnOne(), stringReturnTwo());



// #4 (medium): write a function named 'caller' that has one parameter. If the argument provided to caller is a function - typeof() may be useful - invoke the argument. Nothing is returned.


function caller(myFunction){
	if (typeof myFunction === 'function'){
		console.log('Yup, it\'s a function')
		myFunction();
	} else {
		console.log('This is not a function.')
	};
};

caller(function(){ 
	console.log('This is my caller function parameter reporting for duty.');
 });

caller('this string of mine'); // logs, 'this is not a function


// #5 (medium) : write a function named myDoubleConsoleLog that has two parameters. If the arguments passed to the function are functions, console.log the value that each, when invoked returns.

function myDoubleConsoleLog(firstFunction, secondFunction, a, b, c, d){
	if (typeof secondFunction === 'function' && typeof firstFunction === 'function'){
		console.log('Yes both are functions');
		console.log(firstFunction(a,b));
		console.log(secondFunction(c,d));

	} else {
		console.log('Both are not functions');
	};
};

myDoubleConsoleLog(function(a,b){
	var multiply = a * b;
	return multiply;
},function(c,d){
	var subtract = c - d;
	return subtract;
},1,2,3,4);




// #6 (hard) : write a function 'caller2' that has one parameter. When the function runs, have it console.log the string 'starting...', wait 2 seconds, and then invoke the argument, if the argument is a function. (setTimeout may be useful). The function should then console.log 'ending...'. Invoke the function by passing it into myDoubleConsoleLog.


// have to write a new myDoubleConsoleLog as I over-did it above:

function mySecondDoubleConsoleLog(firstFunction, secondFunction){
	if (typeof secondFunction === 'function' && typeof firstFunction === 'function'){
		console.log(firstFunction());
		console.log(secondFunction());
	};
};

// testing mySecondConsoleLog...works, but without parameters...
mySecondDoubleConsoleLog(function(){
	return 2*2;
},function(){
	return 1*2;
});


// onto #6:
function caller2(myParameter){
	console.log('Starting...');
	if (typeof myParameter === 'function'){ // checks if parameter is a function
		setTimeout(function() { // setTimeout(<callback>,<time>)
			myParameter();
			console.log(myParameter());
			console.log('Ending...')
		}, 2000); // in milliseconds = 2 seconds
	} else {
		console.log('Parameter must be a function'); // if not function log this
	};
};

caller2(function(){return 2*2;}); // testing with valid function (works!)
caller2('Testing with a string...'); // testing with string (gives us proper message!)

mySecondDoubleConsoleLog(caller2(function(){return 4*4;})) // invoking caller2 with mySecondDoubleConsoleLog() (working)
















