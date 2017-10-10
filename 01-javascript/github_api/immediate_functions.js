/* sometimes you might want to run a function instantly. this can be done using 'immediate functions', where a function is
created and run instantly. the variables inside of that function then become private, instead of global. this is useful
if you want a bunch of functions to execute in the beginning of your code, and you didn't want the variables used to conflict
with any variables created later. ie, say you used 'x', 'y' or 'z' in your immediate functions -- because these functions
run instantly and the variables within them are not global in scope */


(function(){
	var x = 'this is private';
	var y = 'this is private too';
	console.log('this is my immediate function!');
}());

/* notice how the function is contained within parentheses, and following the function is another set of parentheses, which
then invokes the function */

console.log(x);

// javascript libraries like jQuery use these immediate functions!