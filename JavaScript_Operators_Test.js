
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
    console.log(a - b); // Output: -10
    console.log(a * b); // Output: 200
    console.log(a / b); // Output: 0.5
    console.log(a % b); // Output: 10
    console.log(a ** 2); // Output: 100

    /*********************
     * Question 2: Assignment Operators (5 marks)
     * Create a variable and use the following assignment operators in sequence:
     * =, +=, -=, *=, /=, %=, **=
     * Print the value after each operation
     *********************/
    // Your code here
    let Marks=20;

    Marks+=10;// Marks is now 30
    console.log(Marks); // Output: 30

    Marks-=10; ; // Marks is now 20
    console.log(Marks);// Output: 20

    Marks*=2; // Marks is now 40
    console.log(Marks); // Output: 40

    Marks/=2; // Marks is now 20
    console.log(Marks); // Output: 20

    Marks%=3; // Marks is now 2 
    console.log(Marks); // Output: 2

    Marks **= 3; // Marks is now 8
    console.log(Marks); // Output: 8

    /*********************
     * Question 3: Comparison Operators (5 marks)
     * Write expressions to compare values using:
     * ==, ===, !=, !==, >, <, >=, <=
     * Use console.log() to print the result of each comparison
     *********************/
    // Your code here

    let y=30;
    let z=50;

    console.log(y == z); // return: false

    console.log(y > z); // return: false

    console.log(y < z); // return: true

    console.log(y >= z); // return: false

    console.log(y <= z); // return: true

    console.log(y != z); // return: true

    console.log(y === z); // return: false

    console.log(y !== z); // return: true


/*********************
 * Question 4: Logical Operators (5 marks)
 * Use logical AND (&&), OR (||), and NOT (!) to combine or negate boolean expressions.
 * Print the result of each case


 *********************/

// Your code here
let age= 20;
 let HasID = true;
 console.log(`${age>=20} && ${HasID}`) +"<br/>"; // true if age is 20 or older and has ID
console.log(`${age<20} || ${HasID}`) +"<br/>"; // true if age is less than 20 or has ID
console.log(`!(${age >= 20})`) + "<br/>"; // true if age is not 20 or older
console.log(`!(${HasID})`) +"<br/>"; // true if does not have ID

/*********************
 * Question 5: Bitwise Operators (5 marks)
 * Demonstrate the use of &, |, ^, ~, <<, >>, >>> using small numbers.
 * Print the binary representation and result for clarity.
 *********************/

// Your code here
let a=5; // 0101 in binary
let b=3; // 0011 in binary
console.log(`a & b: ${a & b}`); // 0001 in binary
console.log(`a | b: ${a | b}`); // 0111 in binary
console.log(`a ^ b: ${a ^ b}`); // 0110 in binary
console.log(`~a: ${~a}`); // Inverts bits of a
console.log(`a << b: ${a << b}`); // Left shift by b (multiply by 2)
console.log(`a >> b: ${a >> b}`); // Right shift by b (divide by 2)
console.log(`a >>> b: ${a >>> b}`); // Unsigned right shift by b

/*********************
 * Question 6: Ternary Operator (5 marks)
 * Use the ternary operator to print "Adult" if age >= 18, otherwise "Minor".
 *********************/

// Your code here
function checkAge(age) {
    return age>=25 ? "Adult":"Teen"
}
console.log(checkAge(28)); // Output: "Adult"
console.log(checkAge(15)); // Output: "Teen"


/*********************
 * Question 7: Type Operators (5 marks)
 * Use typeof and instanceof to demonstrate how to check data types and object inheritance.
 *********************/

// Your code here
function Car(make) {
    this.make = make;
    
}
function BMW(make, model) {
    Car.call(this, make);
    this.model = model;

}
BMW.prototype = Object.create(Car.prototype);
BMW.prototype.constructor = BMW;

let myBMW= new BMW("BMW", "X5");
console.log(myBMW.model); // Output: "object"

console.log(myBMW instanceof BMW); // Output: true
console.log(myBMW instanceof Car); // Output: true
console.log(typeof BMW); // Output: "object"



/*********************
 * Question 8: Operator Precedence (5 marks)
 * Write a complex expression that mixes arithmetic, logical, and comparison operators.
 * Add parentheses to clarify the order of operations and explain the result in a comment.
 *********************/

// Your code here
let x=8;
let y=4;
let z=2;
let result=(x-y+z<10)&&(x%z==0) || (y*z>=10);
    console.log(result); // Output: true

