// JavaScript Web APIs - Comprehensive Practical Test

/********* 1. Web API Overview *********/
// Q: What is the purpose of the Web API in JavaScript?
//it provides a way for JavaScript to interact with the browser and perform tasks like making network requests, accessing storage, and manipulating the DOM.

/********* 2. History API - length *********/
// Q: How do you check how many entries are in the history stack?
const historyLength = window.history.length;
console.log(`History length: ${historyLength}`); // this will log the number of entries in the browser's history stack

/********* 3. History API - navigation *********/
// Q: Use history API to go back one step in history and then forward.
const goBack = () => {
    window.history.back(); // Go back one step in history
    console.log("Went back in history");
};
const goForward = () => {
    window.history.forward(); // Go forward one step in history

    console.log("Went forward in history");
};

goBack(); // Call this function to go back
// goForward(); // Call this function to go forward
//  You can't call goForward() after goBack() because there's no previous history

/********* 4. History API - pushState *********/
// Q: Push a new state to history with URL `/profile` and log the state when popped.
const pushState = () => {
    const state = { user: "John" };
    const title = "Profile Page";
    const url = "/profile";
    window.history.pushState(state, title, url); // Push new state to history
    console.log(`Pushed state: ${JSON.stringify(state)}, URL: ${url}`);
};
pushState(); // Call this function to push a new state

/********* 5. localStorage API - basic usage *********/
// Q: Store "username=John" in localStorage and retrieve it.
const storeUsername = () => {
    localStorage.setItem("username", "John"); // Store username in localStorage
    console.log("Stored username in localStorage");
};
const retrieveUsername = () => {
    const username = localStorage.getItem("username"); // Retrieve username from localStorage
    if (username) {
        console.log(`Retrieved username: ${username}`); // Log the retrieved username
    } else {
        console.log("Username not found in localStorage");
    }
};
const clearUsername = () => {
    localStorage.removeItem("username"); // Remove username from localStorage
    console.log("Removed username from localStorage");
};
// Call these functions to store, retrieve, and clear the username
storeUsername();
clearUsername(); // Call this function to clear the username
storeUsername(); // Call this function to store the username
retrieveUsername(); // Call this function to retrieve the username

/********* 6. localStorage API - remove *********/
// Q: Remove "username" from localStorage.

/********* 7. sessionStorage API *********/
// Q: Save a value to sessionStorage and retrieve it after refresh (manually).
const storeSessionData = () => {
    sessionStorage.setItem("sessionData", "This is session data"); // Store data in sessionStorage
    console.log("Stored session data in sessionStorage");
};
const retrieveSessionData = () => {
    const sessionData = sessionStorage.getItem("sessionData"); // Retrieve data from sessionStorage
    if (sessionData) {
        console.log(`Retrieved session data: ${sessionData}`); // Log the retrieved session data
    } else {
        console.log("Session data not found in sessionStorage");
    }
};
// Call these functions to store and retrieve session data
storeSessionData(); // Call this function to store session data
retrieveSessionData(); // Call this function to retrieve session data

/********* 8. Storage API - clearing *********/
// Q: Write code to clear all storage data (both localStorage and sessionStorage).
const clearAllStorage = () => {
    localStorage.clear(); // Clear all data from localStorage
    console.log("Cleared all data from localStorage");
    sessionStorage.clear(); // Clear all data from sessionStorage
    console.log("Cleared all data from sessionStorage");
};
// Call this function to clear all storage data
clearAllStorage(); // Call this function to clear all storage data

/********* 9. Forms API - basic usage *********/
// Q: Access a form with id "contactForm" and get the value of input with name "email".
// The following code assumes there is a form with id "contactForm" and an input with name "email" in your HTML.
const getEmailValue = () => {
    const form = document.getElementById("contactForm"); // Get the form by id
    const emailInput = form ? form.elements.email : null; // Get the input element by name
    if (emailInput) {
        const emailValue = emailInput.value; // Get the value of the input
        console.log(`Email value: ${emailValue}`); // Log the email value
    } else {
        console.log("Email input not found in the form");
    }
};
/********* 10. Forms API - check validity *********/
// Q: Use the constraint validation API to check if a required input is valid.
const checkFormValidity = () => {
    const form = document.getElementById("contactForm"); // Get the form by id
    if (form) {
        const emailInput = form.elements.email; // Get the input element by name
        if (emailInput) {
            if (emailInput.checkValidity()) { // Check if the input is valid
                console.log("Email input is valid");
            } else {
                console.log("Email input is invalid");
            }
        } else {
            console.log("Email input not found in the form");
        }
    } else {
        console.log("Form not found");
    }
};

