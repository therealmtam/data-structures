
var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  
  // Implement the methods below

  someInstance.enqueue = function(value) {
    var first = Object.keys(storage).sort(function(cur, next) {
      return parseInt(cur) - parseInt(next);
    })[0];
    storage[first + someInstance.size()] = value;
    return value;
  };

  someInstance.dequeue = function() {
    var first = Object.keys(storage).sort(function(cur, next) {
      return parseInt(cur) - parseInt(next);
    })[0];
    var toBeDeleted = storage[first];
    delete storage[first];
    return toBeDeleted;
  };

  someInstance.size = function() {
    var s = 0;
    for (var key in storage) {
      s++;
    }
    return s;
  };

  return someInstance;
};