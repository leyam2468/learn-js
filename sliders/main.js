// slider
let slider1 = document.getElementById("slider1");
let active = document.getElementById("active");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");

line1.onclick = () => {
	slider1.style.transform = "translateX(0)";
	active.style.top = "0px";
};

line2.onclick = () => {
	slider1.style.transform = "translateX(-25%)";
	active.style.top = "80px";
};

line3.onclick = () => {
	slider1.style.transform = "translateX(-50%)";
	active.style.top = "160px";
};

line4.onclick = () => {
	slider1.style.transform = "translateX(-75%)";
	active.style.top = "240px";
};

let slides1 = document.querySelectorAll("#slider1 .msg");
let a = 0;
let b = 0;
let auto = function () {
	if (a == -slider1.children[0].offsetWidth * slider1.childElementCount) {
		a = 0;
		b = 0;
	} else {
		slider1.style.transform = `translateX(${a}px)`;
		active.style.top = `${b}px`;
		b = b + 80;
		a = a - slider1.children[0].offsetWidth;
	}
};
let intervel = setInterval(auto, 2000);

// Slider 2

let sliderIndex = 0;
let slides = document.querySelectorAll("#slider2 .msg");

for (let i = 0; i < slides.length; i++) {
	let lineEl = document.createElement("div");
	lineEl.classList.add("line");
	document.querySelector(".slider-2 .cont").appendChild(lineEl);
}

let linesEl = document.querySelectorAll(".slider-2 .line");

showSlider2();

function showSlider2() {
	// Display Block For All
	slides.forEach((item) => {
		item.style.display = "none";
	});
	// Remmove Active From All lines
	linesEl.forEach((item) => {
		item.className = item.className.replace(" active", "");
	});
	// Active One ++
	sliderIndex++;

	if (sliderIndex > slides.length) {
		sliderIndex = 1;
	}

	slides[sliderIndex - 1].style.display = "block";
	linesEl[sliderIndex - 1].className += " active";

	setTimeout(showSlider2, 2000);
}