/********* 11. Forms API - prevent default *********/
// Q: Prevent default form submission and show alert instead.
const preventFormSubmission = (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert("Form submission prevented!"); // Show an alert instead
};
// Call this function when the form is submitted
document.getElementById("contactForm").addEventListener("submit", preventFormSubmission);

/********* 12. Fetch API - GET *********/
// Q: Use Fetch API to make a GET request to "https://jsonplaceholder.typicode.com/posts".
const getPosts = async () =>
{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts"); // Make a GET request
        if (!response.ok) { // Check if the response is ok
            throw new Error("HTTP error! status:" + response.status); // Throw an error if not ok
        }
        const data = await response.json(); // Parse the JSON response
        console.log(data); // Log the data
    } catch (error) {
        console.error("Fetch error:", error); // Log any errors
    }
}
getPosts(); // Call this function to fetch posts

/********* 13. Fetch API - POST *********/
// Q: Make a POST request using fetch with JSON body: { "name": "John" }.
const postRequest = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // Set the method to POST
            headers: {
                "Content-Type": "application/json" // Set the Content-Type header
            },
            body: JSON.stringify({ name: "John" }) // Convert the body to JSON
        });
        if (!response.ok) { // Check if the response is ok
            throw new Error("HTTP error! status:" + response.status); // Throw an error if not ok
        }
        const data = await response.json(); // Parse the JSON response
        console.log("POST response data:", data); // Log the response data
    } catch (error) {
        console.error("Fetch error:", error); // Log any errors
    }
};
postRequest(); // Call this function to make a POST request

/********* 14. Fetch API - error handling *********/
// Q: Add try/catch and status check for fetch request errors.
const errorHandling = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/9999"); // Make a request to a non-existent resource
        if (!response.ok) { // Check if the response is ok
            throw new Error("HTTP error! status:" + response.status); // Throw an error if not ok
        }
        const data = await response.json(); // Parse the JSON response
        console.log("Data:", data); // Log the data
    } catch (error) {
        console.error("Fetch error:", error); // Log any errors
    }
};
errorHandling(); // Call this function to demonstrate error handling in fetch

/********* 15. Fetch API - headers *********/
// Q: Add custom headers (Content-Type: application/json) to fetch request.
const appHeaders = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET", // Set the method to GET
            headers: {
                "Content-Type": "application/json", // Set the Content-Type header
                "Custom-Header": "MyCustomHeaderValue" // Add a custom header
            }
        });
        if (!response.ok) { // Check if the response is ok
            throw new Error("HTTP error! status:" + response.status); // Throw an error if not ok
        }   
        const data = await response.json(); // Parse the JSON response
        console.log("Data with custom headers:", data); // Log the data
    }
    catch (error) {
        console.error("Fetch error:", error); // Log any errors
    }
};
appHeaders(); // Call this function to make a request with custom headers   

/********* 16. Geolocation API - get current position *********/
// Q: Use Geolocation API to get user’s coordinates and display them.
const geoPosition = () => {
    if (navigator.geolocation) { // Check if geolocation is supported
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords = position.coords; // Get the coordinates
                console.log(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`); // Log the coordinates
            },
            (error) => {
                console.error("Geolocation error:", error); // Log any errors
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser."); // Log if geolocation is not supported
    }
};
geoPosition(); // Call this function to get the current position

/********* 17. Geolocation API - error handling *********/
// Q: Add error handling to geolocation request.
const geoErrorHandling = () => {
    if (navigator.geolocation) { // Check if geolocation is supported
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const coords = position.coords; // Get the coordinates
                console.log(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`); // Log the coordinates
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.error("User denied the request for Geolocation."); // Handle permission denied error
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error("Location information is unavailable."); // Handle position unavailable error
                        break;
                    case error.TIMEOUT:
                        console.error("The request to get user location timed out."); // Handle timeout error
                        break;
                    case error.UNKNOWN_ERROR:
                        console.error("An unknown error occurred."); // Handle unknown error
                        break;
                }
            }
        );
    } else {
        console.log("Geolocation is not supported by this browser."); // Log if geolocation is not supported
    }
};
geoErrorHandling(); // Call this function to demonstrate error handling in geolocation

