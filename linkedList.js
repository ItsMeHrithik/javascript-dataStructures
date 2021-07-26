function LinkedList() {
  let head = null;
  let length = 0;
  function Node(data) {
    this.data = data;
    this.next = null;
  }

  //length of the linkedlist
  this.getLength = function () {
    return length;
  }
  //head of the linkedlist
  this.getHead = function() {
    return this.head;
  }

  //add a node
  this.add = function(data) {
    let node = new Node(data);
    if(head === null) {
      head = node;
    } else {
      let currentNode = head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  }

  //get the index of the data
  this.getIndexOf = function(data) {
    let index = 1;
      if(head.data === data) {
        return index;
      } else {
        let currentNode = head;
        while(currentNode.data !== data) {
          index++;
          currentNode = currentNode.next;
        }
        return index;
      }
  }

  //add node at an index
  this.addAt = function(data, index) {
    let newNode = new Node(data);
    let previousNode;
    let currentNode = head;
    let currentIndx = 0;
    if(index > length || index < 1) {
      console.log(`Index out of bound`);
    } else {
      if(index === 1) {
        newNode.next = currentNode;
        head = newNode;
      } else {
        while(currentIndx < index) {
          currentIndx = currentIndx + 1;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        newNode.next = currentNode;
        previousNode.next = newNode;
      }
    }
    length = length + 1;
  }


  //delete the node by element

  this.removeNode = function(data) {
    let currentNode = head;
    let previousNode;
    if(head.data === data) {
      head = currentNode.next;
    } else {
      while(currentNode.data != data) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length = length-1;
  }

  //reverse the linkedlist





  //print linked list
  this.printLinkedList = function() {
    let linkedList = "";
    if(head === null) {
      console.log(`Linked List is Empty`);
    } else {
      let currentNode = head;
      while(currentNode) {
        linkedList = linkedList + currentNode.data + " -> " ;
        currentNode = currentNode.next;
      }
    }
    console.log(linkedList);
  }

}

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.printLinkedList();
console.log( `The index of 1 is ${ll.getIndexOf(1)}`);
let length = ll.getLength();
console.log( `The length of LinkedList is ${length}`);
ll.addAt(9, 3);
ll.printLinkedList();
length = ll.getLength();
console.log( `The length of LinkedList is ${length}`);
ll.removeNode(1);
ll.printLinkedList();
length = ll.getLength();
console.log( `The length of LinkedList is ${length}`);
