var Calculator = require('./back-end').calculatorModule;
// var $ = require('jQuery');

$(document).ready(function() {
  var calc2 = new Calculator();


  $('#calc').submit(function(event) {
    event.preventDefault();


    var firstNumber = parseInt($('#input1').val());
    var secondNumber = parseInt($('#input2').val());
    var userSelect = $("input:radio[name=operator]:checked").val();

      if (userSelect === 'add') {
        calc2.addSum(firstNumber, secondNumber);
        console.log(userSelect);
      }

  });


});