/********* 18. Web Workers - basic *********/
// Q: Create a worker and use it to send a message from main thread.
const worker = new Worker("worker.js"); // Create a new worker from worker.js
worker.onmessage = (event) => {
    console.log("Message from worker:", event.data); // Log the message received from the worker
}
worker.postMessage("Hello Worker!"); // Send a message to the worker
// The worker.js file should handle the message and send a response back to the main thread
// worker.js
// self.onmessage = (event) => {
//     console.log("Message from main thread:", event.data); // Log the message received from the main thread
//     self.postMessage("Hello Main Thread!"); // Send a response back to the main
// };

/********* 19. Web Workers - file *********/
// Q: Write the content for a worker.js that returns square of number sent from main thread.
const workerContent = `self.onmessage = (event) => {
    const number = event.data; // Get the number sent from the main thread
    const square = number * number; // Calculate the square of the number
    self.postMessage(square); // Send the square back to the main thread
};`;
// Create a Blob from the worker content
const blob = new Blob([workerContent], { type: "application/javascript" }); // Create a Blob with the worker content
const workerBlob = URL.createObjectURL(blob); // Create a URL for the Blob
const workerFromBlob = new Worker(workerBlob); // Create a new worker from the Blob URL
workerFromBlob.onmessage = (event) => { 
    console.log("Square from worker:", event.data); // Log the square received from the worker
}
workerFromBlob.postMessage(5); // Send a number to the worker to calculate its square
// The worker will respond with the square of the number sent

/********* 20. Web Workers - termination *********/
// Q: Terminate the worker once a message is received.
const terminateWorker = () => {
    workerFromBlob.terminate(); // Terminate the worker
    console.log("Worker terminated"); // Log that the worker has been terminated
};
// Call this function to terminate the worker
terminateWorker(); // Call this function to terminate the worker

/********* 21. IndexedDB - open database *********/
// Q: Open a database named "TestDB" with version 1.
const openDatabase = () => {
    const request = indexedDB.open("TestDB", 1); // Open a database named "TestDB" with version 1
    request.onupgradeneeded = (event) => {
        const db = event.target.result; // Get the database instance
        console.log("Database opened or upgraded:", db); // Log the database instance
    }
};
openDatabase(); // Call this function to open the database

/********* 22. IndexedDB - create object store *********/
// Q: On upgrade needed, create object store "users" with keyPath "id".
const createObjectStore = () => {
    const request = indexedDB.open("TestDB", 1); // Open the database
    request.onupgradeneeded = (event) => {
        const db = event.target.result; // Get the database instance
        if (!db.objectStoreNames.contains("users")) { // Check if the object store already exists
            const objectStore = db.createObjectStore("users", { keyPath: "id" }); // Create an object store named "users" with keyPath "id"
            console.log("Object store 'users' created:", objectStore); // Log the created object store
        } else {
            console.log("Object store 'users' already exists"); // Log if the object store already exists
        }
    };
    request.onsuccess = () => {
        console.log("Database opened successfully"); // Log success message when the database is opened
    }
};
createObjectStore(); // Call this function to create the object store

/********* 23. IndexedDB - add data *********/
// Q: Add a user object { id: 1, name: "Alice" } to the "users" store.
const userObject = { id: 1, name: "Alice" }; // User object to be added
const addUser = () => {
    const request = indexedDB.open("TestDB", 1); // Open the database
    request.onsuccess = (event) => {
        const db = event.target.result; // Get the database instance
        const transaction = db.transaction("users", "readwrite"); // Start a transaction on the "users" object store
        const objectStore = transaction.objectStore("users"); // Get the object store
        const addRequest = objectStore.add(userObject); // Add the user object to the object store
        addRequest.onsuccess = () => {
            console.log("User added successfully:", userObject); // Log success message when user is added
        };
        addRequest.onerror = (error) => {
            console.error("Error adding user:", error); // Log any errors that occur while adding the user
        };
    };
};
addUser(); // Call this function to add the user object

