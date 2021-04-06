const treeify = require('treeify');

//============
// BINARY SEARCH TREE CONSTRUCTION
//============

// O(log(N)) time complexity
// O(log(N)) space complexity

// THE BELOW LINKS HAVE AN EXCELLENT JS BST EXPLANATIONS
// YouTube: https://www.youtube.com/watch?v=dVSxO83aseU&t=20s
// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
// https://medium.com/swlh/binary-search-tree-in-javascript-31cb74d8263b

//ITERATIVE IMPLEMENTATION USING A WHILE LOOP
//============
// STEP ONE
//============

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


//============
// STEP TWO
//============

// A constructor method inside the BinarySearchTree class will be run whenever I create a new instance of the BST.
// Define the BST class framework with a root property that will always hold the root of this tree. Initialize the root to null.
// This BinarySearchTree class will consist of the root node of the tree, as well as methods (insert, contains, remove). 
class BinarySearchTree 
{
  constructor() {
    this.root = null;
  }

  //============
  // STEP THREE (occurs after the instantiations and console.logs below)
  //============
  // insert() method
  insert(value) {
    const newNode = new Node(value);

    if(!this.root) {                        // !this.root is the same as this.root === null;
      this.root = newNode;
      return this;                          //HEREIN, this IS THE ENTIRE INSTANCE OF THE BinarySearchTree
    }

    let currentPlaceholderNode = this.root;
      while(true) {             
        if(value === currentPlaceholderNode){           // this prevents an infinite loop by assuring that there are no duplicate values
          return undefined;
        }                       // meaning... while currentPlaceholderNode exists, run the while loop until there is no left child or until a return statement breaks the loop.
        if(value < currentPlaceholderNode.value) {
          if(!currentPlaceholderNode.left) {           // !currentPlaceholderNode.left is the same as currentPlaceholderNode.left === null;
            currentPlaceholderNode.left = newNode;     // HEREIN, this IS THE ENTIRE INSTANCE OF THE BinarySearchTree
            return this;
          }
          currentPlaceholderNode = currentPlaceholderNode.left;       // move the currentPlaceHolder to the child node; if a left child node already exists, then make that child node the currentPlaceholderNode (rather than the root node). 
        } else if(value > currentPlaceholderNode.value) {
          if(!currentPlaceholderNode.right) {
            currentPlaceholderNode.right = newNode;
            return this;
          }
          currentPlaceholderNode = currentPlaceholderNode.right;
        }
      }
  }

}


// Instantiate BST (with an inherited root property set to null)
const tree = new BinarySearchTree();
// via inheritance, tree has a this.root property that can be set to a value, say... 20, by instantiating a new Node class
// tree.root = new Node(20);


//============
// STEP THREE (cont...)
//============
// insert method called
tree.insert(20);
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(30);
tree.insert(25);
tree.insert(32);


console.log(tree);
// HERE IS THE OUTPUT OF THE CONSOLE LOG (WITH MY EXPLANATION):
// I HAVE AN INSTANCE OBJECT OF A BINARYSEARCHTREE WITH A ROOT, WHICH ITSELF IS A NODE. 
// BinarySearchTree { root: Node { value: 20, left: null, right: null } }
console.log('=====================================================================');

console.log(treeify.asTree(tree, true));
// Treeify is an NPM package used to better visualize the objects of the tree
// The second argument, true, will display the values of each node in the BST
// HERE IS THE OUTPUT OF THE TREEIFY CONSOLE LOG:
/*

└─ root
├─ value: 20
├─ left
└─ right

*/
//====================================================================================================
//====================================================================================================
//RECURSIVE IMPLEMENTATION USING A SERIES OF FUNCTION CALLS

class Node2
{
  constructor(data) 
	{
    this.value = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree2 
{
  constructor() {
    this.root = null;
  }
  
  insert(value) {
    const newNode = new Node2(value);
    
    if(!this.root) {                        
      this.root = newNode;
      return this;                          
    }
    
    let currentPlaceholderNode = this.root;
    function addNode() {             
      if(value === currentPlaceholderNode) {        
        return undefined;
        }                       
        if(value < currentPlaceholderNode.value) {
          if(!currentPlaceholderNode.left) {         
            currentPlaceholderNode.left = newNode;    
            return this;
          }
          currentPlaceholderNode = currentPlaceholderNode.left; 
          addNode()     
        } else if(value > currentPlaceholderNode.value) {
          if(!currentPlaceholderNode.right) {
            currentPlaceholderNode.right = newNode;
            return this;
          }
          currentPlaceholderNode = currentPlaceholderNode.right;
          addNode()
        }
      }
      addNode()
    }
    
  }
  
  
  const tree2 = new BinarySearchTree2();
  
  
  tree2.insert(20);
  tree2.insert(10);
  tree2.insert(5);
  tree2.insert(15);
  tree2.insert(30);
  tree2.insert(25);
  tree2.insert(32);
  
  console.log('================================================');
  
  console.log(tree2);
  
  console.log('================================================');
  
  console.log(treeify.asTree(tree2, true));
  


