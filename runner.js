const obj = {
    name: "Charlie",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const boundGreet = obj.greet.bind(obj);
boundGreet(); // Invoking the bound function