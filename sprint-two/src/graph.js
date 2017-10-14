// Instantiate a new graph
var Graph = function() {

  this.storage = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  var nodeObj = {};
  nodeObj.value = node;
  nodeObj.edges = {};
  this.storage[node] = nodeObj;

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  if (this.storage[node] === undefined) {
    return false;
  } else {
    return true;
  }

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  var nodeObj = this.storage[node];   //node you want to delete from storage
  
  if(Object.keys(nodeObj.edges).length !== 0) {
    for (var connectedNode in nodeObj.edges) {
      delete this.storage[connectedNode].edges[node];
    }  
  }
  
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  var from = this.storage[fromNode];
  var to = this.storage[toNode];

  if(from.edges[toNode] !== undefined && to.edges[fromNode] !== undefined) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  var from = this.storage[fromNode];
  var to = this.storage[toNode];
  
  if(from !== undefined && to !== undefined) {
    
    from.edges[toNode] = toNode;    
    to.edges[fromNode] = fromNode; 
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  delete this.storage[fromNode].edges[toNode];
  delete this.storage[toNode].edges[fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for(var node in this.storage) {

    cb(Number(node));

  }

};

Graph.prototype.targetNodes = function(cb, nodes) {
//Target node will target a specific nodes and apply a callback function to it
  
  var allArgs = Array.prototype.slice.call(arguments); //[cb, nodes, ...]
  allArgs.shift();                        //[2, 3, 4, ...]
  var allNodes = allArgs; //[2, 3, 4, ...]

  var obj = this;
  allNodes.forEach(function(nodes) {
    cb(obj.storage[nodes].value);
  });

};

//TEST
// var graph = new Graph();
// var result = [];
// var cb = function(value) {
//   result.push(value);
// };

//     graph.addNode(2);
//     graph.addNode(1);
//     graph.addNode(3);
//     graph.addNode(5);

//     graph.targetNodes(cb, 2, 1, 3, 5);
//     console.log(result);



/*
 * Complexity: What is the time complexity of the above functions?
 */

//Specification:
  //Graph prototype will contain all the methods and also store it's instance of all nodes
  //Depending on the method, the methods will return values
//Justification:
  //Use cases are derived based on the methods that appear above (i.e., the need to find the to and from node)
//Explanation:
  //Graph will store all nodes in an object;
  //Nodes, based on the test, are numbers/values. All Nodes are expected to be unique.
  //I will take that 'Node' and create a Node object to contain that value as a Key and Property
    //That Node object will also contain a Key Value called ==> edges: { nodeValue it is connected to, nodeValue...}
    //Edges property contains keys that are the nodes it is connected to and the value is = key

  //addNode:
  	//Will create a Node Object, making the value passed in as 'node' as the key and the value of that object.
  	//It will then store that object into Graph's storage object by taking the 'node' value passed in as the key
  	//and the value would be the Node Object.	

  	//The way addNode is used is InstanceOfGraph.addNode(newNode).
  	
  //contains:
  	//Will iterate through the Graph storage, going through each Node Object and checking to see if the node (a value) parameter
  	//is equal to any of the Nodes.
  	//It does this by checking if the Graph storage object has that key. 
  	//It will then return a boolean stating true or false.

  //removeNode:
  	//RemoveNode will delete the NodeObject and Key stored in Graph's storage
  	//Before that, it will go through Node Object's edges property.
  	//It will go through that object and see which nodes (keys) it is connected to.
  	//It will then go through Graph's storage to each of those NodeObjects by using their values (the keys in storage)
  	//It will target their edges property, going through the edges object and removing the key/value that is connected to the removed node
  
  //hasEdge:
  	//Will take the fromNode and go to it's edges property in Graph storage and see if the value of that node exists.
  	//It will also go through the edges property in Graph storage of the toNode to see if it exists.
  	//It will then return a boolean specifying so.

  //addEdge:
  	//Will take the fromNode and add the toNode to it's edges object as a key and value
  	//Will take the toNode and add the fromNode to it's edges object as a key and value


  //removeEdge:
    //It will remove the edges property of fromNode and toNode

  //forEachNode:
    //It will go through all of the Node Objects in storage
 







