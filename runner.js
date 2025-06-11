function login(user, callback) {
    setTimeout(() => {
        console.log(user + " logged in");
        callback();
    }, 1000);
}
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
})