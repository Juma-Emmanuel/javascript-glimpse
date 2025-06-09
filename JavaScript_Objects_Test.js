// JavaScript Objects – Comprehensive Practical Test

/*********************
 * Question 1:
 * Create an object named `car` with properties: make, model, year, and a method displayInfo that logs all info.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    displayInfo: function() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
};
car.displayInfo(); // Logs: Make: Toyota, Model: Camry, Year: 2020

/*********************
 * Question 2:
 * Access the model of the car object using both dot and bracket notation.
 *********************/

// Your code here
const car2 = {
    make: "Honda",
    model: "Civic",
    year: 2021
};
console.log(car2.model); // Using dot notation
console.log(car2["model"]); // Using bracket notation

/*********************
 * Question 3:
 * Update the year of the car to the current year.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
const currentYear = new Date().getFullYear();
car.year = currentYear; // Updating the year property
console.log(car.year); // Logs the current year

/*********************
 * Question 4:
 * Add a new property color to the car object.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
car.color = "red"; // Adding a new property color
console.log(car.color); // Logs "red"

/*********************
 * Question 5:
 * Delete the model property from the car object.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
delete car.model; // Deleting the model property
console.log(car.model); // Logs undefined
console.log(car); // Logs { make: "Toyota", year: 2020 }

/*********************
 * Question 6:
 * Create a nested object called `owner` inside car with properties: name and address.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    owner: {
        name: "John Kinyanjui",
        address: "123 Main St, Nairobi, Kenya"
    }
};
console.log(car.owner.name); // Logs "John Kinyanjui"
console.log(car.owner.address); // Logs "123 Main St, Nairobi, Kenya"

/*********************
 * Question 7:
 * Loop through all properties of the car object using a for...in loop and log the keys and values.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red"
};
for (let key in car) {
    console.log(`${key}: ${car[key]}`); // Logs each key-value pair
}

/*********************
 * Question 8:
 * Use Object.keys(), Object.values(), and Object.entries() on the car object.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red"
};
console.log(Object.keys(car)); // Logs: ["make", "model", "year", "color"]
console.log(Object.values(car)); // Logs: ["Toyota", "Camry", 2020, "red"]
console.log(Object.entries(car)); // Logs: [["make", "Toyota"], ["model", "Camry"], ["year", 2020], ["color", "red"]]

/*********************
 * Question 9:
 * Use Object.freeze() on the car object and try modifying a property.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red"
};
Object.freeze(car);
car.year = 2021; // Attempting to modify the year property
console.log(car.year); // Logs: 2020 (modification failed)

/*********************
 * Question 10:
 * Use Object.seal() on the car object and try adding a new property.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    color: "red"
};
Object.seal(car);
car.newProperty = "New Value"; // Attempting to add a new property
console.log(car.newProperty); // Logs undefined (addition failed)

/*********************
 * Question 11:
 * Create a constructor function for a Book that takes title, author, and year.
 * Add a method describe() to its prototype.
 *********************/

// Your code here
class Book {
constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
describe () {
    console.log(`${this.title} by ${this.author}, published in ${this.year}`);
}
}
const myBook = new Book("1984", "George Orwell", 1949);
myBook.describe(); // Logs: 1984 by George Orwell, published in 1949

/*********************
 * Question 12:
 * Create a class `Animal` with a constructor and a method speak(). Extend it with a subclass `Dog`.
 *********************/

// Your code here
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const myDog = new Dog("Rex");
myDog.speak(); // Logs: Rex barks.

/*********************
 * Question 13:
 * Use the spread operator to clone an object.
 *********************/

// Your code here
const car1 = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
const cars = { ...car1 }; // Cloning the car1 object
console.log(cars); // Logs: { make: "Toyota", model: "Camry", year: 2020 }

/*********************
 * Question 14:
 * Use destructuring to extract properties from an object and assign them to variables.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
const { make, model, year } = car; // Destructuring the car object
console.log(model); // Logs: Camry
const { year: carYear } = car; // Renaming during destructuring
console.log(carYear); // Logs: 2020
const { make: make1} = car; // Renaming during destructuring
console.log(make1); // Logs: Toyota

/*********************
 * Question 15:
 * Create a function that takes an object and uses object shorthand to return a new object.
 *********************/

// Your code here
const BMW = {
    make: "BMW",
    model: "X5",
    year: 2021
};
function createCar({ make, model, year }) {
    return { make, model, year }; // Object shorthand
}
const newCar = createCar(BMW);
console.log(newCar); // Logs: { make: "BMW", model: "X5", year: 2021 }

/*********************
 * Question 16:
 * Demonstrate optional chaining and nullish coalescing with nested objects.
 *********************/

// Your code here
const user = {
    name: "Alice",
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};
const city = user.address?.city ?? "Unknown City"; // Optional chaining and nullish coalescing
console.log(city); // Logs: Nairobi
const user2 = {
    name: "Bob"
};
const city2 = user2.address?.city ?? "Unknown City"; // Optional chaining and nullish coalescing
console.log(city2); // Logs: Unknown City

/*********************
 * Question 17:
 * Dynamically add a method to an existing object and call it.
 *********************/

// Your code here
const person = {
    name: "John",
    age: 30
};
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};
person.greet(); // Logs: Hello, my name is John

/*********************
 * Question 18:
 * Demonstrate the use of `this` inside an object method.
 *********************/

// Your code here
class car {
    constructor(make, model, year) {
      // Using this to set the property
      this.make = make; 
        this.model = model; 
        this.year = year;
    }
    displayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`); // Using this to access the properties
    }
}
const myCar = new car("Toyota", "Camry", 2020); // Creating a new instance of the class
myCar.displayInfo(); // Logs: Make: Toyota, Model: Camry, Year: 2020

/*********************
 * Question 19:
 * Write a function that checks if a given key exists in an object using `in` and `hasOwnProperty`.
 *********************/

// Your code here
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
Object.setPrototypeOf(car, { color: "Blue" });

function checkKey(obj, key) {
    // Using 'in' operator
    if (key in obj) {
        console.log(`${key} exists in the object.`);
    } else {
        console.log(`${key} does not exist in the object.`);
    }
    
    // Using hasOwnProperty method
    if (obj.hasOwnProperty(key)) {
        console.log(`${key} is a direct property of the object.`);
    } else {
        console.log(`${key} is not a direct property of the object.`);
    }
}
checkKey(car, "model"); // Logs: model exists in the object. model is a direct property of the object. 
checkKey(car, "color"); // Logs: color exists in the object. color is not a direct property of the object.
checkKey(car, "mileage"); // Logs: mileage does not exist in the object. mileage is not a direct property of the object.

/*********************
 * Question 20:
 * Convert an object to a JSON string and then back to an object.
 *********************/

// Your code here

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
const jsonString = JSON.stringify(car); // Convert object to JSON string
const parsedObject = JSON.parse(jsonString); // Convert JSON string back to object 
console.log(jsonString); // Logs: {"make":"Toyota","model":"Camry","year":2020}
console.log(parsedObject); // Logs: { make: 'Toyota', model: 'Camry', year: 2020 }