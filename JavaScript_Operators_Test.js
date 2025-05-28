
// JavaScript Operators – Comprehensive Practical Test
// Topic Coverage: Arithmetic, Assignment, Comparison, Logical, Bitwise, Ternary, Type Operators, and Operator Precedence

/*********************
 * Question 1: Arithmetic Operators (5 marks)
 * Write expressions to demonstrate the use of: +, -, *, /, %, **
 * Print each result using console.log()
 *********************/

// Your code here

let a = 10;
let b = 20;
console.log(a + b); // Output: 30

let a = 10; 
let b = 20;
console.log(b-a); // Output: 10

let a = 10; 
let b = 20;
console.log(a*b); // Output: 200

let a = 10;
let b = 20;
console.log(b/a); // Output: 2

let a = 10; c = 20;
let b = a / c;
console.log(%b); // Output: 0

let a = 10;
let b = 20;
console.log(a ** b); // Output: 100000000000000000000

/*********************
 * Question 2: Assignment Operators (5 marks) rrrr
 * Create a variable and use the following assignment operators in sequence:
 * =, +=, -=, *=, /=, %=, **=
 * Print the value after each operation
 *********************/

// Your code here fo review

var a = 30;
var b = 20;
console.log(a += b); // Output: 50

var a = 30;
var b = 20;
console.log(a = b); // Output: 20

var a = 30;
var b = 20;
console.log(a -= b); //Output: 10

var a = 30;
var b = 20;
console.log(a *= b); //Output:600

var a = 30;
var b = 20;
console.log(a /= b); //Output: 1.5

var a = 30;
var b = 20;
console.log(a %= b); //Output: 10

var a = 30;
var b = 20;
console.log(a **= b); //Output: 3.486784401e+29

/*********************
 * Question 3: Comparison Operators (5 marks)
 * Write expressions to compare values using:
 * ==, ===, !=, !==, >, <, >=, <=
 * Use console.log() to print the result of each comparison
 *********************/

// Your code here

var a = 30;
var b = 20;
console.log(a == b); //output: false

var a = 30;
var b = 20;
console.log(a === b); //output: false

var a = 30;
var b = 20;
console.log(a != b); //output: true

var a = 30;
var b = 20;
console.log(a !== b); //output: true

var a = 30;
var b = 20;
console.log(a > b); //output: true

var a = 30;
var b = 20;
console.log(a < b); //output: false

var a = 30;
var b = 20;
console.log(a >= b); //output: true

var a = 30;
var b = 20;
console.log(a <= b); //output: false

/*********************
 * Question 4: Logical Operators (5 marks)
 * Use logical AND (&&), OR (||), and NOT (!) to combine or negate boolean expressions.
 * Print the result of each case
 *********************/

// Your code here

const x = 10;
const y = 20;
console.log(x > y && x < y); //output: false because false && true = false

const x = 10;
const y = 20;
console.log(x > y || x < y ); //output: true because false || true = true

const x = 10;
const y = 20;
console.log(! (x < y)); //output: false because !(true) = false

/*********************
 * Question 5: Bitwise Operators (5 marks)
 * Demonstrate the use of &, |, ^, ~, <<, >>, >>> using small numbers.
 * Print the binary representation and result for clarity.
 *********************/

// Your code here

const x = 4;
const y = 2;
console.log(x & y); //output: 0

const x = 4;
const y = 2;
console.log(x | y); //output: 6

const x = 4;
const y = 2;
console.log(x ^ y); //output: 6

const x = 4;
const y = 2;
console.log(~(x+y)); //output: -7

const x = 4;
const y = 2;
console.log(x << y); //output: 16

const x = 4;
const y = 2;
console.log(x >> y); //output: 1

const x = 4;
const y = 2;
console.log(x >>> y); //output: 1

/*********************
 * Question 6: Ternary Operator (5 marks)
 * Use the ternary operator to print "Adult" if age >= 18, otherwise "Minor".
 *********************/

// Your code here

let age = 21;
result = (age >= 18) ? "Adult" : "Minor";
/*********************
 * Question 7: Type Operators (5 marks)
 * Use typeof and instanceof to demonstrate how to check data types and object inheritance.
 *********************/

// Your code here

var x = 10;
console.log(typeof(x)); //output: number
var x = "hello";
console.log(typeof(x)); //output: string
var x = true;
console.log(typeof(x)); //output: boolean

var x = 10;
console.log(x instanceof Array); //output: false

const arr = [10,20,39];
console.log(arr instanceof Array); //output: true

/*********************
 * Question 8: Operator Precedence (5 marks)
 * Write a complex expression that mixes arithmetic, logical, and comparison operators.
 * Add parentheses to clarify the order of operations and explain the result in a comment.
 *********************/

// Your code here

var x = 10;
var y = 20;
var result = (x + y);
console.log((result == x) || y); //output: 10, this is because it is a truthy value and the OR operator chooses the truthy value than the false one