let timeEL = document.querySelector(".time");
let dateEL = document.querySelector(".date");
let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

var timerID = setInterval(updateTime, 1000);
updateTime();

function updateTime() {
	let newDate = new Date();

	timeEL.innerText =
		zeroPadding(newDate.getHours(), 2) +
		":" +
		zeroPadding(newDate.getMinutes(), 2) +
		":" +
		zeroPadding(newDate.getSeconds(), 2);

	dateEL.innerText =
		zeroPadding(newDate.getFullYear(), 4) +
		"-" +
		zeroPadding(newDate.getMonth() + 1, 2) +
		"-" +
		zeroPadding(newDate.getDate(), 2) +
		" " +
		week[newDate.getDay()];
}

function zeroPadding(num, digit) {
	var zero = "";
	for (var i = 0; i < digit; i++) {
		zero += "0";
	}
	return (zero + num).slice(-digit);
}
