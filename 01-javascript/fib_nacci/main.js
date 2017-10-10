/*

0,1,1,2,3,5,8

*/

function fib(){
		var count = 1;
	
	function nacci(){
		var fib = []; // initialize array
		fib[0] = 0;
		fib[1] = 1;
		for(var i=2; i<=count; i++){
		    // Next fibonacci number = previous + one before previous
		    fib[i] = fib[i-2] + fib[i-1];
		};
		console.log(fib);
		count++;

	};
	return nacci; // the return nacci here is what allows the 'count' variable to continue on
};

var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
