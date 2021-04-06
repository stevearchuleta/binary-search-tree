//============
// BINARY SEARCH TREE CONSTRUCTION
//============

// O(log(N)) time complexity
// O(log(N)) space complexity

// THE BELOW LINKS HAVE AN EXCELLENT JS BST EXPLANATIONS
// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
// https://medium.com/swlh/binary-search-tree-in-javascript-31cb74d8263b

// Node class is used to create various nodes.
// Define Node Class with three properties: value, left (a left child nde), and right (a right child node).
// When an object for this node is instantiated, the this.value property is initialized with the parameter data that is passed into the constructor function.
// The left child node property and right child node property are set to null.
class Node
{
	constructor(data) 
	{
    this.value = data;
    this.left = null;
    this.right = null;
  }
}

// A constructor method inside the BinarySearchTree class will be run whenever I create a new instance of the BST.
// Define the BST class framework with a root property that will always hold the root of this tree. Initialize the root to null.
// This BinarySearchTree class will consist of the root node of the tree, as well as methods (insert, contains, remove). 
class BinarySearchTree 
{
  constructor() {
    this.root = null;
  }
}

// Instantiate BST (with an inherited root property set to null)
const tree = new BinarySearchTree();
// via inheritance, tree has a this.root property that can be set to a value, say... 20, by instantiating a new Node class
tree.root = new Node()