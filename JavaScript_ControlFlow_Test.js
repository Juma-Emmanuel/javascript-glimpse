// JavaScript Control Flow – Comprehensive Practical Test
// Coverage: if, else if, else, switch, for, while, do-while, break, continue, nested conditions, try-catch-finally

/*********************
 * Question 1: if, else if, else
 * Create a program that checks a number and prints:
 * - "Negative" if less than 0
 * - "Zero" if equal to 0
 * - "Positive" if greater than 0
 *********************/
let number = 0; // Example number{
    if (number < 0) {
        console.log("Negative");
    } else if (number > 0){
        console.log("Positive");
        
    } else  
    console.log("Zero");   

// Your code here

/*********************
 * Question 2: switch statement
 * Create a program that takes a day number (0 to 6) and prints the day of the week.
 * Use switch-case structure.
 *********************/

// Your code here
let day = 5; // 0-6, where 0 is Sunday and 6 is Saturday

switch (day) {
  case 0 :
    console.log("monday");
    break;
  case 1:
    console.log("Tuesday");
    break;
  case 2:
    console.log("Wednesday");
    break;
  case 3:
    console.log("Thursday");
    break;
  case 4:
    console.log("Friday");
    break;
  case 5:
    console.log("Saturday");
    break;
  case 6:
    console.log("Sunday");
    break;
}


/*********************
 * Question 3: for loop
 * Print all even numbers from 1 to 20 using a for loop.
 *********************/

// Your code here
const isEven = (10) => {
  return num % 2 === 0;
};
for (let i = 1; i <= 20; i++) {
  if (isEven(i)) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

/*********************
 * Question 4: while loop
 * Print numbers from 10 to 1 in descending order using a while loop.
 *********************/

// Your code here
let i=11;
while(i>1){
    i--;
    console.log(`countdown: ${i}`);
    }
  

/*********************
 * Question 5: do-while loop
 * Create a do-while loop that prints numbers from 1 to 5.
 *********************/

// Your code here
let count=1;
do {
  console.log("Count is: ",count);
  count++;
} while (count <= 5);


  



/*********************
 * Question 6: break statement
 * Write a loop that prints numbers starting from 1. Break when the number reaches 7.
 *********************/

// Your code here

for(let i = 1; i < 8; i++) {
    if(i==8) {
break;
    } 
    console.log(i);
  }
    


/*********************
 * Question 7: continue statement
 * Write a loop that prints numbers 1 to 10 but skips multiples of 3.
 *********************/

// Your code here
for(let j=1; j<=10; j++){
    if(j % 3=== 0) {
        continue; 
}
    console.log(j);
}

/*********************
 * Question 8: nested conditions
 * Create a program that checks if a number is even and also checks if it is greater than 10.
 * Print appropriate messages based on the result.
 *********************/

// Your code here
let number = 15;
if (number % 2 === 0) {
    if (number > 10) {
        console.log("The number is even and greater than 10");
    } else {
        console.log("The number is even but not greater than 10");
    }
} else {
    console.log("The number is odd");
}

/*********************
 * Question 9: try-catch-finally
 * Create a try-catch-finally block where:
 * - The try block divides a number by a variable (which might be 0).
 * - The catch block prints an error message.
 * - The finally block prints "Completed operation."
 *********************/

// Your code here