// JavaScript Asynchronous Test

/********* 1. Asynchronous Nature *********/
// Q: What will be the output of this code?
console.log("Start");
setTimeout(() => console.log("Middle"), 0);
console.log("End");

/********* 2. Callback Function *********/
// Q: Write a function 'greetUser' that accepts a username and a callback to display a greeting message.

function greetUser(username, callback) {
    // Your code here
}

/********* 3. Nested Callbacks (Callback Hell) *********/
// Q: Rewrite the following code using nested callbacks to simulate a login process.

function login(user, callback) {
    setTimeout(() => {
        console.log(user + " logged in");
        callback();
    }, 1000);
}

/********* 4. Promises Basics *********/
// Q: Create a promise named 'dataPromise' that resolves with "Data received" after 1 second.

const dataPromise = new Promise((resolve, reject) => {
    // Your code here
});

/********* 5. Promise.then *********/
// Q: Use 'then' to print the result of 'dataPromise' from question 4.

/********* 6. Promise Chaining *********/
// Q: Chain multiple 'then' calls to transform a number through several steps.

Promise.resolve(2)
    // Your code here
    .then(result => console.log("Final result:", result));

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

/********* 11. Timing Events: setTimeout *********/
// Q: Write a code that logs "Hello after 2 seconds" using setTimeout

/********* 12. Timing Events: setInterval *********/
// Q: Write a function that logs the current time every second, and stops after 5 seconds.

/********* 13. Clear Interval *********/
// Q: Use clearInterval to stop the interval from question 12.

/********* 14. Concurrent Async Functions *********/
// Q: Call two async functions concurrently and print their result when both complete.
