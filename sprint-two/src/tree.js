var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var subTree = Tree(value);
  this.children.push(subTree);
};

treeMethods.contains = function(target) {
  var found = false
  function traverse(tree) {
    if (tree.value === target) {
      found = true;
    }
    if (tree.children.length > 0) {
      tree.children.forEach(function(subtree) {
        traverse(subtree);
      });
    }
  }
  traverse(this);
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
