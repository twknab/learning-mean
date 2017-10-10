var my_module = require('./my_module')();
var _ = require('./bower_components/underscore/underscore-min.js');


// testing my_module
my_module.greet();
my_module.add(1,2);


// testing _underscore
var myList = [1,2,3,4,5];
console.log(_.shuffle(myList)); // this is using underscore's built in shuffle module
