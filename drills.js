const BinarySearchTree = require('./bst')
const Queue = require('./queue')

// 1. How many searches?
// - Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 to try and find 8.

// There would be 4 searches. The sequence of numbers would be 11, 5, 6, then 8.

// - Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 to try and find 16.
//There would be 4 searches. The sequence would be 11, 14, 15, 17 then the search will not find 16
//The return would be -1

/*
1) Given a binary search tree whose in-order and pre-order traversals are respectively 
14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. 
What would be its postorder traversal?
Postorder Answer: 14, 19, 15, 27, 25, 90, 91, 79, 89, 35
The post order traversal of a binary search tree is 5 7 6 9 11 10 8. 
What is its pre-order traversal?
Answer: 8, 6, 5, 10, 9, 11
*/

/*
Using your BinarySearchTree class from your previous lesson, 
create a binary search tree with the following dataset: 
25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. 
Then implement inOrder(), preOrder(), and postOrder() functions. 
*/
const BST = new BinarySearchTree();
const treeData = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

function fillTree(arr, bst) {
  let tree = bst;
  for (let i = 0; i < arr.length; i++) {
    tree.insert(arr[i], arr[i]);
  }
  return tree;
}

fillTree(treeData, BST);

function preOrder(bst, preOrderArray = []) {
  let node = bst;
  //node handled first
//   console.log(node.key);
  preOrderArray.push(node.key)
  //then left
  if (node.left) {
    preOrder(node.left, preOrderArray);
  }
  //then right
  if (node.right) {
    preOrder(node.right, preOrderArray);
  }
  return preOrderArray;
}
console.log("Pre-order");
console.log(preOrder(BST));

function inOrder(bst, inOrderArray = []) {
    let node = bst;
    //left branch is visited
    if (node.left) {
      inOrder(node.left, inOrderArray)
    }
    //then node itself
    inOrderArray.push(node.key)
    //then right branch
    if (node.right) {
      postOrder(node.right, inOrderArray)
    }
    return inOrderArray
  }
  console.log("In-Order");
  console.log(inOrder(BST));

function postOrder(bst, postOrderArray = []) {
  let node = bst;
  //left branch first
  if (node.left) {
    postOrder(node.left, postOrderArray);
  }
  //then right branch
  if (node.right) {
    postOrder(node.right, postOrderArray);
  }
  //node handled after the branches
//   console.log(node.key);
  postOrderArray.push(node.key)
  return postOrderArray
}
console.log("Post-order");
console.log(postOrder(BST));

// STAR TREK NEXT COMMANDING OFFICER
const CommanderTree = new BinarySearchTree();

//use postorder traversal to insert values
CommanderTree.insert(5, "Captain Picard");
CommanderTree.insert(3, "Commander Riker");
CommanderTree.insert(6, "Commander Data");
CommanderTree.insert(8, "Lt. Cmdr. Crusher");
CommanderTree.insert(7, "Lieutenant Selar");
CommanderTree.insert(2, "Lt. Cmdr. Worf");
CommanderTree.insert(4, "Lt. Cmdr. LaForge");
CommanderTree.insert(1, "Lt. Security-Officer");

function nextInCommand(tree) {
  const result = []  
  //create a new queue
  const CommanderQueue = new Queue();
  //create a queue out of our bst
  CommanderQueue.enqueue(tree);
  //while first in the queue is not null
  while (CommanderQueue.first !== null) {
    const node = CommanderQueue.dequeue();
    result.push(node.value);
    if (node.left) {
      CommanderQueue.enqueue(node.left);
    }
    if (node.right) {
      CommanderQueue.enqueue(node.right);
    }
  }
  result.forEach((officers) => console.log(officers));
}

nextInCommand(CommanderTree);

// Max Profit