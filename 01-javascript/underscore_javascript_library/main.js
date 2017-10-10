var _ = {

	map : function(array, callBack){
		var newArray = [];
		for (var i=0; i<array.length; i++){
			newArray.push(callBack(array[i]));
		};
		return newArray;
	},

	reduce : function(array, callBack){
		var total = 0;
		for (var i=0; i<array.length; i++){
			total = callBack(total,array[i]);
		};
		return total;
	},

	find : function(array, callBack){
		for (var i=0; i<array.length; i++){
			if (callBack(array[i]) == true){
				return array[i];
			};
		};
	},

	filter : function(array, callBack){
		var newArray = [];
		for (var i=0; i<array.length; i++){
			if (callBack(array[i]) == true){
				newArray.push(array[i]);
			};
		};
		return newArray;
	},

	reject : function(array, callBack){
		var newArray = [];
		for (var i=0; i<array.length; i++){
			if (callBack(array[i]) == false){
				newArray.push(array[i]);
			};
		};
		return newArray;
	},

};

var timesThree = _.map([1,2,3,4,5], function(number){return number * 3});
var addAll = _.reduce([1,2,3,4,5], function(memo, number){return memo + number});
var findOddInt = _.find([2,2,2,4,5], function(number){return number % 2 == 1;});
var evens = _.filter([1,2,3,4,5,6], function(number){return number % 2 == 0;});
var odds = _.reject([1,2,3,4,5,6], function(number){return number % 2 == 0;});
console.log('**** MAP ****');
console.log(timesThree);
console.log('**** REDUCE ****');
console.log(addAll);
console.log('**** FIND ****');
console.log(findOddInt);
console.log('**** FILTER ****');
console.log(evens);
console.log('**** REJECT ****');
console.log(odds);