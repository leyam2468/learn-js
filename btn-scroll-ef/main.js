let x = document.querySelector(".btn");
window.onscroll = function () {
	if (pageYOffset >= x.offsetTop) {
		x.classList.add("active");
	} else if (pageYOffset < 100) {
		x.classList.remove("active");
	}
};
