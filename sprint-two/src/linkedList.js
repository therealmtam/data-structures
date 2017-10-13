var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      var curNode = list.head;
      while (curNode.next !== null) {
        curNode = curNode.next;
      }
      curNode.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    var tobeRomoved = list.head.value;
    list.head = list.head.next;
    return tobeRomoved;
  };

  list.contains = function(target) {
    var cur = list.head;
    while (cur !== null) {
      if (cur.value === target) {
        return true;
      }
      cur = cur.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
