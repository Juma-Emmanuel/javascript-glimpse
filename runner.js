const person = {
    name: 'Alice',
    age: 30,
    city: 'Nairobi'
};
const jsonString = JSON.stringify(person); // Converting object to JSON string
const parsedObject = JSON.parse(jsonString); // Converting JSON string back to object
console.log(jsonString); // Output: {"name":"Alice","age":30,"city":"Nairobi"}
console.log(parsedObject);