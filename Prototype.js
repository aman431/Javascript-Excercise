function Bike(model, color) {
  this.model = model;
  this.color = color;
}

// adding property to constructor function using Prototype
Bike.prototype.type = "bike";

// Add Methods to a Constructor Function Using Prototype
Bike.prototype.getDetails = function () {
  console.log(`we have a model ${this.model} and color is ${this.color}`);
};

// object of the function
let bike1 = new Bike("yahama", "red");
bike1.getDetails();

// check the type property of the constructor function ..!
console.log(bike1.type);

// changing prototype
Bike.prototype = { type: "superbike" };

// check the updated prototype's ...!
const bike3 = new Bike("ninja", "yellow");
console.log("updated type", bike3.type);
