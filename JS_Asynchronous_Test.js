// JavaScript Asynchronous Test

/********* 1. Asynchronous Nature *********/
// Q: What will be the output of this code?
console.log("Start"); // Output: Start
setTimeout(() => console.log("Middle"), 0); // Output: Middle this will be executed after the current call stack is cleared as it is a macrotask and will be executed after the synchronous code 
console.log("End"); // Output: End
// Final Output: Start, End, Middle

/********* 2. Callback Function *********/
// Q: Write a function 'greetUser' that accepts a username and a callback to display a greeting message.

    // Your code here
const greetUser = (username, callback) => {
    setTimeout(() => {
        const message = `Hello, ${username}!`;
        callback(message);
    }, 1000);
}
const displayMessage = (message) => {
    console.log(message);
}
greetUser("Alice", displayMessage); // After 1 second, logs: Hello, Alice!

/********* 3. Nested Callbacks (Callback Hell) *********/
// Q: Rewrite the following code using nested callbacks to simulate a login process.

function login(user, callback) {
    setTimeout(() => {
        console.log(user + " logged in");
        callback();
    }, 1000);
}
// Simulate a login process
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched"); // Simulate data fetching in 1 second
        callback();
    }, 1000);
}
function displayData() {
    console.log("Data displayed"); // Display the fetched data 
}
// Initial call
login("Alice", () => { // Login Alice
    fetchData(() => { // Fetch data after login
        displayData(); // Display the data after fetching
    });
}) // After 1 second, logs: Alice logged in
// After another second, logs: Data fetched
// Finally, logs: Data displayed


/********* 4. Promises Basics *********/
// Q: Create a promise named 'dataPromise' that resolves with "Data received" after 1 second.

    // Your code here
const dataPromise = new Promise((resolve) => {
    setTimeout(() => { 
        resolve("Data received");
    }, 1000);
    });
// Use the promise
dataPromise.then((data) => {
    console.log(data); // Logs: Data received after 1 second
}
);

/********* 5. Promise.then *********/
// Q: Use 'then' to print the result of 'dataPromise' from question 4.

/********* 6. Promise Chaining *********/
// Q: Chain multiple 'then' calls to transform a number through several steps.

    // Your code here
const numberPromise = new Promise((resolve) => {
    resolve(5); // Start with the number 5
});
numberPromise .then((num) => {
    return num * 2; // Step 1: Multiply by 2
}).then((num) => {
    return num + 3; // Step 2: Add 3
}).then((num) => {
    console.log("Final result:", num); // Final result: 13
});

/********* 7. Catching Errors *********/
// Q: Add catch to the following promise to handle errors.

Promise.reject("Something went wrong")
    // Your code here
const errorPromise = new Promise((resolve, reject) => {
    reject("Something went wrong");
});
errorPromise .catch((error) => {
    console.error("Error:", error); // Logs: Error: Something went wrong
});

/********* 8. Async/Await *********/
// Q: Rewrite the following code using async/await.

function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Fetched data"), 1000);
    });
}
// Your code here
async function getData() {
    try {
        const data = await fetchData();
        console.log(data); // Logs: Fetched data after 1 second
    } catch (error) {
        console.error("Error:", error);
    }
}

/********* 9. Microtasks vs Macrotasks *********/
// Q: What is the order of output here?
console.log("Script start"); // Output: Script start

Promise.resolve().then(() => console.log("Promise resolved")); // Output: Promise resolved (microtask queue)

setTimeout(() => console.log("Timeout"), 0); // Output: Timeout (macrotask queue)

console.log("Script end"); // Output: Script end 
// Final Output: Script start, Script end, Promise resolved, Timeout

/********* 10. Promisification *********/
// Q: Convert setTimeout into a promise-based function called delay(ms).

    // Your code here
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Delayed for ${ms} milliseconds`);
        }, ms);
    });
}
delay(2000).then((message) => {
    console.log(message); // Logs: Delayed for 2000 milliseconds after 2 seconds
});

/********* 11. Timing Events: setTimeout *********/
// Q: Write a code that logs "Hello after 2 seconds" using setTimeout
function hello() {
    setTimeout(() => {
        console.log("Hello after 2 seconds");
    }, 2000);
}
hello(); // After 2 seconds, logs: Hello after 2 seconds

/********* 12. Timing Events: setInterval *********/
// Q: Write a function that logs the current time every second, and stops after 5 seconds.
function logTime() {
    const intervalId = setInterval(() => {
        console.log(new Date().toLocaleTimeString());
    }, 1000);

    // Stop the interval after 5 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped logging time.");
    }, 5000);
}
logTime(); // Logs the current time every second for 5 seconds, then stops logging

/********* 13. Clear Interval *********/
// Q: Use clearInterval to stop the interval from question 12.

/********* 14. Concurrent Async Functions *********/
// Q: Call two async functions concurrently and print their result when both complete.
function walking() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Walking completed");
        }, 2000);
    });
}
function running() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Running completed");
        }, 3000);
    });
}
// Call the functions concurrently
Promise.all([walking(), running()]).then((results) =>
    console.log("Both actions completed:", results)
);
