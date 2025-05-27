//Question 1: Correct Syntax
console.log("Fix the syntax errors in the following code:");

var name = "Ali";
console.log(name);



//Question 2: console.log()
console.log("Write code that logs the following output exactly as shown,Use console.log() only:\n");

<script>

const obj = {
Name= "Sarah",
Age= 25,
Student= "true",
};
console.log(obj);

</script>

//Question 3: Comments
console.log("Rewrite the code below to include:\n");
// Rewrite the code below to include:
// - A single-line comment above the first line
// - A multi-line
//  comment explaining what the program does

/* this is the single line comment */
var score = 90;
console.log("Score is", score);
/* The code first declares the score variable which is 90 */
/* The code then logs the score to the console */
/*The program is designed to calculate and display the score of a student in the console in short */


//Question 4: Variables
console.log("Question 4: Variables \n");
// Declare two variables using let:
// - One should hold your city name as a string
// - One should hold your age as a number
// Then print both using a single console.log() statement.
<script>
var obj = {
 name : 'Nairobi',
 age : 25,
};
console.log(obj);
</script>

//Question 5: Data Types
console.log("Question 5: Data Types\n");
// Write a function identifyTypes() that declares 5 variables of different data types:
// - string
// - number
// - boolean
// - undefined
// - object

function identifyTypes(){
    var str = "Hello";
    var num = 5;
    var bool = true;
    var undef;
    var obj = {
        name: "John",
        age: 30
        };
    }
//Question 6: Type Conversion
console.log("Question 6: Type Conversion\n");
// Declare a variable numStr = "123" (string)

const numStr = "123";

// Convert it to a number and store in numVal
const numVal = Number(numStr);

// Print both values and their types.
console.log(numVal, typeof numVal);

//Question 7: Type Conversion
console.log("Question 7: Type Conversion\n");
// Start with a number score = 99
// Convert it to a string
const score = 99;
const scoreStr = String(score);
// Print both values and their types
console.log(String(score), typeof String(score));

//Question 8: Implicit Type Conversion
console.log("Question 8: Implicit Type Conversion\n");
// Write code that demonstrates JavaScript's implicit type conversion by adding a number and a string.
let num = "75" + 20;

// Print the result and its type.
console.log(num, typeof(num));

//Question 9: Use of 'use strict'
console.log("Question 9: Use of 'use strict'\n");
// Write a code snippet that uses 'use strict' mode.
<script>
    "use strict";
    var x = 5;
    console.log(x);
</script>

// Inside it, try assigning a value to an undeclared variable and observe what happens (use
// console.log() to explain).

"use strict";
var x = 5;
console.log(x);// it prints 5 as it is declared in the code
y = 5;
console.log(y);// it brings an error that y is not defined as it is not declared anywhere in the code



//Question 10: Reserved Keywords
console.log("Question 10: Reserved Keywords\n");

// Try declaring a variable with the name function.
function x = 5;

// - Observe what happens and comment on the error.
function x = 5;
console.log(x); // it brings an error that function is a reserved keyword in JS and cannot be used as a variable name.

// - Then, fix the issue by using a valid variable name
var x = 5;
console.log(x); // it prints 5 as it is declared in the code and uses a valid variable name