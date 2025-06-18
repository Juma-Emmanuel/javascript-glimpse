// JavaScript Objects - Mixins and Proxies Practical Test

/***********************
 * 1. Mixin Basics
 * Create a mixin named `canWalk` that adds a `walk()` method.
 * Then create an object `person` and apply the mixin.
 ***********************/

// Your code here
const canWalk = {
  walk: function () {
    console.log(`${this.name} is walking.`);
  },
};
const person = {
  name: "Alice",
};
Object.assign(person, canWalk); // Applying the mixin
person.walk(); // Logs: Alice is walking.

/***********************
 * 2. Multiple Mixins
 * Create two mixins: `canEat` and `canSleep`.
 * Apply both to an object named `animal` and call both methods.
 ***********************/

// Your code here
const canEat = {
  eat: function () {
    console.log(`${this.name} is eating.`);
  },
};
const canSleep = {
  sleep: function () {
    console.log(`${this.name} is sleeping.`);
  },
};
const animal = {
  name: "Dog",
};
Object.assign(animal, canEat, canSleep); // Applying both mixins
animal.eat(); // Logs: Dog is eating.
animal.sleep(); // Logs: Dog is sleeping.

/***********************
 * 3. Mixin with Shared State
 * Create a mixin `trackable` that stores a list of events in an array.
 * Implement methods `addEvent()` and `getEvents()`.
 * Apply it to an object `logger` and test the behavior.
 ***********************/

// Your code here
const trackable = {
  events: [],
  addEvent: function (event) {
    this.events.push(event);
    console.log(`Event added: ${event}`);
  },
  getEvents: function () {
    return this.events;
  },
};
const logger = {};
Object.assign(logger, trackable); // Applying the mixin
logger.addEvent("User logged in");
logger.addEvent("User clicked button");
console.log(logger.getEvents()); // Logs: ["User logged in", "User clicked button"]

/***********************
 * 4. Proxy Basics
 * Create an object `user` with properties `name` and `age`.
 * Create a proxy that logs every get and set operation on the user object.
 ***********************/

// Your code here
let user = {
  name: "John",
  age: 30,
};
const handler = {
  get: function (target, property) {
    console.log(`Getting ${property}: ${target[property]}`);
    return target[property];
  },
  set: function (target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
    return true; // Indicate success
  },
};
const userProxy = new Proxy(user, handler);
userProxy.name; // Logs: Getting name: John
userProxy.age = 31; // Logs: Setting age to 31
userProxy.age; // Logs: Getting age: 31

/***********************
 * 5. Validation with Proxies
 * Create a proxy that prevents setting the `age` property to a negative number.
 ***********************/

// Your code here
const person1 = {
  name: "Alice",
  age: 25,
};
var validationHandler = {
  set: function (target, property, value) {
    if (property === "age" && value < 0) {
      console.error("Age cannot be negative.");
      return false; // Prevent setting a negative age
    } else {
      console.log(`Setting ${property} to ${value}`); // Log the set operation
    }
    target[property] = value;
    return true; // Indicate success
  },
  get: function (target, property) {
    console.log(`Getting ${property}: ${target[property]}`); // Log the get operation
    return target[property]; // Return the property value
  },
};
const personProxy = new Proxy(person1, validationHandler);
personProxy.age = -5; // Logs: Age cannot be negative.
personProxy.age = 30; // Sets age to 30 successfully

/***********************
 * 6. Hiding Private Properties
 * Use a proxy to prevent access to any property that starts with `_` (underscore).
 * Example: `_password` should be inaccessible.
 ***********************/

// Your code here
const privateUser = {
  name: "Alice",
  _password: "123456",
};
const privateHandler = {
  get: function (target, property) {
    if (property.startsWith("_")) {
      console.error(`Access to private property ${property} is denied.`);
      return undefined; // Prevent access to private properties
    }
    console.log(`Getting ${property}`);
    return target[property]; // Return the property value
  },
};
const privateUserProxy = new Proxy(privateUser, privateHandler);
console.log(privateUserProxy.name); // Logs: Getting name: Alice
console.log(privateUserProxy._password); // Logs: Access to private property _password is denied. Returns undefined

/***********************
 * 7. Proxy as a Wrapper
 * Create a function `makeObservable(obj)` that wraps any object with a proxy
 * and calls a `handler()` every time a property is set.
 ***********************/

// Your code here
function makeObservable(obj, handler) {
  return new Proxy(obj, {
    set(target, property, value) {
      handler(property, value); // Call the handler with property and value
      target[property] = value; // Set the property
      return true; // Indicate success
    },
    get(target, property) {
      return target[property]; // Return the property value
    },
  });
}
const observableHandler = (property, value) => {
  console.log(`Property ${property} set to ${value}`);
};
const user1 = makeObservable({ name: "Alice" }, observableHandler);
user1.name = "Bob"; // Logs: Property name set to Bob

/***********************
 * 8. Proxy with has trap
 * Create a proxy for an object that always returns false when using the `in` operator,
 * except for the property `"id"`.
 ***********************/

// Your code here
const item = {
  id: 123,
  name: "Item Name",
};
const hasHandler = {
  has(target, property) {
    if (property === "id") {
      return true; // Allow access to "id"
    }
    return false; // Deny access to all other properties
  },
};
const itemProxy = new Proxy(item, hasHandler);
console.log("id" in itemProxy); // Logs: true
console.log("name" in itemProxy); // Logs: false

/***********************
 * 9. Mixin on Class Prototype
 * Create a mixin `canFly` with a fly method.
 * Apply it to a class `Bird` and demonstrate that all instances can use it.
 ***********************/

// Your code here
const canFly = {
  fly: function () {
    console.log(`${this.name} is flying.`);
  },
};
class Bird {
  constructor(name) {
    this.name = name;
  }
}
Object.assign(Bird.prototype, canFly); // Applying the mixin to the class prototype
const eagle = new Bird("Eagle");
eagle.fly(); // Logs: Eagle is flying.

/***********************
 * 10. Proxy and Reflect
 * Rewrite a proxy set handler using Reflect.set instead of direct assignment.
 ***********************/

// Your code here
const person2 = {
  name: "Alice",
  age: 25,
};
const reflectHandler = {
  set(target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    return Reflect.set(target, property, value); // Use Reflect.set for setting the property
  },
};
const personProxy2 = new Proxy(person2, reflectHandler);
personProxy2.age = 30; // Logs: Setting age to 30
console.log(personProxy2.age); // Logs: Getting age: 30
