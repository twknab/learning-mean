/////////////////////////////////
/////////////////////////////////
///
///   LOGIN AND REGISTRATION
///
/////////////////////////////////
/////////////////////////////////

  // Whenever we create a login and registration we're going to need to use the following:

  /*

    + A login form (can share controller with registration)
    + A registration form (can share controller with login)
    + An Angular factory which makes requests to the server
    + A server and associated files, which has a User model and controller associated with Mongoose

  */


/////////////////////////////////
/////////////////////////////////
///
///   BCRYPT (PASSWORD HASH)
///
/////////////////////////////////
/////////////////////////////////

// to use bcrypt, npm install it:

	// npm install bcrypt --save
	
// you might also need:
	// npm install express-session --save    (this is optional but having session can be useful)
	// bower install angular-cookies --save (again to track your logged in user)


/////////////////////////////////
/////////////////////////////////
///
///   USING BCRYPT
///
/////////////////////////////////
/////////////////////////////////

	//////////////////////
	//	GENERATING HASH
	//////////////////////
	// here's how we can generate a hash (registration creation):

	var bcrypt = require('bcrypt.js');
	bcrypt.hashSync(password, bcrypt.genSaltSync(8))

	// note you may have to do something like:
	var pwdHash = bcrypt.hashSynch(password, bcrypt.genSaltSync(8));
	
	//////////////////////
	//	CHECKING HASH
	//////////////////////
	// here's how we can compare a hash to our a received password (login attempt):
	bcrypt.compareSync(password, this.password); // if you're not using 'this' in your object, than change accordingly



