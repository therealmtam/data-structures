var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  
  var first = Object.keys(this.storage).sort(function(cur, next) {
  
    return parseInt(cur) - parseInt(next);
  
  })[0];
  
  this.storage[first + this.size()] = value;
  
  return value;
};

queueMethods.dequeue = function() {
  var first = Object.keys(this.storage).sort(function(cur, next) {
  
    return parseInt(cur) - parseInt(next);
  
  })[0];

  var toBeDeleted = this.storage[first];
  delete this.storage[first];
  return toBeDeleted; 
};

queueMethods.size = function() {
  var s = 0;
  for (var key in this.storage) {
    s++;
  }
   
  return s;
};




