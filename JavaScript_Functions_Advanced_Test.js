// JavaScript Functions – Advanced Test: Self-Invoking, call(), apply(), bind()

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
function sayHello() {
    console.log(`Hello, my name is ${this.name}`);
    }
    var person = {
        name: "John",
        sayHello: sayHello
        };
        var anotherPerson = {
            name: "Jane"
            };
            sayHello.call(anotherPerson, person.name); // Output: Hello, my name is John
            sayHello.call(person, anotherPerson.name); // Output: Hello, my name is Jane
            sayHello.call(person, "Bob"); // Output: Hello, my name is Bob

/*********************
 * Question 3: apply() Method
 * Modify the function from Question 2 to use `apply()` instead of `call()`.
 *********************/

// Your code here
function sayHello() {
    console.log(`Hello, my name is ${this.name}`);
    }
    var person = {
        name: "John",
        sayHello: sayHello
    };
    var anotherPerson = {
        name: "Jane",
    };
    sayHello.apply(person);
    sayHello.apply(anotherPerson);

/*********************
 * Question 4: bind() Method
 * Create a function that uses `this.name` and bind it to an object.
 * Store the bound function in a variable and invoke it.
 *********************/

// Your code here
function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

var person = {
    name: "Alice"
};

var boundGreet = greet.bind(person);
boundGreet();
