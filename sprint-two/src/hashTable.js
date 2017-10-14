var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);  //the passed in limit is 8. Returned is a limitedArray object.
  this._listSize = 0;
  this._defaultSize = 8;

};

HashTable.prototype.insert = function(k, v, isNewValue) {
debugger; 
  //Check if the listSize is >= 75% full. If it is, then we need to double the list, then insert the new. 
  //Else we just insert the key and value into the current Table.
  
  this.checkSize();

  var index = getIndexBelowMaxForKey(k, this._limit); //returns a key below the limit 
   
  var objAtIndex = this._storage.get(index); //object at the index

  if(objAtIndex === undefined) {

    var keyValuePairs = {};           //we are leaning on {} to filter for duplicates and overwrite values for the same key.
    keyValuePairs[k] = v;
    this._storage.set(index, keyValuePairs);
  } else {
    //retrieve the object
    //add our key: v to the referenced object
    objAtIndex[k] = v;
  }
  
  if(isNewValue !== false) {
    this._listSize++;
  }
  console.log('list size = ' + this._listSize);
};

HashTable.prototype.retrieve = function(k, skipHash, providedIndex) {
  
  var index;

  if (skipHash === true && providedIndex !== undefined) {
    index = providedIndex; 
  } else {
    index = getIndexBelowMaxForKey(k, this._limit);
  }

  var objAtIndex = this._storage.get(index);

  if(objAtIndex === undefined) {
    return undefined;
  } else {
    
    return objAtIndex[k];
  }
};

HashTable.prototype.remove = function(k) {

  this.checkSize();  
  
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var objAtIndex = this._storage.get(index);
  
  if(objAtIndex !== undefined) {
    delete objAtIndex[k]; 
  }

  this._listSize--;

};



HashTable.prototype.checkSize = function() {

  if (this._listSize >= this._limit * 0.75) {
    this.doubleTableSize();
  } else if (this._listSize <= this._limit * 0.25 && this._limit > this._defaultSize) {
    this.halveTableSize();
  }

};

HashTable.prototype.halveTableSize = function() {

  var oldLimit = this._limit;
  this._limit = Math.round(this._limit / 2);

  var oldTable = this._storage;
  this._storage = LimitedArray(this._limit);
  
  for (var i = 0; i < oldLimit; i++) {
  
    var objAtIndex = oldTable.get(i);

    if(objAtIndex !== undefined) {

      for (var key in objAtIndex) {
        this.insert(key, objAtIndex[key], false);
      }
    } 
  }
  
};

HashTable.prototype.doubleTableSize = function() {

  var oldLimit = this._limit;
  this._limit = this._limit * 2;

  var oldTable = this._storage;
  this._storage = LimitedArray(this._limit);
  
  for (var i = 0; i < oldLimit; i++) {
  
    var objAtIndex = oldTable.get(i);

    if(objAtIndex !== undefined) {

      for (var key in objAtIndex) {
        this.insert(key, objAtIndex[key], false);
      }
    } 
  }
  
};






/*
 * Complexity: What is the time complexity of the above functions?
 */

//DOUBLING HASH TABLE SIZE WHEN STORAGE IS 75% OF LIMIT
//When you hit 75% of the Limit, then:
//1) double the size of the hash table (i.e., the 2x Limit)
//2) rehash all old values from the original hash table

//During each Insertion, we will check if the limit is 75% full.
  //To do this with constant time complexity, we need to use a counter when items are inserted
  //To do this the hash table must have an additional counter property.
//If the limit is 75% full, then begin the Doubling Function.

//Doubling Function:
//Implementation:
  //We create a new HashTable with 2x the limit.
  //We store the original HashTable (_.storage) into a holder variable while we connect the new HashTable to the _.storage property of our instance of HashTable
  //We then need to rehash all of the old values into the new one.
    //To do this, we need to take each object at each index 0 to limit-1 of the array, then we need to walk through it if it is not undefined (meaning nothing is there);
    //When we go through each object at each location in the array, we need to run the key and value and limit
    //into the hashing function and save it to the new Hash Table.
    //reset the listSize property.
//Since the retrieval function passes in the key through the hash function, to work with that constraint to retrieve
//all the values from storage, we need to know all the keys that have been passed in (ie. keep track of them).
//However, storing all those values would not be a good strategy.
//So we need to refactor the retrieval function of the Hash Table to take an input signifying that
//we want to run through the storage index by index 0 to end of storage.

//Reduction size to half:
//There will be a default limit (that is the original set limit)
//We will resize when:
  //we have doubled in size but do not use up >= 25% of the new limit, then we will 
  //resize the Hash Table to half of what it is.
    //We do this by following the process of doubling, except we set the limit to be less.



