/* Here we are going to practice creating an asynchronous example */

function getStuffFromDBorAPI(callback){
	var data;
	var myTimer = setInterval(function(){
		if (typeof(callback) == 'function'){
			// just got back from the DB/ fetched API
			data = [{name: 'Todd'}, {name: 'Michael'},{name: 'Portia'}];
			callback(data);
		}
	}, 10000); // every 10 seconds
	return data;
};

// simulated request:

function requestDataFromDBorAPI(){
	var data = getStuffFromDBorAPI(function myCallback(data){
		console.log(data,'Asynchronous');
		for (var i=0; i<data.length; i++){
			console.log(data[i].name);
		}
	});
	console.log(data, 'Synchronous');
}

function catchFly(){
	console.log('I just caught a fly!');
}

requestDataFromDBorAPI();
console.log('Hello');
catchFly();

/* 
note: because setInterval runs every 10 seconds, the callback function
provided will not run until each iteration. Thus, the other console 
logs will appear on the page
*/


/* how to match up one of these functions to a button without jquery */

var button = document.getElementById('someButton');
button.addEventListener('click',doThisOnClick);
// here we define doThisOnClick:
function doThisOnClick(){
	alert('You did it!');
}






///////////
//
//	PROMISES
//
///////////

/*
For some reason the promise below isn't working, could be a bad
code example. Maybe better to lookup another version of this :)
*/


function getStuffPromiseFunction(resolve, reject){
	var data = 'whee!';
	setTimeout(function(){
		data = [{name: 'Todd'},{name: 'Michael'},{name: 'Portia'}];
		resolve(data);
	},1000);
	reject();
	return data;
};


function requestStuffPromise(){
	console.log('Running...');
	// create the promise
	var data = new Promise(function(resolve, reject){
		getStuffPromiseFunction(resolve, reject);
	});

	// if promise is successful:
	data.then(function(data){
		console.log(data, 'Asynchronous...');
		for (var i=0; i<data.length; i++){
			console.log(data[i].name);
		}
	});
	data.catch(function(){
		console.log('failure...');
	});
	console.log('Ending now.');
};



requestStuffPromise();








