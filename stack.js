//Last in first out LIFO
//stack.push() -> placing data in the stack
//stack.pop() -> removing the top element of the stack
//stack.peak() -> displaying the top element of the stack
//stack.length() -> displaying the size of the stack

//Using Stack to check whether a number is a pallindrome or not

var stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };
  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new stack();

//check whether a string is a pallindrome or note using myStack
let word = "Hrithik";
let reverseWord = "";

for (let i = 0; i < word.length; i++) {
  myStack.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  reverseWord = reverseWord + myStack.pop();
}

if (word === reverseWord) {
  console.log(word + " is a pallindrome");
} else {
  console.log(word + " is not a pallindrome");
}
