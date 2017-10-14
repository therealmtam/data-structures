var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    var node = Node(value);

    if (list.head === null) {

      list.head = node;
      list.tail = list.head;

    } else {

      var prevLink = list.tail;
      list.tail = node;
      prevLink.next = list.tail;
    }
   
  };

  list.removeHead = function() {
    
    if (list.head === null) {
      return list.head;
    } else {
      var prevHead = list.head;
      list.head = list.head.next;
      return prevHead.value;  
    }
  };

  list.contains = function(target) {
    
    var selector = list.head;
    var doesContain = false;
    
    while (selector.next !== null) {
      
      if (selector.value === target) {
        doesContain = true;
        break;
      }  
      selector = selector.next;
      
      if (selector.next === null) {
        if (selector.value === target) {
          doesContain = true;
          break;
        }
      }
    }
    
    return doesContain;    
  };

  list.addToHead = function(value) {
  
  //This function will add a node to the Head and move the
  //old Head node to be linked to the new Head.

  //This will happen by first checking to see the value at the head (list.head)
  //If there is a node there, then we need to save it to a temporary variable
  //while we replace list.head with a new Node. Then set the new Node variable with the parameter value
  //Then edit the new list.head Node's next property to be the temporarily stored node.
  //If there is not a node at list.head, then just add a Node there with the parameter value.
  //There is nothing returned by this function.


    if (list.head === null) {
      list.head = Node(value);
    } else {      
      var oldHeadNode = list.head;

      list.head = Node(value);
      list.head.next = oldHeadNode;
    }
 
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

//TEST:
// var myLinkedList = LinkedList();

// myLinkedList.addToTail('1');
// myLinkedList.addToTail('2');
// myLinkedList.addToTail('3');
// myLinkedList.addToTail('4');
// myLinkedList.addToTail('5');

// console.log(myLinkedList.contains('1'));
// console.log(myLinkedList.contains('2'));

// myLinkedList.removeHead();
// console.log(myLinkedList.contains('1'));
// myLinkedList.removeHead();
// console.log(myLinkedList.contains('2'));
// myLinkedList.addToTail('2');
// console.log(myLinkedList.contains('2'));