
/*********************
 * Question 1: Self-Invoking Function
 * Write a self-invoking function that logs "Self-invoked!" to the console.
 *********************/

// Your code here
(function () {
    console.log("Self-invoked!");
})();

/*********************
 * Question 2: call() Method
 * Create an object `person` with a method `sayHello` that logs "Hello, my name is [name]".
 * Use `call()` to invoke `sayHello` with a different object that has a `name` property.
 *********************/

// Your code here
const person = {
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const anotherPerson = {
    name: "Alice"
};
person.sayHello.call(anotherPerson);
cansole.log("Called sayHello with anotherPerson's context.");
/*********************
 * Question 3: apply() Method
 * Modify the function from Question 2 to use `apply()` instead of `call()`.
 *********************/

// Your code here
const person2 = {
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const anotherPerson2 = {
    name: "Bob"
};
person2.sayHello.apply(anotherPerson2);

/*********************
 * Question 4: bind() Method
 * Create a function that uses `this.name` and bind it to an object.
 * Store the bound function in a variable and invoke it.
 *********************/

// Your code here
const obj = {
    name: "Charlie",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const boundGreet = obj.greet.bind(obj);
boundGreet(); // Invoking the bound function