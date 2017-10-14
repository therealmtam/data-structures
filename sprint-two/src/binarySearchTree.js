var BinarySearchTree = function(value) {

	this.value = value; 	//the value of the head node
	this.right = null;		//nodes to the right
	this.left = null;		//nodes to the left

};

BinarySearchTree.prototype.insert = function(value) {

  function traverse(tree) {
  	if (value > tree.value) {
      if (tree.right === null) {
        tree.right = new BinarySearchTree(value);	
      } else {
      	traverse(tree.right);
      }
  	} else if (value < tree.value) {
  	  if (tree.left === null) {
  	  	tree.left = new BinarySearchTree(value);
  	  }	else {
  	  	traverse(tree.left);
  	  }
  	}
  }

  traverse(this);

};

BinarySearchTree.prototype.contains = function (target) {

  var doesContain = false;

  function traverse(tree) {
  	if (target === tree.value) {
  	  doesContain = true;
  	} else if (target > tree.value && tree.right !== null) {
  	  traverse(tree.right);
  	} else if (target < tree.value && tree.left !== null) {
  	  traverse(tree.left);
  	}
  }

  traverse(this);
  return doesContain;	

}; 

BinarySearchTree.prototype.depthFirstLog = function(cb) {

  function traverse(tree) {

    cb(tree.value);

    if (tree.left !== null) {
   	  traverse(tree.left);
    }

    if (tree.right !== null) {
      traverse(tree.right);
    }

  }

  traverse(this);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//Explanation:
//The BinarySearchTree pseudoclassical function constructor takes in a value (a number, string, obj, etc.)
//Every instance of the BST is considered to be a node in the tree.
//Each instance has a right, left, and value property.
//The right property = null if there are no nodes to the right of it, else another node (BST obj)
//The same is true for the left.

//insert:
//Insert works by inserting the node into the right location in the BST. The right location
//is a location determined by the rules of a BST ==> all values to a node are less than it is
//and all values to the right of it are greater than it.
//To have this happen, we start with the top node.
//1) we compare the top value to the value passed into the insert function.
	//If the the inserted value is less than the top node, we look to the top node's left node
	  //We then recursively go through the left side of the tree until we find the value that has
	  //null as the direction we want to head in (left or right).
	  //At that point, we will replace that left or right value to the new node.
	//We repeat the process for the right side of the node tree if the value is > top node's value
//The insert function does not return anything.

//Contains:
//Contains is a sort of search of the BST. We do this by comparing the top node's value to the target
//value. We recursively move through the tree, doing the comparison of the current node's value and
//the target value to see if they are equal and then if the current node is > or < the target.
//If the target value = to any of the BST's node's values, then change a semi-global local variable outside
//of the recursive function (called pass) to true. The recursive function does not return anything.
//The recursive function takes in nodes. The first node passed in is the top Node.
//The contains function will return the pass variable (T or F).

//DepthFirstLog:
//This function takes in a callback function that is to be applied to every node.
//The call back function accepts each node's value as an input parameter.
//The call back function can return or do whatever else. That function is not specified.
//The DFL recursively walks through the BST and applies the cb function to every node given the 
//node's value. The recursive function takes in the top node as the first node. It then recursively
//takes in other nodes in the BST, and accesses their value then executes the cb function. Then
//if the current node has left or right nodes, it will recursively be called on the left nodes
//then the right nodes until the right or left nodes = null.
//The DFL does not return anything. 





