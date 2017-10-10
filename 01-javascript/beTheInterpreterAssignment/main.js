/*  Be The Interpreter Assignment - Javascript - October 2016 - Tim Knab */

// Problem 1: Re-write this how it would be hoisted:
console.log(first_variable);
var first_variable = "Yipee I was first!";
function firstFunc() {
	first_variable = "Not anymore!!!";
	console.log(first_variable);
}
console.log(first_variable);


// will be re-written after HOISTING as:
var first_variable
function firstFunc() {
	first_variable = 'Not anymore!!!';
	console.log(first_variable);
}
first_variable = 'Yipee I was first!';
console.log(first_variable)






// Problem 2: Re-write this how it would be hoisted:
var food = "Chicken";
function eat() {
	food = "half-chicken";
	console.log(food);
	var food = "gone";       // CAREFUL!
	console.log(food);
}
eat();
console.log(food);


// will be re-written after HOISTING as:
var food;
function eat(){
	var food;
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
	console.log(food);
}
food = 'Chicken'
eat()
console.log(food);






// Problem 3: Re-write this how it would be hoisted:
var new_word = "NEW!";
function lastFunc() {
	new_word = "old";
}
console.log(new_word);

// will be re-written after HOISTING as:
var new_word
function lastFunc(){
	new_world = 'old';
}
new_word = 'NEW!';
console.log(new_word);







