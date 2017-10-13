var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  var cur = this._storage.get(index);
  var pair = [k, v];
  if (cur === undefined) {
    this._storage.set(index, []);
    this._storage.get(index).push(pair);
    return;
  }
  var i = 0;
  var bucket = this._storage.get(index);
  while (bucket[i] !== undefined) {
    if (bucket[i][0] !== k) {
      bucket.push(pair);
    } else if (bucket[i][0] === k) {
      bucket[i][1] = v;
    }
    i++;
  }
  console.log(bucket);
  console.log('________________________');
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  var cur = this._storage.get(index);
  if (cur.length && cur.length === 1) {
    return cur[0][1];
  }
  var i = 0;
  while (cur[i] !== undefined) {
    if (cur[i][0] === k) {
      return cur[i][1];
    }
    i++;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var cur = this._storage.get(index);

  if (cur.length && cur.length === 1) {
    this._storage.set(index, []);
  }
  var i = 0;
  while (cur[i] !== undefined) {
    if (cur[i][0] === k) {
      cur.splice(i, 1);
    }
    i++;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


