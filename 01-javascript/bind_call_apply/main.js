/* JS for Bind Call Apply Project */

///////
//
//	BIND()
//
///////

// Object to test BIND()
var customObject = {
	name:'California, Eureka',
	onClick: function(customParameter){
		console.log("I've been clicked");
		console.log(customParameter, '<-- Custom Parameter has been passed!')
		console.log(this.name);
	}
};

// Second Object to test BIND()
var secondObject = {
	name: 'Fort Myers, Florida'
};



//////
//
//	CALL() AND APPLY()
//
//////
/*
	Call and Apply allow your objects to inherit the attributes
	of whatever parent you would like. They are both used with 
	commas instead of a period, and if calling apply() you must
	use an array(), whereas with .call you can keep the comma
	list notation as the example below showcases:
*/
function Ninja(name, age){
	this.name = name;
	this.age = age;
};

function BlackBelt(name, age){
	// notice the commas
	Ninja.call(this,name,age);
	this.belt = 'black';
};

function YellowBelt(name, age){
	//array
	Ninja.apply(this,[name,age]);
	this.belt = 'yellow';
};

var yB = new YellowBelt('Mike', 40);
var bB = new BlackBelt('Charlie', 29);
console.log(bB.name);
console.log(yB.name);



/*
	Here's another way to use call and apply so that we can use
	'this' without using 'new' first
*/

function levelUp(){
	console.log(this.name + ' has learned a new kata, in ' + this.gender + ' favorite language: ' + this.language);
}

var person = {
	name: 'Lisa',
	gender: 'her',
	language: 'JavaScript, duh!'
}

levelUp.call(person);
// by using .call() and passing in our 'person' object, 
// the 'name', 'gender', 'language' attributes are passed
// into levelUp function, and are assigned to 'this'




// Use CLICK() to test our bind/call/apply functions and objects
$(document).ready(function(){

	//////////////
	//
	//	BIND EXAMPLE (you may have to de-comment stuff to test it)
	//
	//////////////

	// // bind() sets whatever is provided to it as 'this';
	// // thus now when the button is clicked, customObject.name can be accessed
	// $('#button').click(customObject.onClick.bind(customObject));
	

	// // if you run the code below, only the console log from customObject.onClick will run.
	// // when console.log(this.name) runs in the function, 'this' will not be know.
	// // when the bind() method is applied above, it now allows us to access customObjects
	// // (since that's the name we passed to .bind())
	// $('#button').click(customObject.onClick);

	
	// // here's an example using bind() with a second object, where this time we'll
	// // reference the function in our customObject, but pass in 'secondObject' as the
	// // 'this'. In this scenario, customOject.onClick will run, but when 'this' is referenced,
	// // it will instead be referring to secondObject.
	// // note, you can also pass in a parameter
	// $('#button').click(customObject.onClick.bind(secondObject, 'You can even pass in a parameter.'));




});