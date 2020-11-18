let targetDay = new Date("13 jun 2021").getTime();
const counter = setInterval(() => {
	let nowTime = new Date().getTime();

	let distance = targetDay - nowTime;
	// Days
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	document.getElementById("days").innerHTML = days;
	// Hours
	let hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	document.getElementById("hours").innerHTML = hours;
	// minutes
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	document.getElementById("mins").innerHTML = minutes;
	// sac
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);
	document.getElementById("sec").innerHTML = seconds;

	//Days distance / (1000 * 60 * 60 * 24)
	// hours (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	// min (distance % (1000 * 60 * 60)) / (1000 * 60)
	// sac (distance % (1000 * 60)) / 1000

	if (distance < 0) {
		clearInterval(counter);
		document.getElementById("counter").innerHTML = "Happy BirthDay";
	}
}, 1000);
