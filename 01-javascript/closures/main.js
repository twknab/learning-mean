function Outer(){
	var count = 0;
	function inner(){
		count++;
		console.log(count);
	}
	return inner;
};

var counter = Outer();


counter();
counter();
counter();
counter();