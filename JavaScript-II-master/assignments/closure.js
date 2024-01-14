// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function simpleClosure(){

  return () => {
    return 'Well Hello'
  }
}

const simple = simpleClosure();
console.log(simple());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let num = 0;
  return () => {
    num += 1;
    console.log(num);
  };
};
// Example usage: 
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
function counterFactory(){
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num = 0;
  this.increment = function(){ 
    return () => {
      num += 1;
      console.log(num);
    };
  },
  this.decrement = function(){ 
    return () => {
      num -= 1;
      console.log(num);
    };
  }
};

const counter2 = new counterFactory();
counter2.increment();
counter2.decrement();
