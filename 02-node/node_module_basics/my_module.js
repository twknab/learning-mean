module.exports = function(){
	return {
		greet : function(){ console.log('We are using my_module'); },
		add : function(a,b){ console.log('The sum is:', a+b); }
	};
};