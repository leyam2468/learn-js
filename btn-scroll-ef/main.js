let x = document.querySelector(".btn-scrol");
window.onscroll = function () {
	if (pageYOffset >= x.offsetTop) {
		x.classList.add("activeScrol");
		x.innerHTML = "X";
	} else if (pageYOffset < 100) {
		x.classList.remove("activeScrol");
		x.innerHTML = "Scroll";
	}
};
