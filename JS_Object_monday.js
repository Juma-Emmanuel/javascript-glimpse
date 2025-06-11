/*********************
 question:1 Create an object named person with properties name (set to "John"), age (set to 30), and city (set to "New York").
 *********************/

// Your code here
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
console.log(person); // Logging the person object to verify its properties

/*********************
 Question2: Given the object car = { brand: "Toyota", model: "Camry", year: 2020 }, how do you access the model property?
 *********************/

// Your code here
const car1 = {
  brand: "Toyota",
  model: "Spacio",
  year: 2021
};
console.log(car1.model); // Accessing the model property



/*********************
 Question3: Update the year property of the car object (from Q2) to 2022.
 *********************/

// Your code here
const car2 = {
  brand: "Toyota",
  model: "Spacio",
  year: 2021
};
car2.year = 2022; // Updating the year property
console.log(car2.year); // Logging the updated year property

/*********************
 Question4: Add a new property color with the value "red" to the car object.
 *********************/

// Your code here
const car3 = {
  brand: "Toyota",
  model: "Spacio",
  year: 2021
};
car3.color = "red"; // Adding a new property color
console.log(car3.color); // Logging the new color property

/*********************
 Question5: Delete the year property from the car object.
 *********************/

// Your code here
const car4 = {
  brand: "Toyota",
  model: "Spacio",
  year: 2021
};
delete car4.year; // Deleting the year property
console.log(car4); // Logging the car object after deletion
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

const person2 = {
  name: "Kendi",
  age: 30,
  city: "New York"
};
for (const key in person2) {
  if (person2.hasOwnProperty(key)) {
    console.log(`${key}: ${person2[key]}`);
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
const obj1 = {a: 3, b: 6};
const obj2 = {c: 9, d: 12};
const mergedObj = {...obj1, ...obj2};
console.log(mergedObj);