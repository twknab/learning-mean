/* JS Fundamentals Assign 3 - Tim Knab - Oct. 2016 */


///////////
//
//	Person Constructor:
//
///////////

// ++ Removed unnecessary variable creation.
// ++ Added move() function (outside of person object) which will process moves for us.


function personConstructor(name){
	var person = {};
	if ( typeof(name) === 'string' ){
		person.name = name;
		person.distanceTravelled = 0;
		person.sayName = function(){
			console.log('My name is ' + name + '. Nice to meet you.'); 
			return person;
		};
		person.saySomething = function(words){
			if ( typeof(words) === 'string'){
				console.log(name + ' says, "' + words + '"')
			} else {
				console.log('You can only speak in strings...')
			};
			return person;
		}; 
		person.walk = function(){
			move('walk',3);
			return person;
		};
		person.run = function(){
			move('runn',10);
			return person;
		};
		person.crawl = function(){
			move('crawl',1);
			return person;
		};
		return person;
	} else {
		console.log(`Your person's name must be a string!`);
		return null;
	};
	function move(motion, distance){
		console.log(`${name} is ${motion}ing...`)
		person.distanceTravelled += distance;
		console.log(`${name}'s total distance is now: ${person.distanceTravelled}`);
	};

}; // end personConstructor


// begin testing personConstructor:
var tim = personConstructor('Tim');
console.log(tim.distanceTravelled);
tim.sayName().saySomething('Test test, is this thing on?').crawl().walk().saySomething(`You've got to crawl before you walk, and walk before you...`).run().saySomething(`I'm running!!`).run().run();
console.log('Your total distance travelled: ' + tim.distanceTravelled);




///////////
//
//	Ninja Constructor:
//
///////////

// ++ Added beltUpgrade() functions to handle upgrades, and added levelUp attribute to 'ninja' which runs beltUpgrade().
// ++ Note: New ninjas start with a white belt, and then with each invocation of levelUp() move up the list to black belt.
// ++ Once black belt is reached, user can advance no further. 

function ninjaConstructor(name, cohort){
	var ninja = {};
	var beltLevels = ['white', 'yellow', 'blue', 'red', 'black'];
	if ( typeof(name) === 'string' && typeof(cohort) === 'string'){
		ninja.name = name;
		ninja.cohort = cohort;
		ninja.beltLevel = beltLevels[0];
	} else {
		console.log('Your ninja\'s name and cohort must be a string!');
		return null;
	};
	ninja.levelUp = function(){
		beltUpgrade();
		return ninja;
	};

	function beltUpgrade(){
		// iterate through our belt levels array
		for (var i = 0; i<beltLevels.length-1; i++) {
			if (ninja.beltLevel === beltLevels[i]){
				var index = i;
			};
		};
		
		// update our ninja.beltLevel to the next slot in the array,
		// but only if the next index slot exists in the length of the array:
		if (index <= beltLevels.length-1){
			ninja.beltLevel = beltLevels[index + 1];
			console.log(`${name}'s belt level is now: ${ninja.beltLevel}`);
		} else {
			console.log(`You've reached the highest belt ${ninja.name}!`);
		};
		
	}; 
	return ninja;
}; // end ninjaConstructor

// begin testing ninjaConstructor:
var julianna = ninjaConstructor('Julianna', 'MEAN 1');
var numberNinja = ninjaConstructor(123, 'Web Fundamentals');
console.log(julianna.name);
console.log(julianna.cohort);
console.log('%%%%%%% BELT LEVELING RESULTS %%%%%%%%%');
console.log(`Before level up my belt was: ${julianna.beltLevel}`);
julianna.levelUp();
console.log(`Before level up my belt was: ${julianna.beltLevel}`);
julianna.levelUp();
console.log(`Before level up my belt was: ${julianna.beltLevel}`);
julianna.levelUp();
console.log(`Before level up my belt was: ${julianna.beltLevel}`);
julianna.levelUp();
console.log(`Before level up my belt was: ${julianna.beltLevel}`);
julianna.levelUp(); // can't go any higher than black belt
