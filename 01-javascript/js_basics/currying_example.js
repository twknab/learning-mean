/* Another way we can invoke or use closure functions is a method called 'Currying', in which case a function
that we might typically write as one, is broken into two, with a closure function inside. */




/* here's a regular function example (non-curried) */
function myNinjaBelt(ninja, beltColor){
	console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
};
myNinjaBelt('Eileen', 'black');





/* here's an example of re-writing that function via Currying: */
function ninjaBelt(ninja){
	return function belt(beltColor){ //note the closure here!
		console.log("Ninja "+ ninja + " has earned a " + beltColor +" belt.");
	};
};
ninjaBelt('Eileen')('black'); // Note the double invokation here: the second set of parentheses allows us to pass the parameter for the inner function



function homeGrownCurry(vegetable){
	return function country(nation){
		console.log('Your order of a curry with '+vegetable+' from '+nation+' is on the way...');
	};
};
homeGrownCurry('potato')('India');
homeGrownCurry('pineapple')('Thailand');
console.log('^These have been curried functions^...:)')