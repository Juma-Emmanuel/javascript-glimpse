/********* 1. DOM Events *********/
// Q: Add an onclick event to a button with id "clickBtn" that logs "Button clicked".
const clickBtn = document.getElementById("clickBtn");
clickBtn.onclick = function() {
    console.log("Button clicked");
}
/********* 2. addEventListener *********/
// Q: Add an event listener for "mouseover" to an element with id "hoverDiv".
document.getElementById("hoverDiv").addEventListener("mouseover", function() {
    console.log("Mouse over the div");
});

/********* 3. Mouse Events *********/
// Q: Log the coordinates (clientX, clientY) when user clicks anywhere on the page.
const logMouseCoordinates = (event) => {
    console.log(`Mouse clicked at: X=${event.clientX}, Y=${event.clientY}`);
}
document.addEventListener("click", logMouseCoordinates);

/********* 4. Keyboard Events *********/
// Q: Detect when the "Enter" key is pressed in an input field with id "textInput".
document.getElementById("textInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log("Enter key pressed");
    }
});

/********* 5. Form Events *********/
// Q: On form submission, prevent the default action and log the submitted values.
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission
    const formData = new FormData(event.target);
    const submittedValues = {};
    formData.forEach((value, key) => {
        submittedValues[key] = value;
    }
    );
    console.log("Form submitted with values:", submittedValues);
});

/********* 6. Input Events *********/
// Q: On every input in a textarea with id "liveInput", log the current value.
<div id="liveInputContainer">
<textarea id="liveInput" rows="4" cols="50"></textarea>
</div>
document.getElementById("liveInput").addEventListener("input", function() { 
    console.log("Current input value:", this.value);
}
);

/********* 7. Focus and Blur Events *********/
// Q: Change the background of an input to yellow on focus and back to white on blur.
<input type="text" id="focusInput" placeholder="Focus on me" />
const inputField = document.getElementById("focusInput");
inputField.addEventListener("focus", function() {
    this.style.backgroundColor = "yellow";
}
);
inputField.addEventListener("blur", function() {
    this.style.backgroundColor = "white";
}
);

/********* 8. Window Load Event *********/
// Q: Log "Page fully loaded" when the window has completely loaded.
const logPageLoad = () => {
    console.log("Page fully loaded");
    };
window.addEventListener("load", logPageLoad);

/********* 9. Window Resize Event *********/
// Q: Log the new width and height of the window when resized.
const logWindowResize = () => {
    console.log(`Window resized: Width=${window.innerWidth}, Height=${window.innerHeight}`);
}
window.addEventListener("resize", logWindowResize);

/********* 10. Scroll Event *********/
// Q: Log "Scrolling..." every time the user scrolls the page.
const logScroll = () => {
    console.log("Scrolling...");
}
window.addEventListener("scroll", logScroll);

/********* 11. Event Bubbling *********/
// Q: Create nested divs and attach a click event to both, log which element was clicked.
const outerDiv = document.createElement("div");
outerDiv.id = "outerDiv";
outerDiv.style.width = "200px";
outerDiv.style.height = "200px";    
outerDiv.style.backgroundColor = "lightblue";
outerDiv.innerHTML = "Outer Div (Click me)";
const innerDiv = document.createElement("div");
innerDiv.id = "innerDiv";
innerDiv.style.width = "100px";
innerDiv.style.height = "100px";
innerDiv.style.backgroundColor = "lightcoral";
innerDiv.innerHTML = "Inner Div (Click me)";
outerDiv.appendChild(innerDiv);
document.body.appendChild(outerDiv);
outerDiv.addEventListener("click", function() {
    console.log("Outer Div clicked");
});
innerDiv.addEventListener("click", function(event) {
    console.log("Inner Div clicked");
    // Prevent event bubbling
    event.stopPropagation();
});

/********* 12. Event Capturing *********/
// Q: Modify the above example to use capture phase for the outer div.
const outerDivCapture = document.getElementById("outerDiv");
outerDivCapture.addEventListener("click", function() {
    console.log("Outer Div clicked in capture phase");
}
, true); // true for capture phase

/********* 13. Stop Propagation *********/
// Q: Prevent inner div's click event from bubbling to the outer div.
const innerDivStopPropagation = document.getElementById("innerDiv");
innerDivStopPropagation.addEventListener("click", function(event) {
    console.log("Inner Div clicked, stopping propagation");
    event.stopPropagation(); // Prevents the event from bubbling up to the outer div
});

/********* 14. Event Delegation *********/
// Q: Attach a single event listener to a UL and log the clicked LI item text.
<ul id="itemList">  
    <li> BMW </li>
    <li> AUDI </li>
    <li> TOYOTA </li>
</ul>
//log the clicked LI item text
document.querySelectorAll('#itemList li').forEach(function(item) {
    item.addEventListener('click', function() {
        console.log('Clicked on:', this.textContent);
    });
});
//log the clicked LI item text
document.querySelectorAll('#itemList li').forEach(function(item) {
    item.addEventListener('dblclick', function() {
        console.log('Double clicked on:', this.textContent);
    });
});
document.querySelectorAll('#itemList li').forEach(function(item) {
    item.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Prevent the context menu from appearing
        console.log('Right clicked on:', this.textContent);
    });
});


/********* 15. Custom Events *********/
// Q: Create and dispatch a custom event named "userLoggedIn" with user details.
const userLoggedInEvent = new CustomEvent("userLoggedIn", {
    detail: {
        username: "john_doe",
        email: "mimu@mail.com",
        timestamp: new Date()
    }
});
document.addEventListener("userLoggedIn", function(event) {
    console.log("User logged in:", event.detail);
});
document.dispatchEvent(userLoggedInEvent);

/********* 16. once Option in addEventListener *********/
// Q: Add an event listener that logs "Only once" the first time a button is clicked.
const onceBtn = document.getElementById("onceBtn");
onceBtn.addEventListener("click", function() {
    console.log("Only once");
});

/********* 17. Passive Event Listeners *********/
// Q: Add a scroll event listener using { passive: true }.
const passiveScrollListener = () => {
    console.log("Passive scroll event triggered");
};
window.addEventListener("scroll", passiveScrollListener, { passive: true });

/********* 18. Double Click Event *********/
// Q: Add a double-click listener to a div that toggles its background color.
const doubleClickDiv = document.getElementById("doubleClickDiv");
doubleClickDiv.addEventListener("dblclick", function() {
    this.style.backgroundColor = this.style.backgroundColor === "lightblue" ? "lightgreen" : "lightblue";
});

/********* 19. Context Menu Event *********/
// Q: Prevent right-click menu on an image with id "myImage".
const noRightClick = document.getElementById("myImage");
noRightClick.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    });

/********* 20. Clipboard Events *********/
// Q: Log the text being copied when user copies from an input field.
const copyInput = document.getElementById("copyInput");
copyInput.addEventListener("copy", function(event) {
    console.log("Copied text:", copyInput.value);
    });
