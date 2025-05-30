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
            sayHello.call(anotherPerson); // Output: Hello, my name is Jane
            sayHello.call(person); // Output: Hello, my name is John