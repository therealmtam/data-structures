var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

BinarySearchTree.prototype.contains = function(target) {
  var found = false;
  function traverse(tree) {
    if (tree.value === target) {
      found = true;
    } else if (tree.value > target && tree.left !== null) {
          traverse(tree.left)
    } else if (tree.value < target && tree.right !== null) {
          traverse(tree.right);
    }
  }

  traverse(this);
  return found; 
}

BinarySearchTree.prototype.insert = function(v) {
  var subtree = new BinarySearchTree(v);
  function traverse(tree) {
    if (subtree.value > tree.value) {
      if (tree.right === null) {
        tree.right = subtree;
      } else {
        traverse(tree.right);
      }
    } else if (subtree.value < tree.value) {
      if (tree.left === null) {
        tree.left = subtree;
      } else {
        traverse(tree.left);
      }
    }
  }

  traverse(this);
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  function traverse(tree) {
    cb(tree.value);
    if (tree.left) {
      traverse(tree.left);
    }
    if (tree.right) {
      traverse(tree.right);
    }
  }
  traverse(this);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
