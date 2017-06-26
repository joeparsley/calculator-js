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