/********* 24. IndexedDB - read data *********/
// Q: Read back the user data by id=1.
const readUser = (id) => {
    const request = indexedDB.open("TestDB", 1); // Open the database
    request.onsuccess = (event) => {
        const db = event.target.result; // Get the database instance
        const transaction = db.transaction("users", "readonly"); // Start a read-only transaction on the "users" object store
        const objectStore = transaction.objectStore("users"); // Get the object store
        const getRequest = objectStore.get(id); // Get the user by id
        getRequest.onsuccess = (event) => {
            const user = event.target.result; // Get the result from the request
            if (user) {
                console.log("User found:", user); // Log the user data if found
            } else {
                console.log("User not found with id:", id); // Log if no user is found with the given id
            }
        };
        getRequest.onerror = (error) => {
            console.error("Error reading user:", error); // Log any errors that occur while reading the user
        };
    };
};
readUser(1); // Call this function to read the user data by id=1

/********* 25. File API - upload event *********/
// Q: Get the selected file from an `<input type="file">` element.
const handleFileUpload = (event) => {
    const fileInput = event.target; // Get the file input element
    const files = fileInput.files; // Get the list of selected files
    if (files.length > 0) {
        const file = files[0]; // Get the first selected file
        console.log("Selected file:", file);
    } else {
        console.log("No file selected"); // Log if no file is selected
    }
};
// Add an event listener to the file input element
document.getElementById("fileInput").addEventListener("change", handleFileUpload);


/********* 26. Clipboard API - copy *********/
// Q: Copy "Hello Clipboard" to the system clipboard.
const copyToClipboard = async () => {
    try {
        await navigator.clipboard.writeText("Hello Clipboard"); // Copy text to clipboard
        console.log("Text copied to clipboard successfully!"); // Log success message
    }
    catch (error) {
        console.error("Failed to copy text to clipboard:", error); // Log any errors that occur
    }
};
copyToClipboard(); // Call this function to copy text to clipboard

/********* 27. Clipboard API - read *********/
// Q: Read text from the clipboard and log it.
const readFromClipboard = async () => {
    try {
        const text = await navigator.clipboard.readText(); // Read text from clipboard
        console.log("Text read from clipboard:", text); // Log the text read from clipboard
    }
    catch (error) {
        console.error("Failed to read text from clipboard:", error); // Log any errors that occur
    }
};
readFromClipboard(); // Call this function to read text from clipboard

/********* 28. Notification API - permission *********/
// Q: Ask for permission and show a notification "Welcome!" if granted.
const showNotification = async () => {
    try {
        const permission = await Notification.requestPermission(); // Request notification permission
        if (permission === "granted") { // Check if permission is granted
            new Notification("Welcome!"); // Show a notification with the message "Welcome!"
            console.log("Notification shown successfully!"); // Log success message
        } else {
            console.log("Notification permission denied"); // Log if permission is denied
        }
    }
    catch (error) {
        console.error("Failed to show notification:", error); // Log any errors that occur
    }
};
showNotification(); // Call this function to show the notification

/********* 29. Notification API - options *********/
// Q: Create a notification with icon and body text.
const showCustomNotification = async () => {
    try {
        const permission = await Notification.requestPermission(); // Request notification permission
        if (permission === "granted") { // Check if permission is granted
            const options = {
                body: "This is a custom notification body", // Set the body text
                icon: "https://example.com/icon.png" // Set the icon URL
            };
            new Notification("Custom Notification", options); // Show a notification with custom options
            console.log("Custom notification shown successfully!"); // Log success message
        } else {
            console.log("Notification permission denied"); // Log if permission is denied
        }
    }
    catch (error) {
        console.error("Failed to show custom notification:", error); // Log any errors that occur
    }
};
showCustomNotification(); // Call this function to show the custom notification

