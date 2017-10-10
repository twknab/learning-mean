// note: we are not actually running a server file here, but this gives us a working example as to how we can import our own
// node modules or even create our own (which we've done with mathlib)

var math = require('./mathlib')();  // imports mathlib.js and runs the function (which returns our desired result)
console.log(math.add(2,3));
console.log(math.multiply(3,5));
console.log(math.square(5));
console.log(math.random(1,20));