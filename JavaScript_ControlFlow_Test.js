// JavaScript Control Flow – Comprehensive Practical Test
// Coverage: if, else if, else, switch, for, while, do-while, break, continue, nested conditions, try-catch-finally

/*********************
 * Question 1: if, else if, else
 * Create a program that checks a number and prints:
 * - "Negative" if less than 0
 * - "Zero" if equal to 0
 * - "Positive" if greater than 0
 *********************/

// Your code here
let number = -5;
if (number < 0) {
    console.log("Negative");
} else if (number > 0){
    console.log("Positive");
} else
    console.log("Zero");


/*********************
 * Question 2: switch statement
 * Create a program that takes a day number (0 to 6) and prints the day of the week.
 * Use switch-case structure.
 *********************/

// Your code here
const day = 3;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
        case 1:
            console.log("Monday");
            break;
            case 2:
                console.log("Tuesday");
                break;
                case 3:
                    console.log("Wednesday");
                    break;
                    case 4:
                        console.log("Thursday");
                        break;
                        case 5:
                            console.log("Friday");
                            break;
                            case 6:
                                console.log("Saturday");
                                break;
                                }
/*********************
 * Question 3: for loop
 * Print all even numbers from 1 to 20 using a for loop.
 *********************/

// Your code here
let i = 1;
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
}

/*********************
 * Question 4: while loop
 * Print numbers from 10 to 1 in descending order using a while loop.
 *********************/

// Your code here
let x = 11;
while (x >= 2) {
    x--;
    console.log(x);
}
/*********************
 * Question 5: do-while loop
 * Create a do-while loop that prints numbers from 1 to 5.
 *********************/

// Your code here
var x = 0;
do {
    x++;
    console.log(x);
} while (x < 5);


/*********************
 * Question 6: break statement
 * Write a loop that prints numbers starting from 1. Break when the number reaches 7.
 *********************/

// Your code here
for (let num = 1; num < 10; num++) {

    if (num == 7) {
        break;
        }
        console.log(num);
    }
        
/*********************
 * Question 7: continue statement
 * Write a loop that prints numbers 1 to 10 but skips multiples of 3.
 *********************/

// Your code here

for (let i = 1; i <= 10; i++) {
    if(i % 3 == 0) {
        continue;
        
    }
    console.log(i);
}

/*********************
 * Question 8: nested conditions
 * Create a program that checks if a number is even and also checks if it is greater than 10.
 * Print appropriate messages based on the result.
 *********************/

// Your code here
var x = 12;
if (x % 2 == 0 && x > 10) {
    console.log("The number is even and greater than 10.");
    } else if (x % 2 == 0) {
        console.log("The number is even.");
        } else if (x > 10) {
            console.log("The number is greater than 10.");
            } else {
                console.log("The number is neither even nor greater than 10.");
                }

/*********************
 * Question 9: try-catch-finally
 * Create a try-catch-finally block where:
 * - The try block divides a number by a variable (which might be 0).
 * - The catch block prints an error message.
 * - The finally block prints "Completed operation."
 *********************/

// Your code here
var x = 10;
var y = 0;
try {
    var result = x / y;
    } catch (error) {
        console.log("Error: Division by zero is not allowed.", result);
        } finally {
            console.log("Completed operation.", result);
            }
        }