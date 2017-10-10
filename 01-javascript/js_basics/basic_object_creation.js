function NinjaConstructor(name, age, prevOccupation) {
  var ninja = {};     // the object that will eventually be returned
/*
Addition of properties to ninja.
*/
  ninja.name = name;
  ninja.age = age;
  ninja.prevOccupation = prevOccupation
/*
Addition of methods to ninja
*/
  ninja.introduce = function() {
    console.log("Hi my name is " + ninja.name + ". I used to be a " + ninja.prevOccupation + " and now I'm a Ninja!");
  }
/*
return ninja
*/
  return ninja;    
}


                      // Create the Andrew Ninja
var Andrew = NinjaConstructor("Andrew", 24, "Teacher");
Andrew.introduce();
                      // Create the Michael Ninja
var Michael = NinjaConstructor("Michael", 34, "Founder");
                      // here we redefine the introduce method for a particular "Instance" or Object
Michael.introduce = function() {
  console.log("I am the Sensei!")
}
Michael.introduce();