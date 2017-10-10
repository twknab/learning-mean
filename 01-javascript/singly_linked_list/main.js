class Node {

	constructor(value){

		this.value = value;
		this.next = null;

		var passThis = function(param){
			console.log(param);
		}
		passThis(this);
	};

};


class SinglyLinkedList {

	constructor(){
		this.head = null;
		this.tail = null;
	}

	add(node){
		if (this.head == null && this.tail == null){
			this.head = node;
			this.tail = node;
		} else {
			var previous_head = this.head;
			this.head = node;
			this.head.next = previous_head;
		};
		return this;
	};

	removeTail(){
		if (this.tail == null){
			console.log('No tail to remove.');
		} else {
			this.tail = null;
		};
		return this;
	};

};

var myList = new SinglyLinkedList();
var Tim = new Node('Tim');
var Julianna = new Node('Julianna');
var Vida = new Node('Vida');

myList.add(Tim).add(Julianna).add(Vida);
console.log(myList);
myList.removeTail();
console.log(myList);


