//https://developer.mozilla.org/ko/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript


function Node(value) {
  this.element = value
  this.next = null
}

function LinkedList() {
	this.head = null;
	this.length = 0;
}

LinkedList.prototype.addFirst= function(value) {
	var node = new Node(value);
	node.next = this.head;
	this.head = node;
	this.length++;
}

LinkedList.prototype.addLast = function(value) {
  var node = new Node(value);
  var last = this.head;
  while(last.next != null) {
    last = last.next;
  }
  last.next = node;
}

LinkedList.prototype.get = function(index) {
	var curr = this.head;
	for (var i = 0; i < index; i++) {
		curr = curr.next;
	}
	return curr.element;
}

LinkedList.prototype.remove = function(idx) {
  var prev = null;
  var curr = this.head;

  for (var i = 0; i < idx; i++) {
    prev = curr;
    curr = curr.next;
  }

  //finally, now we find prev and next...
  //curr: target node to delete
  //prev: previous node to curr

  if(prev == null) {
    this.head = curr.next;
  } else {
    prev.next = curr.next;
  }
  //optional
  curr.next = null;
  this.length--;
  return curr.element;
}

LinkedList.prototype.search = function(v) {
  var curr = this.head;
  var index = 0;
	while(curr != null) {
    if (curr.element == v) {
      return index;
    }
    curr = curr.next;
    index++;
  }
  //404 not found
  return -1;
}

//for debug
LinkedList.prototype.print = function() {
  var node = this.head;
  var str = ""
  while(node != null) {
    str += node.element + " ";
    node = node.next;
  }
  console.log(str);
}

/***************************************
*    test code                         *
****************************************/

//insert
var list = new LinkedList();
for (var i = 0; i < 10; i++)
	list.addFirst(i);

//get value by index
for (var i = 9; i >= 0; i--)
	console.log(`list[${i}] = ${list.get(i)}`);

//search
console.log("idx of 7: "  + list.search(7)); //shoud be 2
console.log("idx of 100: "  + list.search(100)); //shoud be -1

//remove middle
list.remove(list.search(7));
console.log("after remove 7: ")
list.print();

//remove first
list.remove(0);
console.log("after remove head")
list.print();

//remove last
list.remove(list.length - 1);
console.log("after remove last")
list.print();

//add last
list.addLast(255);
console.log("after add last to 255")
list.print();
