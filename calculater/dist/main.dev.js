"use strict";

getHistory = function getHistory() {
  return document.querySelector('.history-v').innerText;
};

printHistory = function printHistory(num) {
  document.querySelector('.history-v').innerText = num;
};

getOutput = function getOutput() {
  return document.querySelector('.output-v').innerText;
};

printOutPut = function printOutPut(num) {
  if (num == '') {
    document.querySelector('.output-v').innerText = num;
  } else {
    document.querySelector('.output-v').innerText = getFormattedNumber(num);
  }
}; // Fromating Namber with Sibret Coma


getFormattedNumber = function getFormattedNumber(num) {
  if (num == '-') {
    return '';
  }

  var namber = Number(num);
  var value = namber.toLocaleString('en');
  return value;
}; // revers Number fromating


reverseNumberFromating = function reverseNumberFromating(num) {
  return Number(num.replace(/,/g, ''));
}; // oparator Section


oparator = document.querySelectorAll('.oparator');
oparator.forEach(function (oparate) {
  oparate.addEventListener('click', function () {
    // Clear BTN
    if (this.id == 'clear') {
      printHistory('');
      printOutPut('');
    } // Backspace BTN
    else if (this.id == 'backspace') {
        var output = reverseNumberFromating(getOutput()).toString();

        if (output) {
          output = output.substr(0, output.length - 1);
          printOutPut(output);
        } // Any Other Key

      } else {
        var _output = getOutput();

        var history = getHistory();

        if (_output == '' && history != '') {
          if (isNaN(history[history.length - 1])) {
            history = history.substr(0, history.length - 1);
          }
        }

        if (_output != '' || history != '') {
          _output = _output == '' ? _output : reverseNumberFromating(_output);
          history += _output;

          if (this.id == '=') {
            var result = eval(history);
            printOutPut(result);
            printHistory('');
          } else {
            history += this.id;
            printHistory(history);
            printOutPut('');
          }
        }
      }
  });
}); // Nmaber Section

numbers = document.querySelectorAll('.number');
numbers.forEach(function (numberr) {
  numberr.addEventListener('click', function () {
    var output = reverseNumberFromating(getOutput());
    console.log(reverseNumberFromating(this.id));

    if (output != NaN) {
      output += this.id;
      printOutPut(output);
    }
  });
});