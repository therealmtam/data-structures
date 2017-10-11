var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Stack.prototype.pop = function() {
  var tobeDeleted = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];    
  return tobeDeleted;
};

Stack.prototype.size = function() {
  var s = 0;
  for (var key in this.storage) {
    s++;
  }
  return s;
};