///////////////////////////
///////////////////////////
///
///   Adding Methods to our Models
///
///////////////////////////
///////////////////////////

/*

  There are some various methods that we can tap into if we want to make some modifications to our data.
  Check out the 'pre' method.

*/


//...
var mongoose = require('mongoose');
var myModelSchema= new mongoose.Schema({
  name: {type:String}
  // info here!
}, { timestamps: true
 });

// for older version, use the following timestamp
//{ timestamps:
//  { createdAt: 'created_at' },
//  { updatedAt: 'updated_at'}
// });

//custom methods, pre, post etc. here
myModelSchema.methods.addJayToString = function(input){
  return input+"Jay";
}
/* What pre does prior to saving:
    Starting with an instance of our model:
      e.g.  var MyModel = mongoose.model('myModelName');
            var myModelInstance = new MyModel({name: "The Amazing "});
    When we try to save our model:
      e.g.  myModelInstance.save();
    Pre runs before saving.  In the example below: It would add "Jay to our current name ("The Amazing")" and "The Amazing Jay" would be stored in our DB.
*/
myModelSchema.pre('save', function(done){
  this.name = this.addJayToString(this.name);
  done();
});


/*
We can also call the methods e.g. addJayToString directly on the instance, if we didn't want to use 'pre'.  e.g.
      var MyModel = mongoose.model('myModelName');
      var myModelInstance = new MyModel({name: "The Amazing "});
      console.log(myModelInstance.addJayToString("hello "));
    This would just console.log "hello Jay";


*/
mongoose.model('myModelName', myModelSchema);
//...