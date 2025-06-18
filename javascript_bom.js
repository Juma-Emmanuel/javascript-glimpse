// JavaScript BOM Test

/********* 1. window Object *********/
// Q: What will be the output of the following line?
console.log(window === this);
// The answer is true because in the global context, `this` refers to the global object, which is `window` in browsers.

/********* 2. Using alert from window *********/
// Q: Use the window object to display an alert with the message "Welcome to BOM".
const welcomeMessage = "Welcome to BOM";
window.alert(welcomeMessage);
// The code will display an alert box with the message "Welcome to BOM".

/********* 3. Accessing Document Title *********/
// Q: Write a line to log the current document’s title.
const currentTitle = document.title;
console.log(currentTitle);

/********* 4. Changing Document Title *********/
// Q: Write a line to change the document title to "New Title".
const newTitle = "New Title";
document.title = newTitle;
console.log(`Document title changed to: ${document.title}`);

/********* 5. screen Object *********/
// Q: Write a function to log the screen width and height.
const logScreenDimensions = () => {
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    console.log(`Screen Width: ${screenWidth}, Screen Height: ${screenHeight}`);
}
logScreenDimensions();

/********* 6. history Object - Length *********/
// Q: How can you check how many pages are in the session history stack?
const historyLength = history.length;
console.log(`Number of pages in session history: ${historyLength}`);
// The code will log the number of pages in the session history stack.

/********* 7. history Object - Back and Forward *********/
// Q: What does `history.back()` and `history.forward()` do?
const navigateBack = () => {
    history.back(); // Navigates to the previous page in the session history
    console.log("Navigated back to the previous page.");
}
// The code will navigate back to the previous page in the session history.
const navigateForward = () => {
    history.forward(); // Navigates to the next page in the session history
    console.log("Navigated forward to the next page.");
}
// The code will navigate forward to the next page in the session history.

/********* 8. navigator Object *********/
// Q: Write code to detect if the browser is online using the navigator object.
const checkOnlineStatus = () => {
    if (navigator.onLine) {
        console.log("The browser is online.");
    } else {
        console.log("The browser is offline.");
    }
}
checkOnlineStatus();

/********* 9. location Object - current URL *********/
// Q: Write a line to print the full current URL.
const currentURL = window.location.href;
console.log(`Current URL: ${currentURL}`);

/********* 10. location Object - redirect *********/
// Q: Redirect the browser to "https://www.mozilla.org".
const redirectToMozilla = () => {
    window.location.href = "https://www.mozilla.org";
    console.log("Redirecting to Mozilla...");
}
redirectToMozilla();

/********* 11. console Object - timing *********/
// Q: Measure the time taken to run a simple loop using console.time and console.timeEnd.
const measureLoopTime = () => {
    console.time("Loop Time");
    for (let i = 0; i < 1000000; i++) {
        // Simulating a loop
    }
    console.timeEnd("Loop Time");
}
measureLoopTime();

/********* 12. location Object - search params *********/
// Q: Write a script to get the value of a query parameter named "user" from the URL.
const getQuery = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const userParam = getQuery("user");
console.log(`Value of 'user' query parameter: ${userParam}`);

/********* 13. navigator Object - userAgent *********/
// Q: Write a line to print the browser's user agent string.
const userAgent = navigator.userAgent;
console.log(`User Agent: ${userAgent}`);

/********* 14. location.reload *********/
// Q: Write a line to reload the current page.
const reloadPage = () => {
    window.location.reload();
    console.log("Page reloaded.");
}
reloadPage();

/********* 15. BOM Integration *********/
// Q: Create a function that checks if the user is on a mobile screen, logs their user agent, and redirects them to "/mobile" if screen width is below 600px.
const userCheck = () => {
    if (screen.width < 600) {
        console.log("User is on a mobile screen.");
        console.log(`User Agent: ${navigator.userAgent}`);
        window.location.href = "/mobile"; // Redirect to mobile page
    } else {
        console.log("User is not on a mobile screen.");
    }
}
userCheck();
// The code checks if the user is on a mobile screen, logs their user agent, and redirects them to "/mobile" if the screen width is below 600px.
// The function will log the user agent and redirect if the condition is met.