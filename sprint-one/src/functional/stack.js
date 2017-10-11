var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    var tobeDeleted = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return tobeDeleted;
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
