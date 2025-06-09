const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
const car2 = {
  make: "Honda",
  model: "Civic",
  year: 2021
};

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
checkKey(car, "price"); // Logs: model exists in the object. model is a direct property of the object. 