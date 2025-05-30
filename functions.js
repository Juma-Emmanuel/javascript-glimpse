

// JavaScript Functions – Comprehensive Practical Test
// Coverage: function declaration, function expression, arrow functions, parameters, return values, default parameters, rest parameters, callback functions, anonymous functions, IIFE, recursion, function scope, closures, hoisting

/*********************
 * Question 1: Function Declaration
 * Write a function called greet that takes a name and logs "Hello, [name]!".
 *********************/

// Your code here
function Greetuser(name) {
    return name === undefined ? "User" : name;
}                       
console.log(`Hello, ${Greetuser()}!`); // Output: Hello, User!                                         
console.log(`Hello, ${Greetuser("Alice")}!`); // Output: Hello, Alice!
/*********************
 * Question 2: Function Expression
 * Create a function expression that returns the square of a number.
 *********************/

// Your code here

const square = function(num) {
  return num * num;
};

console.log(square(3)); // Output: 9


/*********************
 * Question 3: Arrow Function
 * Rewrite the function from Question 2 using arrow function syntax.
 *********************/

// Your code here
const square = (num) => num * num;

console.log(square(3)); // Output: 9

/*********************
 * Question 4: Default Parameters
 * Write a function that multiplies two numbers. If the second number is not provided, it should default to 1.
 *********************/

// Your code here
const multiply = (a, b = 1) => a * b;

console.log(multiply(4));      // Output: 4  (4 * 1)
console.log(multiply(4, 3));   // Output: 12 (4 * 3)


/*********************
 * Question 5: Rest Parameters
 * Write a function that accepts any number of arguments and returns their sum.
 *********************/

// Your code here
const sumAll = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sumAll(1, 2, 3));         // Output: 6
console.log(sumAll(10, 20, 30, 40));   // Output: 100


/*********************
 * Question 6: Callback Functions
 * Write a function that accepts two numbers and a callback function.
 * It should call the callback with the result of adding the two numbers.
 *********************/

// Your code here
function addAndCallback(a, b, callback) {
  const result = a + b;
  callback(result);
}

// Example callback function
function displayResult(result) {
  console.log("The result is:", result);
}

// Using the function
addAndCallback(10, 20, displayResult);  // Output: The result is: 30


/*********************
 * Question 7: Anonymous Functions
 * Use an anonymous function inside a setTimeout to log "Hello after 1 second".
 *********************/

// Your code here
setTimeout(function() {
  console.log("Hello after 1 second");

}, 1000);

/*********************
 * Question 8: IIFE (Immediately Invoked Function Expression)
 * Create an IIFE that logs "IIFE executed".
 *********************/

// Your code here
(function() {
  console.log("IIFE executed");
})();


/*********************
 * Question 9: Recursion
 * Write a recursive function to calculate the factorial of a number.
 *********************/

// Your code here
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Test the function
console.log(factorial(6)); // Output: 720


/*********************
 * Question 10: Function Scope
 * Create a function with a local variable. Try accessing it outside the function (in comments).
 *********************/

// Your code here
function showMessage() {
  let message = "Hello, this is a local variable!";
  console.log(message);
}

showMessage();


/*********************
 * Question 11: Closures
 * Write a function `outer` that defines a variable and returns an `inner` function that accesses that variable.
 *********************/

// Your code here
function outer() {
  let outerVar = "I'm from the outer function";

  function inner() {
    console.log(outerVar); // Accessing variable from outer
  }

  return inner;
}

// Create the inner function
const innerFunc = outer();

// Call the inner function
innerFunc(); // Output: I'm from the outer function


/*********************
 * Question 12: Function Hoisting
 * Call a function before it is declared to demonstrate hoisting. Comment on the behavior.
 *********************/

// Your code here
greet(); // Works because of hoisting

function greet() {
  console.log("Hello, Daniel!");
}
