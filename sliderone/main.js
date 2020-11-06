// slider
let slider = document.getElementById("slider");
let active = document.getElementById("active");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");

line1.onclick = () => {
	slider.style.transform = "translateX(0)";
	active.style.top = "0px";
};

line2.onclick = () => {
	slider.style.transform = "translateX(-25%)";
	active.style.top = "80px";
};

line3.onclick = () => {
	slider.style.transform = "translateX(-50%)";
	active.style.top = "160px";
};

line4.onclick = () => {
	slider.style.transform = "translateX(-75%)";
	active.style.top = "240px";
};

let a = 0;
let b = 0;
let auto = function () {
	if (a == -2400) {
		a = 0;
		b = 0;
	} else {
		slider.style.transform = `translateX(${a}px)`;
		active.style.top = `${b}px`;
		b = b + 80;
		a = a - 600;
	}
};
let intervel = setInterval(auto, 1000);
