function Calculator(a) {
this.a = a;
}

// var calc2 = new Calculator();

Calculator.prototype.addSum = function(a,b) {
  return a + b;
};

Calculator.prototype.subtractSum = function(a,b) {
  return a - b;
};

Calculator.prototype.multiplySum = function(a,b) {
  return a * b;
};

Calculator.prototype.divideSum = function(a,b) {
  return a / b;
};


exports.calculatorModule = Calculator;
