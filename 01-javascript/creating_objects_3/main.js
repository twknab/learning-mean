"use strict"


class VehicleConstructor{

	constructor(name, numbWheels, numbPassengers, speed) {

		var distanceTravelled = 0;
		var updateDistanceTravelled = function(){
			distanceTravelled += speed;
			console.log('Your distance is now: '+distanceTravelled);
		}

		this.name = name;
		this.numbWheels = numbWheels;
		this.numbPassengers = numbPassengers;
		this.speed = speed;

		this.makeNoise = function(noise){
			console.log(noise);
		};
		this.updateDistance = function(){ 
			updateDistanceTravelled();
		};
		this.checkMiles = function(){
			console.log(distanceTravelled);
		}

	};


};



var bike = new VehicleConstructor('bike',2,1,10);
console.log(bike);
bike.makeNoise = function(){ console.log('ring ring!'); };
bike.makeNoise();

var sedan = new VehicleConstructor('sedan',4,1,50);
console.log(sedan);
sedan.makeNoise = function(){ console.log('Honk Honk!'); };
sedan.makeNoise();

var bus = new VehicleConstructor('bus',4,10,50);
console.log(bus);
bus.pickUpPassengers = function(numbPickup){ this.numbPassengers += numbPickup; };
bus.pickUpPassengers(50);
console.log(bus.numbPassengers);

bus.__proto__.move = function(){ 
	this.updateDistance();
	this.makeNoise('Charuuuga, Charuuuga'); }
bus.move();

bus.checkMiles();

bus.__proto__.VIN = function(){
    var number = Math.floor(Math.random() * (99999999999999999 - 10000000000000000 + 1)) + 10000000000000000;
    this.VIN = number;
    console.log(this);
    return this;
  }

bus.VIN();
sedan.VIN();
bike.VIN();
console.log(this);


/*

/ Create a VehicleConstructor that takes in the name, number of wheels, and number of passengers

Each vehicle should have a makeNoise method
Using the constructor, create a Bike
redefine the Bike’s makeNoise method to print “ring ring!” Using the constructor, create a Sedan
redefine the Sedan’s makeNoise method to print “Honk Honk!”
Using the constructor, create a Bus
Give the bus a pickUpPassengers method that takes in the number of passengers to pick up and adds them to the passenger count
Then make the following modifications:

Have the Vehicle constructor also take in a “speed”
Store the speed as an attribute
Create a private variable called distance_travelled that starts at 0
Create a private method called updateDistanceTravelled that increments distance traveled by speed
Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
Add a method called checkMiles that console.logs the distance_travelled
Now modify your code to use Prototype and the recommended way of OOP we showed in the previous chapter.

You may have to change some private variables/methods to attributes to make all of the functionality work.

Then make the following additions:

Have each vehicle generate a random VIN number (study Math.random & Math.floor). Don’t worry about potential duplicates for now.

*/