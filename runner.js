function greet() {
    console.log(`Hello, my name is ${this.name}`);
}

var person = {
    name: "Alice"
};

var boundGreet = greet.bind(person);
boundGreet();