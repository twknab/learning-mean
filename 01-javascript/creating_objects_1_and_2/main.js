function Vehicle(name,wheels,passengers){
	/* private */
	var privateVar = 'this is a private variable';
	var privateMethod = function(){
		console.log('this is a private method...');
	}
	privateMethod();
	// note the reason that the above don't work is that they are outside the scope of the object itself.
	// when you create your Vehicle{} object, only the items placed within .this are brought into the object.
	// thus, these functions and variables above are not accessible to any object you construct using your Vehicle{} object creator.

	/* public */
	this.name = name;
	this.wheels = wheels;
	this.passengers = passengers;
	this.makeNoise = function(noise){
		console.log(noise);
	};
	this.getPrivate = function(){ // if you want to access private variables, you can build in methods to do so! (this way they can be viewed but not changed!)
		console.log(privateVar);
	}
};

var bike = new Vehicle('bike',2,1);
console.log(bike);
bike.getPrivate();
bike.makeNoise('ding ding!');
bike.makeNoise = function(){
	console.log('ring ring!');
};
bike.makeNoise();

var sedan = new Vehicle('sedan',4,4);
console.log(sedan);
sedan.makeNoise('beeeep!');
sedan.makeNoise = function(){
	console.log('honk honk!');
}
sedan.makeNoise();

var bus = new Vehicle('bus',4,52);
console.log(bus);
bus.pickup = function(numbPassengers){
	bus.passengers += numbPassengers;
}
bus.pickup(20);
console.log(bus.passengers);
//bus.privateMethod(); // notice because privateMethod() is private, it is not accessible outside of the function/class itself.


/* Written as class ES6 syntax */


class MyVehicle {
	constructor(name, wheels, passengers, speed){
		var distanceTravelled = 0;
		var updateDistanceTravelled = function(){
			distanceTravelled += speed;
			console.log(distanceTravelled);
		}
		var isThisPrivate = function(){
			console.log('do you think this is private?');
		}


		this.name = name;
		this.wheels = wheels;
		this.passengers = passengers;
		this.speed = speed;
		this.makeNoise = function(noise){
			console.log(noise);
		};
		this.move = function(noise){
			updateDistanceTravelled();
			this.makeNoise(noise);
		};
		this.checkMiles = function(){
			console.log(distanceTravelled);
		}
	};
};

var myBike = new MyVehicle('bicycle',2,1,30);
console.log(myBike);
// myBike.isThisPrivate(); // this won't work because it's private
myBike.makeNoise('Ting ting!');
myBike.move('kariiiing, kariiing!');
myBike.makeNoise = function(){
	console.log('ring ring!');
}
myBike.makeNoise();
myBike.checkMiles();

/* prototype practice */
myBike.__proto__.myNewProperty = function(){
	console.log('this is my prototype added later!');
}
myBike.myNewProperty();
console.log(myBike);

var myVan = new MyVehicle('van',4,12,15);
console.log(myVan);
myVan.myNewProperty();
