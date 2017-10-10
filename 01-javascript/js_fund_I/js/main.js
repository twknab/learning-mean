// #1 - Go through each value in the array x, where x = [3,5,‘Dojo’, ‘rocks’, ‘Michael’, ‘Sensei’]. Log each value
x = [3,5,'Dojo','rocks','Michael','Sensei']

for (var i=0; i<x.length; i++){
	console.log(x[i])
};


// #2 - add a new value using x.push method:
x.push(100);


// #3 - add a new array ["hello", "world", "JavaScript is Fun"] to x
x.push(["hello", "world", "JavaScript is Fun"]);


// #4 - log x in console now
console.log(x) // array now included


// #5 - create a simple for loop that sums all numbers between 1 to 500, console log
var finalSum = 0
for (var j=1; j<501; j++ ){
	finalSum = finalSum + j;
};
console.log(finalSum);


// #6 - write a loop that goes through [1, 5, 90, 25, -3, 0] and finds min value and prints it
var min = 0;
var myArray = [1, 5, 90, 25, -3, 0];
for (var k=0; k<myArray.length; k++){
	if (min>myArray[k]){
		min = myArray[k];
	};
};
console.log(min);


// #7 - write a loop that goes through [1, 5, 90, 25, -3, 0] and finds average of all values
var sumToAverage = 0
var averageArray = [1, 5, 90, 25, -3, 0];
for (var l=0; l<averageArray.length; l++) {
	sumToAverage = sumToAverage + averageArray[l];
};
average = sumToAverage/averageArray.length;
console.log(average);


// #8 - write a for loop that'll go through the info below, console.log each key-value pair
var new_ninja = {
	name: 'Jessica',
	profession: 'coder',
	favorite_language: 'JavaScript', //like that's even a question!
	dojo: 'Dallas'
}

for (m in new_ninja){
	console.log(m + ': ' + new_ninja[m]);
};



