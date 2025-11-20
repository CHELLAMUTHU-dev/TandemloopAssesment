class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation;
  }

  calculate() {
    switch (this.operation) {
      case "Addition":
      case "+":
        return this.a + this.b;
      case "Subtraction":
      case "-":
        return this.a - this.b;
      case "Multiplication":
      case "*":
        return this.a * this.b;
      case "Division":
      case "/":
        if (this.b === 0) {
          return "Error: Division by Zero(0) not allowed";
        }
        return this.a / this.b;

      default:
        return "Invalid Operation , Use Addition, Subtraction, Multiplication, Divisiion";
    }
  }
}

//add
const add = new Calculator(15, 5.5, "+");
console.log("Result:", add.calculate()); //20.5

const subtract = new Calculator(30, 10.5, "-");
console.log("Result:", subtract.calculate()); //19.5

const multiply = new Calculator(1.5, 5.5, "*");
console.log("Result:", multiply.calculate()); //8.25

const divide = new Calculator(20, 5.5, "/");
console.log("Result:", divide.calculate()); //3.63636363...

const error = new Calculator(10,25, "**");
console.log("Result:", error.calculate()) //Invalid Operation , Use Addition, Subtraction, Multiplication, Divisiion


