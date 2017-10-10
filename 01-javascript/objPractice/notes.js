
/* Prioritize Deck Of Cards */


function objMaker(){
	var newObject = {};
	return newObject;
}


var someOjb = objMaker()



function personMaker(name, stuff){
  var newObject = {};
  newObject.name = name;
  newObject.stuff = stuff;
  newObject.steals = function(personObj, item) {
    for ( var i = 0; i < personObj.stuff.length; i++ ){
      if ( personObj.stuff[i] === item ){
        newObject.stuff.push(personObj.stuff[i]);
        personObj.stuff.splice(i, 1);
        return;
      }
    };
  }
  return newObject;
}

var charlie = personMaker('Charlie', ['yo-yo', 'hat', 'coffee-mug']);
var ryan = personMaker('Ryan', ['cell-phone', 'batteries', 'id']);

console.log(ryan.stuff);
console.log(charlie.stuff);
charlie.steals(ryan, 'cell-phone');
console.log(ryan.stuff);
console.log(charlie.stuff);