(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var Calculator = require('./back-end').calculatorModule;
// var $ = require('jQuery');

$(document).ready(function() {
  var calc2 = new Calculator();


  $('#calc').submit(function(event) {
    event.preventDefault();

    var firstNumber = parseInt($('#input1').val());
    var secondNumber = parseInt($('#input2').val());
    var userSelect = $("input:radio[name=operator]:checked").val();
    var output = 0;

      if (userSelect === 'add') {
        output = calc2.addSum(firstNumber, secondNumber);
      } else if (userSelect === 'subtract') {
        output = calc2.subtractSum(firstNumber, secondNumber);
      } else if (userSelect === 'multiply') {
        output = calc2.multiplySum(firstNumber, secondNumber);
      } else {
        output = calc2.divideSum(firstNumber, secondNumber);
      }

      $('#output').text(output);

  });


});

},{"./back-end":1}]},{},[1,2]);
