getHistory = () => {
	return document.querySelector('.history-v').innerText;
};
printHistory = (num) => {
	document.querySelector('.history-v').innerText = num;
};

getOutput = () => {
	return document.querySelector('.output-v').innerText;
};
printOutPut = (num) => {
	if (num == '') {
		document.querySelector('.output-v').innerText = num;
	} else {
		document.querySelector('.output-v').innerText = getFormattedNumber(num);
	}
};

// Fromating Namber with Sibret Coma
getFormattedNumber = (num) => {
	if (num == '-') {
		return '';
	}
	let namber = Number(num);
	let value = namber.toLocaleString('en');
	return value;
};
// revers Number fromating
reverseNumberFromating = (num) => {
	return Number(num.replace(/,/g, ''));
};
// oparator Section
oparator = document.querySelectorAll('.oparator');
oparator.forEach((oparate) => {
	oparate.addEventListener('click', function () {
		// Clear BTN
		if (this.id == 'clear') {
			printHistory('');
			printOutPut('');
		}
		// Backspace BTN
		else if (this.id == 'backspace') {
			let output = reverseNumberFromating(getOutput()).toString();
			if (output) {
				output = output.substr(0, output.length - 1);
				printOutPut(output);
			}
			// Any Other Key
		} else {
			let output = getOutput();
			let history = getHistory();

			if (output == '' && history != '') {
				if (isNaN(history[history.length - 1])) {
					history = history.substr(0, history.length - 1);
				}
			}
			if (output != '' || history != '') {
				output = output == '' ? output : reverseNumberFromating(output);
				history += output;
				if (this.id == '=') {
					let result = eval(history);
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
});

// Nmaber Section
numbers = document.querySelectorAll('.number');
numbers.forEach((numberr) => {
	numberr.addEventListener('click', function () {
		let output = reverseNumberFromating(getOutput());
		console.log(reverseNumberFromating(this.id));
		if (output != NaN) {
			output += this.id;
			printOutPut(output);
		}
	});
});
