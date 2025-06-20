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