
var name = ("Ali");
console.log ("Ali");



//Question 2: console.log()
console.log("Write code that logs the following output exactly as shown,Use console.log() only:\n"); 
Name: Sarah
Age: 25
Student: true

let name = "Sarah";
let age = 25;
let isStudent = true;
console.log(`${name} is ${age} years old. $Student ? {isStudent }`); 



//Question 3: Comments
console.log("Rewrite the code below to include:\n");
// Rewrite the code below to include:
// - A single-line comment above the first line
// - A multi-line comment explaining what the program does
// declare a variable score and assign it a value 

var score = 90;
console.log("Score is", score);
/* this program declares a variable score and assigns it a value of 90, 
then prints the score to the console.*/



//Question 4: Variables
console.log("Question 4: Variables \n");
// Declare two variables using let:
// - One should hold your city name as a string
// - One should hold your age as a number
// Then print both using a single console.log() statement.

let city = "Nairobi";
let age = 20;
console.log(`I live in ${city} and I am ${age} years old.`);


//Question 5: Data Types
console.log("Question 5: Data Types\n");
// Write a function identifyTypes() that declares 5 variables of different data types:
// - string
// - number
// - boolean
// - undefined
// - object
let name = "Mark"; // string
let age = 20; // number
let isonline = true; // boolean
let address; // undefined
let user= {Name:"Mark" } ; // object

//Question 6: Type Conversion
console.log("Question 6: Type Conversion\n");
// Declare a variable numStr = "123" (string)
// Convert it to a number and store in numVal
// Print both values and their types.
let numStr = "123"; // string
let numVal = Number(numStr); // convert to number
console.log(`numStr: ${numStr}, Type: ${typeof numStr}`);


//Question 7: Type Conversion
console.log("Question 7: Type Conversion\n");
// Start with a number score = 99
// Convert it to a string
// Print both values and their types
let score = 99; // number
let scoreStr = String(score); // convert to string
console.log(`score: ${score}, Type: ${typeof score}`);

//Question 8: Implicit Type Conversion
console.log("Question 8: Implicit Type Conversion\n");
// Write code that demonstrates JavaScript's implicit type conversion by adding a number and a string.
// Print the result and its type.

let result = 100 + "30"; // implicit type conversion
console.log(`Result: ${result}, Type: ${typeof result}`); // Result will be "10030" (string)


//Question 9: Use of 'use strict'
console.log("Question 9: Use of 'use strict'\n");
// Write a code snippet that uses 'use strict' mode.
// Inside it, try assigning a value to an undeclared variable and observe what happens (use
// console.log() to explain).
"use strict";
num = 106;// This will throw an error because 'num' is not declared
console.log("In strict mode, assigning a value to an undeclared variable throws an error.");



//Question 10: Reserved Keywords
console.log("Question 10: Reserved Keywords\n");

// Try declaring a variable with the name function.
// - Observe what happens and comment on the error.
// - Then, fix the issue by using a valid variable name
let function = "This is a reserved keyword"; // This will throw an error
console.log("Using 'function' as a variable name throws an error because it is a reserved keyword in JavaScript.");
let funcName = "This is a valid variable name"; // Fixed by using a different name