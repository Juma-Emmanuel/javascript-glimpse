// JavaScript Objects – Comprehensive Practical Test

/*********************
 * Question 1:
 * Create an object named `car` with properties: make, model, year, and a method displayInfo that logs all info.
 *********************/

// Your code here
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    displayInfo: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
};
car.displayInfo(); // Output: Make: Toyota, Model: Camry, Year: 2020

/*********************
 * Question 2:
 * Access the model of the car object using both dot and bracket notation.
 *********************/

// Your code here
// Accessing model using dot and bracket notation
const carModelDot = car.model; // Accessing model using dot notation
const carModelBracket = car['model']; // Accessing model using bracket notation
console.log(carModelDot); // Output: Camry
console.log(carModelBracket); // Output: Camry

/*********************
 * Question 3:
 * Update the year of the car to the current year.
 *********************/

// Your code here
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    displayInfo: function() {
car.year = new Date().getFullYear();
console.log(car.year); // Output: The current year
// Update the year of the car to the current year
car.year = new Date().getFullYear();
console.log(car.year); // Output: The current year
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Blue', // Adding new property color
    displayInfo: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }
};
car.displayInfo(); // Output: Make: Toyota, Model: Camry, Year: 2020, Color: Blue

/*********************
 * Question 5:
 * Delete the model property from the car object.
// Adding new property color
car.color = 'Blue';
car.displayInfo = function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
};
car.displayInfo(); // Output: Make: Toyota, Model: Camry, Year: 2020, Color: Blue
    }
};
delete car.model; // Deleting the model property
car.displayInfo(); // Output: Make: Toyota, Model: undefined, Year: 2020, Color: Blue

/*********************
 * Question 6:
 * Create a nested object called `owner` inside car with properties: name and address.
 *********************/

// Your code here
// Deleting the model property
delete car.model;
car.displayInfo(); // Output: Make: Toyota, Model: undefined, Year: 2020, Color: Blue
        console.log(`Owner: ${this.owner.name}`);
        console.log(`Address: ${this.owner.address}`);
    }
};
car.displayInfo(); // Output: Make: Toyota, Model: Camry, Year: 2020, Color: Blue
car.owner.name; // Accessing owner's name
car.owner.address; // Accessing owner's address

/*********************
 * Question 7:
 * Loop through all properties of the car object using a for...in loop and log the keys and values.
 *********************/

// Your code here
const car = {
// Adding nested owner object
car.owner = {
    name: 'John Kinyanjui',
    address: '123 Main St, Westlands, Kenya'
};
car.displayInfo = function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    console.log(`Owner: ${this.owner.name}`);
    console.log(`Address: ${this.owner.address}`);
};
car.displayInfo(); // Output: Make: Toyota, Model: undefined, Year: 2020, Color: Blue
car.owner.name; // Accessing owner's name
car.owner.address; // Accessing owner's address
// Your code here
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Blue',
    owner: 'John Kinyanjui',
};
console.log(Object.keys(car)); // Output: ['make', 'model', 'year', 'color', 'owner']
console.log(Object.values(car)); // Output: ['Toyota', 'Camry', 2020, 'Blue', 'John Kinyanjui']
console.log(Object.entries(car)); // Output: [['make', 'Toyota'], ['model', 'Camry'], ['year', 2020], ['color', 'Blue'], ['owner', 'John Kinyanjui']]

// Loop through all properties of the car object
for (let key in car) {
    if (car.hasOwnProperty(key)) {
        console.log(`${key}: ${car[key]}`);
    }
}
Object.freeze(car); // Freezing the car object
car.year = 2021; // Attempting to modify the year property
console.log(car.year); // Output: 2020 (the year property remains unchanged as the object is frozen by Object.freeze() function and cannot be modified)
car.color = 'Red'; // Attempting to change the color property
console.log(car.color); // Output: Blue (the color property remains unchanged as the object is frozen by Object.freeze() function and cannot be modified)

/*********************
 * Question 10:
 * Use Object.seal() on a new object called `bike` and attempt to add and modify properties.
 *********************/

