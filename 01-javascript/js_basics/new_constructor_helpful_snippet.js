// The code below can prevent the problems caused by not using new on a constructor (use it inside the constructor function):

if (!(this instanceof NinjaConstructor)) {  // ninjaconstructor being the 'class' or function
   // the constructor was called without "new".
   return new NinjaConstructor(name, prevOccupation);
 }