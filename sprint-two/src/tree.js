var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  //A .parent property, which refers to the parent node or null when there is no node
  newTree.parent = null;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);	//adds SHARED methods to the instance.

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

	var subTree = Tree(value);
  subTree.parent = this;
	this.children.push(subTree);

};

treeMethods.contains = function(target) {

  var pass = false;

  function traverse (tree) {

    if(tree.value === target) {
	    pass = true;
	    return;
	  }

  	if (tree.children.length !== 0) {
  	  tree.children.forEach(function(childTree) {
  	    traverse(childTree);
  	  });
    } 
  }
  
  traverse(this);
  return pass;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