// Your code here
const bike = {
    make: 'Yamaha',
// Using Object.keys(), Object.values(), and Object.entries() on the car object
console.log(Object.keys(car)); // Output: ['make', 'model', 'year', 'color', 'owner']
console.log(Object.values(car)); // Output: ['Toyota', undefined, 2020, 'Blue', { name: 'John Kinyanjui', address: '123 Main St, Westlands, Kenya' }]
console.log(Object.entries(car)); // Output: [['make', 'Toyota'], ['model', undefined], ['year', 2020], ['color', 'Blue'], ['owner', { ... }]]
 * Question 11:
 * Create a constructor function for a Book that takes title, author, and year.
 * Add a method describe() to its prototype.
 *********************/

// Your code here
const Book = function(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
};
Book.prototype.describe = function() {
    console.log(`${this.title} by ${this.author}, published in ${this.year}`);
Object.freeze(car); // Freezing the car object
car.year = 2021; // Attempting to modify the year property
console.log(car.year); // Output: 2020 (the year property remains unchanged as the object is frozen by Object.freeze() function and cannot be modified)
car.color = 'Red'; // Attempting to change the color property
console.log(car.color); // Output: Blue (the color property remains unchanged as the object is frozen by Object.freeze() function and cannot be modified)
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const myDog = new Dog('Rex');
myDog.speak(); // Output: Rex barks.

/*********************
 * Question 13:
 * Use the spread operator to clone an object.
 *********************/

// Your code here
const originalCar = {
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    color: 'Red'
};
const clonedCar = { ...originalCar }; // Cloning the originalCar object using the spread operator
console.log(clonedCar); // Output: { make: 'Honda', model: 'Civic', year: 2019, color: 'Red' }

/*********************
 * Question 14:
 * Use destructuring to extract multiple properties from an object.
 *********************/

// Your code here
const person = {
    name: 'Alice',
    age: 30,
    city: 'Kitengela',
};
const { name, age, city } = person; // Destructuring to extract properties
console.log(name); // Output: Alice
console.log(age); // Output: 30

/*********************
 * Question 15:
 * Create a function that takes an object and uses object shorthand to return a new object.
 *********************/

// Your code here
function createPerson(name, age, city) {
    return { name, age, city }; // Using object shorthand to create a new object
}
const person = createPerson('Bob', 25, 'Nairobi');
console.log(person); // Output: { name: 'Bob', age: 25, city: 'Nairobi' }

/*********************
 * Question 16:
 * Demonstrate optional chaining and nullish coalescing with nested objects.
 *********************/

// Your code here
const user = {
    name: 'John Kinyanjui',
    address: {
        city: 'Nairobi',
        country: 'Kenya'
    }
};
const city = user.address?.city ?? 'Unknown City'; // Using optional chaining and nullish coalescing
console.log(city); // Output: Nairobi (if address exists) or Unknown City (if address is undefined or null)

const userWithoutAddress = {
    name: 'Jane wambui'
};
const cityWithoutAddress = userWithoutAddress.address?.city ?? 'Unknown City'; // Using optional chaining and nullish coalescing
console.log(cityWithoutAddress); // Output: Unknown City (since address is undefined)

/*********************
 * Question 17:
 * Dynamically add a method to an existing object and call it.
 *********************/

// Your code here
const person = {
    name: 'Alice',
    age: 30
};
person.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.

/*********************
 * Question 18:
 * Demonstrate the use of `this` inside an object method.
 *********************/

// Your code here
const person = {
    name: 'Alice',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // Using this to access properties of the object 
    }
};
person.greet(); // Output: Hello, my name is Alice and I am 30 years old. 

/*********************
 * Question 19:
 * Write a function that checks if a given key exists in an object using `in` and `hasOwnProperty`.
 *********************/

// Your code here
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};
function checkKey(obj, key) {
    if (key in obj) {
        console.log(`${key} exists in the object.`);
    } else {
        console.log(`${key} does not exist in the object.`);
    }

    if (obj.hasOwnProperty(key)) {
        console.log(`${key} is a direct property of the object.`);
    } else {
        console.log(`${key} is not a direct property of the object.`);
    }
}
checkKey(car, 'make'); // Output: make exists in the object. make is a direct property of the object.
checkKey(car, 'color'); // Output: color does not exist in the object. color is not a direct property of the object.
checkKey(car, 'toString'); // Output: toString exists in the object. toString is not a direct property of the object.

/*********************
 * Question 20:
 * Convert an object to a JSON string and then back to an object.
 *********************/

// Your code here
const person = {
    name: 'Alice',
    age: 30,
    city: 'Nairobi'
};
const jsonString = JSON.stringify(person); // Converting object to JSON string
const parsedObject = JSON.parse(jsonString); // Converting JSON string back to object
console.log(jsonString); // Output: {"name":"Alice","age":30,"city":"Nairobi"}
console.log(parsedObject); // Output: { name: 'Alice', age: 30, city: 'Nairobi' }
function checkKey(obj, key) {
    if (key in obj) {
        console.log(`${key} exists in the object.`);
    } else {
        console.log(`${key} does not exist in the object.`);
    }
    
    if (obj.hasOwnProperty(key)) {
        console.log(`${key} is a direct property of the object.`);
    } else {
        console.log(`${key} is not a direct property of the object.`);
    }
}
checkKey(car, 'make'); // Output: make exists in the object. make is a direct property of the object.
checkKey(car, 'color'); // Output: color does not exist in the object. color is not a direct property of the object.
checkKey(car, 'toString'); // Output: toString exists in the object. toString is not a direct property of the object.