/********* 30. Fullscreen API *********/
// Q: Make an element with id "videoContainer" go fullscreen.
const goFullscreen = () => {
    const videoContainer = document.getElementById("videoContainer"); // Get the element to make fullscreen
    if (videoContainer) {
        if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen(); // Request fullscreen mode
        } else if (videoContainer.mozRequestFullScreen) { // Firefox
            videoContainer.mozRequestFullScreen();
        } else if (videoContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
            videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) { // IE/Edge
            videoContainer.msRequestFullscreen();
        }
        console.log("Entered fullscreen mode"); // Log success message
    } else {
        console.log("Element with id 'videoContainer' not found"); // Log if the element is not found
    }
};
goFullscreen(); // Call this function to make the element go fullscreen
/********* 31. Drag and Drop API *********/
// Q: Make an element draggable and log when it's dropped.
const makeDraggable = () => {
    const draggableElement = document.getElementById("draggableElement"); // Get the element to make draggable
    if (draggableElement) {
        draggableElement.setAttribute("draggable", "true"); // Set the draggable attribute
        draggableElement.ondragstart = (event) => {
            event.dataTransfer.setData("text/plain", event.target.id); // Set data to be transferred
            console.log("Drag started for:", event.target.id); // Log when drag starts
        };
        draggableElement.ondrop = (event) => {
            event.preventDefault(); // Prevent default behavior
            const data = event.dataTransfer.getData("text/plain"); // Get the transferred data
            console.log("Dropped element:", data); // Log when the element is dropped
        };
        draggableElement.ondragover = (event) => {
            event.preventDefault(); // Prevent default behavior to allow drop
        };
    } else {
        console.log("Element with id 'draggableElement' not found"); // Log if the element is not found
    }
};
makeDraggable(); // Call this function to make the element draggable

/********* 32. Speech Recognition API *********/
// Q: Start speech recognition and log the transcribed result.
const speechRecognition = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)(); // Create a new SpeechRecognition instance
    recognition.lang = "en-US"; // Set the language
    recognition.interimResults = false; // Disable interim results
    recognition.maxAlternatives = 1; // Set maximum alternatives to 1

    recognition.onstart = () => {
        console.log("Speech recognition started"); // Log when speech recognition starts
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // Get the transcribed text
        console.log("Transcribed result:", transcript); // Log the transcribed result
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error); // Log any errors that occur
    };

    recognition.onend = () => {
        console.log("Speech recognition ended"); // Log when speech recognition ends
    };

    recognition.start(); // Start speech recognition
};
speechRecognition(); // Call this function to start speech recognition

/********* 33. Vibration API *********/
// Q: Make the device vibrate for 300ms.
const vibrateDevice = () => {
    if ("vibrate" in navigator) { // Check if the Vibration API is supported
        navigator.vibrate(300); // Vibrate the device for 300 milliseconds
        console.log("Device vibrated for 300ms"); // Log success message
    } else {
        console.log("Vibration API is not supported by this browser"); // Log if the Vibration API is not supported
    }
};
vibrateDevice(); // Call this function to vibrate the device

/********* 34. Device Orientation API *********/
// Q: Log device’s orientation (alpha, beta, gamma) when available.
const logDeviceOrientation = () => {
    if (window.DeviceOrientationEvent) { // Check if Device Orientation API is supported
        window.addEventListener("deviceorientation", (event) => {
            const alpha = event.alpha; // Get the alpha value
            const beta = event.beta; // Get the beta value
            const gamma = event.gamma; // Get the gamma value
            console.log(`Device Orientation - Alpha: ${alpha}, Beta: ${beta}, Gamma: ${gamma}`); // Log the orientation values
        });
    } else {
        console.log("Device Orientation API is not supported by this browser"); // Log if the Device Orientation API is not supported
    }
};
logDeviceOrientation(); // Call this function to log device orientation

/********* 35. Network Information API *********/
// Q: Check the type of network connection (e.g. wifi, 4g).
const checkNetworkConnection = () => {
    if ("connection" in navigator) { // Check if the Network Information API is supported
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection; // Get the connection object
        console.log(`Network Type: ${connection.type}`); // Log the type of network connection
        console.log(`Effective Connection Type: ${connection.effectiveType}`); // Log the effective connection type
    } else {
        console.log("Network Information API is not supported by this browser"); // Log if the Network Information API is not supported
    }
}
checkNetworkConnection(); // Call this function to check the network connection type
