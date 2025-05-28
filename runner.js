var x = 10;
var y = 2;
try {
    var result = x / y;
    } catch (error) {
        console.log("Error: Division by zero is not allowed.", result);
        } finally {
            console.log("Completed operation.", result);
            }
        