// JavaScript Objects – Comprehensive Practical Test

/*********************
 * Question 1:
 * Create an object named `car` with properties: make, model, year, and a method displayInfo that logs all info.
 *********************/

// Your code here
let Car = {
    Make : "Toyota",
    Model :"Corolla",
    Year : 2020 ,
displayinfo: function() {
    console.log(`Car Make: ${this.Make}, Model: ${this.Model}, Year: ${this.Year}`);
}    
};
Car.displayinfo();
 



/*********************
 * Question 2:
 * Access the model of the car object using both dot and bracket notation.
 *********************/

// Your code here
console.log(Car.Model); // Dot notation
console.log(Car['Model']); // Bracket notation



/*********************
 * Question 3:
 * Update the year of the car to the current year.
 *********************/

// Your code here
let currentYear = new Date().getFullYear();


/*********************
 * Question 4:
 * Add a new property color to the car object.
 *********************/

// Your code here

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2025,
  displayInfo: function() {
    // Add display logic here
    console.log(`${this.make} ${this.model} (${this.year}) - ${this.color}`);
  },
  color: "blue"
};
/*********************
 * Question 5:
 * Delete the model property from the car object.
 *********************/

// Your code here
let car= {
    make : "Toyota",
    model : "Corolla",      
    year : 2020,
    displayInfo : function() {
         delete car.model
         console.log(car.model);
    }

      
    }


/*********************
 * Question 6:
 * Create a nested object called `owner` inside car with properties: name and address.
 *********************/

// Your code here
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    owner: {
        name: "John Doe",
        address: "123 Main St, roysambu Kenya"
    },
    
};

/*********************
 * Question 7:
 * Loop through all properties of the car object using a for...in loop and log the keys and values.
 *********************/

// Your code here
for (let key in car) {
  if (typeof car[key] === 'object' && car[key] !== null && !Array.isArray(car[key])) {
    console.log(`${key}:`);
    for (let nestedKey in car[key]) {
      console.log(`  ${nestedKey}: ${car[key][nestedKey]}`);
    }
  } else {
    console.log(`${key}: ${car[key]}`);
  }
}

/*********************
 * Question 8:
 * Use Object.keys(), Object.values(), and Object.entries() on the car object.
 *********************/

// Your code here
let car = {
  make: "Toyota",           
    year: 2020,
    displayInfo: function() {   
        console.log(`Car Make: ${this.make}, Year: ${this.year}`);          

    },

    color: "Red",   
    owner: "Alice"
};

console.log("Keys:");
console.log(Object.keys(car)); 
// Output: ["make", "year", "displayInfo", "color", "owner"]

console.log("Values:");
console.log(Object.values(car)); 
// Output: values of the car object's properties

console.log("Entries:");
console.log(Object.entries(car)); 
// Output: array of [key, value] pairs



/*********************
 * Question 9:
 * Use Object.freeze() on the car object and try modifying a property.
 *********************/

// Your code here

const car = {
    make: 'Toyota', 
    model: 'Corolla',
    year: 2020,
    owner: {
        name: 'zack ryder',   
        age: 30
    }
};

Object.freeze(car.owner);
car.owner.name = 'zack ryder'; 
car.owner.age = 31;


/*********************
 * Question 10:
 * Use Object.seal() on a new object called `bike` and attempt to add and modify properties.
 *********************/

// Your code here
let bike = {
  brand: "Kawasaki",
  year: 2021
};

Object.seal(bike);

// Modify an existing property
bike.year = 2022;

// Try to add a new property
bike.color = "red";

// Try to delete a property
delete bike.brand;

console.log(bike); 



/*********************
 * Question 11:
 * Create a constructor function for a Book that takes title, author, and year.
 * Add a method describe() to its prototype.
 *********************/

// Your code here
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Add method to the prototype
Book.prototype.describe = function() {
  return `${this.title} was written by ${this.author} in ${this.year}.`;
};

// Example usage:
const myBook = new Book("1984", "George Orwell", 1949);
console.log(myBook.describe()); // Output: "1984 was written by George Orwell in 1949."


/*********************
 * Question 12:
 * Create a class `Animal` with a constructor and a method speak(). Extend it with a subclass `Dog`.
 *********************/

// Your code here
let myDog = {
  name: "Buddy",
  breed: "Golden Retriever",
  speak: function() {
    return `${this.name} barks.`;
  }
};
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks.`;
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.speak()); 


/*********************
 * Question 13:
 * Use the spread operator to clone an object.
 *********************/

// Your code here
const original = {
  name: "Kendi",
  age: 30,
  country: "Kenya"
};

// Clone the object
const clone = { ...original };

// Modify the clone
clone.age = 35;

console.log(original); 
console.log(clone);    



/*********************
 * Question 14:
 * Use destructuring to extract properties from an object and assign them to variables.
 *********************/

// Your code here
const user1 = {
  name: "Jane",
  age: 20,
  country: "Russia",
  email: "jane@example.com"
};

// Destructure the object
const { name, age, country } = user1;

console.log(name);   
console.log(age);  
console.log(country); 


/*********************
 * Question 15:
 * Create a function that takes an object and uses object shorthand to return a new object.
 *********************/

// Your code here
function createUser({ name, age }) {
  // Object shorthand: keys match variable names
  return {
    name,
    age,
    isActive: true
  };
}
const newUser = createUser({ name: "Dancun", age: 20 });
console.log(newUser);
// Output: { name: 'Dancun', age: 20, isActive: true }




/*********************
 * Question 16:
 * Demonstrate optional chaining and nullish coalescing with nested objects.
 *********************/

// Your code here
const user2 = {
  name: "Alice",
  address: {
    city: "Nairobi",
    postalCode: null
  }
};

// Optional chaining to safely access nested property
const city = user2.address?.city;
const street = user2.address?.street; 

// Nullish coalescing to provide default values
const postalCode = user2.address?.postalCode ?? "No postal code provided";
const phone = user2.contact?.phone ?? "No phone number provided";

console.log(city);       // Nairobi
console.log(street);     // undefined
console.log(postalCode); // No postal code provided
console.log(phone);      // No phone number provided


/*********************
 * Question 17:
 * Dynamically add a method to an existing object and call it.
 *********************/

// Your code here
const person = {
  name: "Kim",
  age: 25
};

// Dynamically add a method
person.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// Call the newly added method
person.greet();  // Output: Hello, my name is kim



/*********************
 * Question 18:
 * Demonstrate the use of `this` inside an object method.
 *********************/

// Your code here

const user = {
  name: "Alice",
  age: 28,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

user.greet(); // Output: Hello, my name is Alice and I am 28 years old.

/*********************
 * Question 19:
 * Write a function that checks if a given key exists in an object using `in` and `hasOwnProperty`.
 *********************/

// Your code here
function checkKey(obj, key) {
  const inOperator = key in obj;
  const hasOwnProp = obj.hasOwnProperty(key);

  return {
    inOperator,
    hasOwnProp
  };
}

// Example usage:
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021
};

console.log(checkKey(car, "model"));
// Output: { inOperator: true, hasOwnProp: true }

console.log(checkKey(car, "toString"));
// Output: { inOperator: true, hasOwnProp: false }



/*********************
 * Question 20:
 * Convert an object to a JSON string and then back to an object.
 *********************/

// Your code here

const person = {
  name: "Dancun",
  age: 30,
  isStudent: false
};

// Convert object to JSON string
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

// Convert JSON string back to object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);
