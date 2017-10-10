var beginDonutTransaction = new Promise(
  function(resolve,reject){
    var x = setTimeout(function () {
      console.log('donut is on counter');
      resolve();
    }, 10);
  }
);
beginDonutTransaction
.then(function(){
  //this is the resolve
  console.log('pay');
  console.log('walk out door');
})
.catch(function(){
  //this is the reject
  console.log("give me my donut!");
});