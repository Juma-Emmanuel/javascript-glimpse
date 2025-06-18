// JavaScript Asynchronous Test

/********* 1. Asynchronous Nature *********/
// Q: What will be the output of this code?
console.log("Start");
setTimeout(() => console.log("Middle"), 0);
console.log("End");

Start
End
Middle

/********* 2. Callback Function *********/
// Q: Write a function 'greetUser' that accepts a username and a callback to display a greeting message.

function greetUser(username, callback) {
    // Your code here
}function greetUser(username, callback) {
  const message = `Hello, ${username}!`;
  callback(message);
}

// Example usage:
greetUser("Ali", function(greeting) {
  console.log(greeting); // Output: Hello, Ali!
});


/********* 3. Nested Callbacks (Callback Hell) *********/
// Q: Rewrite the following code using nested callbacks to simulate a login process.

function login(user, callback) {
    setTimeout(() => {
        console.log(user + " logged in");
        callback();
    }, 1000);
}

function greetUser(username, callback) {
  const message = `Hello, ${username}!`;
  callback(message);
}

// Example usage:
greetUser("Glory", function(greeting) {
  console.log(greeting); // Output: Hello, Glory!
});

/********* 4. Promises Basics *********/
// Q: Create a promise named 'dataPromise' that resolves with "Data received" after 1 second.

const dataPromise = new Promise((resolve, reject) => {
    // Your code here
    setTimeout(() => {
        resolve("Data received");
    }, 1000);

});

dataPromise.then((message) => {
    console.log(message); // Output: Data received
});

/********* 5. Promise.then *********/
// Q: Use 'then' to print the result of 'dataPromise' from question 4.
const dataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data received");
  }, 1000);
});

// Use `.then()` to print the result
dataPromise.then((result) => {
  console.log(result); // Output after 1 second: Data received
});
/********* 6. Promise Chaining *********/
// Q: Chain multiple 'then' calls to transform a number through several steps.

Promise.resolve(2)
    // Your code here
    .then(numb => console.log("Final result:",numb)) // Initial value: 2));
Promise.resolve(2)  
  .then(num => {
    console.log("Initial:", num);
    return num * 3; // 2 * 3 = 6
  })
  .then(num => {
    console.log("After multiplying by 3:", num);
    return num + 4; // 6 + 4 = 10
  })
  .then(num => {
    console.log("After adding 4:", num);
    return num - 1; // 10 - 1 = 9
  })
  .then(num => {
    console.log("Final result:", num); // Final result: 9
  });

/********* 7. Catching Errors *********/
// Q: Add catch to the following promise to handle errors.

Promise.reject("Something went wrong")
    // Your code here

/********* 8. Async/Await *********/
// Q: Rewrite the following code using async/await.

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Fetched data"), 1000);
    });
}

/********* 9. Microtasks vs Macrotasks *********/
// Q: What is the order of output here?
console.log("Script start");

Promise.resolve().then(() => console.log("Promise resolved"));

setTimeout(() => console.log("Timeout"), 0);

console.log("Script end");

/********* 10. Promisification *********/
// Q: Convert setTimeout into a promise-based function called delay(ms).

function delay(ms) {
    // Your code here
}
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Example usage:
delay(2000).then(() => {
  console.log("Executed after 2 seconds");
});
/********* 11. Timing Events: setTimeout *********/
// Q: Write a code that logs "Hello after 2 seconds" using setTimeout
etTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
/********* 12. Timing Events: setInterval *********/
// Q: Write a function that logs the current time every second, and stops after 5 seconds.
let count = 0;
const intervalId = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
  count++;
  if (count === 5) {
    clearInterval(intervalId); // Stops after 5 times
  }
}, 1000);
/********* 13. Clear Interval *********/
// Q: Use clearInterval to stop the interval from question 12.
let count = 0;

// Start the interval
const intervalId = setInterval(() => {
  console.log(new Date().toLocaleTimeString()); // Log current time
  count++;

  // Stop after 5 times
  if (count === 5) {
    clearInterval(intervalId); // Clear the interval
    console.log("Stopped logging after 5 seconds");
  }
}, 1000);

/********* 14. Concurrent Async Functions *********/
// Q: Call two async functions concurrently and print their result when both complete.
function asyncTask1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Result from Task 1"), 1500);
  });
}

function asyncTask2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Result from Task 2"), 1000);
  });
}

// Run both concurrently and log when both complete
Promise.all([asyncTask1(), asyncTask2()]).then(results => {
  console.log("Both tasks done:");
  console.log(results[0]);
  console.log(results[1]);
});