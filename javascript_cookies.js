// JavaScript Cookies Test

/********* 1. Setting a Basic Cookie *********/
// Q: Write a JavaScript line to set a cookie named "username" with the value "john".
const person = "john";
document.cookie = `username=${person}`;

/********* 2. Reading Cookies *********/
// Q: Write a function `getCookie(name)` that retrieves the value of a specific cookie.
document.cookie = "username=john"; // Ensure the cookie is set for testing
const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null; // Return null if the cookie does not exist
}
const username = getCookie('username');
console.log(username); // Should log "john" if the cookie is set correctly

/********* 3. Cookie with Expires Attribute *********/
// Q: Set a cookie named "session" with value "active" that expires in 7 days.
const session = "active";
const expires = new Date();
expires.setDate(expires.getDate() + 7);
document.cookie = `session=${session}; expires=${expires.toUTCString()}`;

/********* 4. Cookie with Max-Age Attribute *********/
// Q: Set a cookie "promo" with value "newUser" that expires after 2 hours using max-age.
const promo = "newUser";
document.cookie = `promo=${promo}; max-age=${2 * 60 * 60}`; // 2 hours in seconds

/********* 5. Cookie with Path Attribute *********/
// Q: Set a cookie "section" = "docs" available to the "/documentation" path only.
const section = "docs";
document.cookie = `section=${section}; path=/documentation`;

/********* 6. Cookie with Secure Attribute *********/
// Q: Write a cookie "token" = "abc123" that is only sent over HTTPS.
const token = "abc123";
document.cookie = `token=${token}; Secure`;

/********* 7. Cookie with Domain Attribute *********/
// Q: Set a cookie "sitePref" = "dark" that is valid for ".example.com" domain.
const sitePref = "dark";
document.cookie = `sitePref=${sitePref}; domain=.example.com`;

/********* 8. Update an Existing Cookie *********/
// Q: Update the "username" cookie's value to "emmanuel".
document.cookie = "username=John; path=/"; // Ensure the cookie is set for testing
const updateCookie = "emmanuel";
document.cookie = `username=${updateCookie}; path=/`; // Update the cookie value to "emmanuel"
document.cookie = `username=${updateCookie}`; // Update the cookie value to "emmanuel"
const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) {
            return value;
        }
    }
    return null; // Return null if the cookie does not exist
};
console.log(getCookie('username')); // Should log "emmanuel" if the cookie is updated correctly

/********* 9. Deleting a Cookie *********/
// Q: Write a JavaScript statement to delete a cookie named "session".
const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}
deleteCookie('session'); // Deletes the "session" cookie

/********* 10. Check if Cookie Exists *********/
// Q: Write a function that returns `true` if a cookie with a given name exists, otherwise `false`.
const exist = (name) => {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key] = cookie.split('=');
        if (key === name) {
            return true; // Cookie exists
        }
    }
    return false; // Cookie does not exist
}
// Example usage:
const cookieExists = exist('username'); // Should return true if "username" cookie exists
console.log(cookieExists); // Logs true or false based on the existence of the cookie
