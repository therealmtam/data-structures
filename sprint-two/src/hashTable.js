var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var cur = this._storage.get(index);
  var node = {value: v, next: null, key: k};
  if (cur === undefined) {
    this._storage.set(index, node);
  } else {
    var pre;
    while (cur !== null) {
      if (cur.key === k) {
        cur.value = v;
        return;
      }
      pre = cur;
      cur = cur.next;
    }
    pre.next = node;
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var cur = this._storage.get(index);
  if (cur === undefined) {
    return cur;
  }
  while (cur.key !== k) {
    cur = cur.next;
  }
  return cur.value;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var cur = this._storage.get(index);
  if (cur.next === null) {
    this._storage.set(index, undefined);
  } else {
    var pre;
    while (cur && cur.key !== k) {
      pre = cur;
      cur = cur.next;
    }
    pre.next = cur;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


