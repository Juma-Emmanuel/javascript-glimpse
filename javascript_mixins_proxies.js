// JavaScript Objects - Mixins and Proxies Practical Test

/***********************
 * 1. Mixin Basics
 * Create a mixin named `canWalk` that adds a `walk()` method.
 * Then create an object `person` and apply the mixin.
 ***********************/

// Your code here
const canWalk = {
    walk() {
        console.log(`${this.name} is walking.`);
    }
};
const person = {
    name:"jake"
};
Object.assign(person, canWalk);
person.walk(); // Output: jake is walking.


/***********************
 * 2. Multiple Mixins
 * Create two mixins: `canEat` and `canSleep`.
 * Apply both to an object named `animal` and call both methods.
 ***********************/

// Your code here
const canEat = {
    eat() {
        console.log(`${this.name} is eating.`);
    }
};
const canSleep = {
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
};
const animal = {
    name: "Loki the butcher",
};
Object.assign(animal, canEat, canSleep);
animal.eat();   // Output: Loki the butcher is eating.      
animal.sleep(); // Output: Loki the butcher is sleeping.

/***********************
 * 3. Mixin with Shared State
 * Create a mixin `trackable` that stores a list of events in an array.
 * Implement methods `addEvent()` and `getEvents()`.
 * Apply it to an object `logger` and test the behavior.
 ***********************/

// Your code here
const trackable = {
    events: [],
    addEvent(event) {
        this.events.push(event);
        console.log(`Event added: ${event}`);
    },
    getEvents() {
        return this.events;
    }
};
const logger = {
    name: "Event Logger",
};  
Object.assign(logger, trackable);
logger.addEvent("User logged in");
logger.addEvent("User clicked button");
console.log(logger.getEvents()); // Output: ["User logged in", "User clicked button"]

/***********************
 * 4. Proxy Basics
 * Create an object `user` with properties `name` and `age`.
 * Create a proxy that logs every get and set operation on the user object.
 ***********************/

// Your code here
const user = {
    name: "Kim",
    age: 25     


};

const userProxy = new Proxy(user, {
    get(target, property) {
        console.log(`Getting ${property}: ${target[property]}`);
        return target[property];
    },
    set(target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        target[property] = value;
        return true; // Indicate success
    }
});
userProxy.name; // Logs: Getting name: Kim
userProxy.age = 30; // Logs: Setting age to 30

/***********************
 * 5. Validation with Proxies
 * Create a proxy that prevents setting the `age` property to a negative number.
 ***********************/

// Your code here
const user={
    name: "Jared",
    age: 30
};
const userValidationProxy = new Proxy(user, {
    set(target, property, value) {
        if (property === 'age'&& value < 0) {
            console.error("Age cannot be negative.");
            return false; // Prevent setting the property
        }
        target[property] = value;
        return true; // Indicate success
    }

}
);
userValidationProxy.age = -5; // Logs: Age cannot be negative.
userValidationProxy.age = 25; // Sets age to 35 successfully
/***********************
 * 6. Hiding Private Properties
 * Use a proxy to prevent access to any property that starts with `_` (underscore).
 * Example: `_password` should be inaccessible.
 ***********************/
const userLogin = {
    name: "Jim",
    _password: 1234
};
const privateProxy = new Proxy(userLogin, {
    get(target, property) {
        if (property.startsWith('_')) {
            console.error(`Access to private property ${property} is denied.`);
            return undefined; // Prevent access to private properties
        }
        return target[property];
    },
    set(target, property, value) {
        if (property.startsWith('_')) {
            console.error(`Cannot set private property ${property}.`);
            return false; // Prevent setting private properties
        }
        target[property] = value;
        return true; // Indicate success



    }
});     
console.log(privateProxy.name); // Output: Jim
console.log(privateProxy._password); // Logs: Access to private property _password is denied.
// Output: undefined
privateProxy._password = 5678; // Logs: Cannot set private property _password.    
// Your code here

privateProxy.name = "Bob"; // Sets name to Bob successfully
console.log(privateProxy.name); // Output: Bob


/***********************
 * 7. Proxy as a Wrapper
 * Create a function `makeObservable(obj)` that wraps any object with a proxy
 * and calls a `handler()` every time a property is set.
 ***********************/

// Your code here
function makeObservable(obj, handler) {
    return new Proxy(obj, {
        set(target, property, value) {
           target[property] = value; 
            handler(property, value);
            return true; // Indicate success
        }
    });
}
const person= {
    name: "Jenny",
    age: 28
};
function logChange(property, value) {
    console.log(`Property ${property} changed to ${value}`);
}

const observableperson= makeObservable(person,logChange);
observableperson.name = "Carlos";
observableperson.age = 35;



/***********************
 * 8. Proxy with has trap
 * Create a proxy for an object that always returns false when using the `in` operator,
 * except for the property `"id"`.
 ***********************/

// Your code here
const participant = {
    id: 6678,
    name: "Alice",
    age: 30
};
const participantProxy = new Proxy(participant, {
    has(target, property) {
        if (property === 'id') {
            return true; // Allow access to 'id'
        }
        return false; // Deny access to all other properties
    }
});
console.log('id' in participantProxy); // Output: true
console.log('name' in participantProxy); // Output: false

/***********************
 * 9. Mixin on Class Prototype
 * Create a mixin `canFly` with a fly method.
 * Apply it to a class `Bird` and demonstrate that all instances can use it.
 ***********************/

// Your code here
const Canfly={
    fly() {
        console.log(`${this.name} is flying.`);
    }
};
class Bird {
    constructor(name) {
        this.name = name;
    }
}
Object.assign(Bird.prototype, Canfly);
const eagle = new Bird("Eagle");
eagle.fly(); // Output: Eagle is flying.

/***********************
 * 10. Proxy and Reflect
 * Rewrite a proxy set handler using Reflect.set instead of direct assignment.
 ***********************/
// Your code here
const employee = {
    name: "David",
    age: 40
};
const handler = {
    set(target, property, value, receiver) {
        console.log(`Setting ${property} to ${value}`);
        return Reflect.set(target, property, value,receiver); // Use Reflect.set for setting properties
    }
};
const employeeProxy = new Proxy(employee, handler);

employeeProxy.name = "Aziza"; // Logs: Setting name to Eve
employeeProxy.age = 45; // Logs: Setting age to 45
console.log(employeeProxy.name); // Output: Aziza
console.log(employeeProxy.age); // Output: 45                                                                               