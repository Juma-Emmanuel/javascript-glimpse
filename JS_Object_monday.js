/*********************
 question:1 Create an object named person with properties name (set to "John"), age (set to 30), and city (set to "New York").
 *********************/

// Your code here
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person);

/*********************
 Question2: Given the object car = { brand: "Toyota", model: "Camry", year: 2020 }, how do you access the model property?
 *********************/

// Your code here
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(car.model); // Using dot notation
console.log(car["model"]); // Using bracket notation

/*********************
 Question3: Update the year property of the car object (from Q2) to 2022.
 *********************/

// Your code here
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
car.year = 2022; // Updating the year property
console.log(car.year); // Logs 2022
// or
car["year"] = 2022; // Using bracket notation to update the year property
console.log(car.year); // Logs 2022

/*********************
 Question4: Add a new property color with the value "red" to the car object.
 *********************/

// Your code here
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
car.color = "red"; // Adding a new property color
console.log(car.color); // Logs "red"

/*********************
 Question5: Delete the year property from the car object.
 *********************/

// Your code here
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
delete car.year;
console.log(car.year); // Logs undefined
console.log(car); // Logs { brand: "Toyota", model: "Camry"}

/*********************
 Question6: Add a method greet() to the person object (from Q1) that logs "Hello, my name is John".
 *********************/

// Your code here
const person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet(); // Logs "Hello, my name is John"
// or using arrow function
const person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: () => {
        console.log(`Hello, my name is ${person.name}`);
    }
};
person.greet(); // Logs "Hello, my name is John"

/*********************
 question7: Loop through the person object and log each key-value pair in the format "key: value".
 *********************/

// Your code here
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`${key}: ${person[key]}`);
    }
}

/*********************
 Question8: Use destructuring to extract name and age from the person object and log them.
 *********************/

// Your code here
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`); // Logs "Name: John, Age: 30"

/*********************
 Question9: Merge two objects obj1 = { a: 1, b: 2 } and obj2 = { c: 3, d: 4 } into a new object mergedObj.
 *********************/

// Your code here
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // Logs { a: 1, b: 2, c: 3, d: 4 }
