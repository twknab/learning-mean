Rules:
1 Controller
Data are stored in this controller
When we click 'create user', store that data as a user object in the users array, and update our table.
When we click delete user, remove that user object from the users array and update the table.
Code Snippets That Might Help: Iterate an Object

for (var key in object){
  console.log(object[key]);
  // what might this allow us to do?
}
Code Snippets That Might Help: Angular $index

<script>
// Inside the controller
$scope.printIndex = function(val){
  console.log(val);
}
</script>
<div ng-repeat="n in [42, 42, 43, 43] track by $index">
  {{n}}
  <button ng-click = 'printIndex($index)'>Click</button>
</div>
The above snippets are intentionally generic, play with them to see if we want to tweak them to use them in our code.

Things to think about:

What if we wanted to store our data in a factory instead?
What if we wanted to store our data in a DB instead?
Bonus:

Make your table searchable
Add a date column
Make your table sortable