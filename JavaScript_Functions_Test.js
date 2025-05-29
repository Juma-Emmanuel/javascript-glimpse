// JavaScript Functions – Comprehensive Practical Test
// Coverage: function declaration, function expression, arrow functions, parameters, return values, default parameters, rest parameters, callback functions, anonymous functions, IIFE, recursion, function scope, closures, hoisting

/*********************
 * Question 1: Function Declaration
 * Write a function called greet that takes a name and logs "Hello, [name]!".
 *********************/

// Your code here

function greet(name) {
    return "Hello, Shawn";
    };
    console.log(greet("Shawn")); // Output: Hello, Shawn

/*********************
 * Question 2: Function Expression
 * Create a function expression that returns the square of a number.
 *********************/

// Your code here
function square(num) {
    return num * num;
    }
    console.log(square(5)); // Output: 25

/*********************
 * Question 3: Arrow Function
 * Rewrite the function from Question 2 using arrow function syntax.
 *********************/

// Your code here
let squareOf = num => num * num;
console.log(squareOf(5));

/*********************
 * Question 4: Default Parameters
 * Write a function that multiplies two numbers. If the second number is not provided, it should default to 1.
 *********************/

// Your code here
function mul( a, b = 1 ) {
 if (b === 0) {
    return 1;
    }
    return a * b;
    }
    let a = 5;
    let b = 2;
    console.log(mul(a, b)); // Output: 10

/*********************
 * Question 5: Rest Parameters
 * Write a function that accepts any number of arguments and returns their sum.
 *********************/

// Your code here
function sum(...args) {
 return args.reduce((a, b) =>
    a + b, 0);
 }
 console.log(sum(1, 2, 3, 4, 5)); // Output

/*********************
 * Question 6: Callback Functions
 * Write a function that accepts two numbers and a callback function.
 * It should call the callback with the result of adding the two numbers.
 *********************/

// Your code here
function callBack(a, b, callback) {
    return callback(a + b);
    }
    let result = callBack(5, 10, function(x) {
        return x * 2;
        });
        console.log(result); // Output: 30

/*********************
 * Question 7: Anonymous Functions
 * Use an anonymous function inside a setTimeout to log "Hello after 1 second".
 *********************/

// Your code here
function hello() {
    setTimeout(function() {
        console.log("Hello after 1 second");
        }, 1000);
        }
        hello();

/*********************
 * Question 8: IIFE (Immediately Invoked Function Expression)
 * Create an IIFE that logs "IIFE executed".
 *********************/

// Your code here
( function () {
    console.log("IIFE executed");
    } )();

/*********************
 * Question 9: Recursion
 * Write a recursive function to calculate the factorial of a number.
 *********************/

// Your code here
function factorial(n) {
    if (n == 0) {
        return 1;
}
else {
    return n * factorial(n - 1);
 }
}
    console.log(factorial(5)); // Output: 120

/*********************
 * Question 10: Function Scope
 * Create a function with a local variable. Try accessing it outside the function (in comments).
 *********************/

// Your code here
function myFunction () {
    let localVariable = "I'm local";
    console.log(localVariable);
    }
    // console.log(localVariable); // Error: localVariable is not defined
    myFunction();


/*********************
 * Question 11: Closures
 * Write a function `outer` that defines a variable and returns an `inner` function that accesses that variable.
 *********************/

// Your code here
function outer () {
    let outerVariable = "I'm outer";
    return function inner () {
        console.log(outerVariable);
      }
    }
    let innerFunction = outer();
     innerFunction(); // Output: I'm outer

/*********************
 * Question 12: Function Hoisting
 * Call a function before it is declared to demonstrate hoisting. Comment on the behavior.
 *********************/

// Your code here
console.log(mul(5, 6)); // Output: 30
function mul (a, b) {
    return a * b;
    } // The function is hoisted to the top of the scope, so it's available before it's declared