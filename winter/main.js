// Heart Section **********

let hearts = document.getElementById("hearts");
setInterval(() => {
	const Heart = document.createElement("dvi");
	Heart.classList.add("heart");

	Heart.style.left = Math.random() * 100 + "vw";

	Heart.style.animationDuration = Math.random() * 2 + 3 + "s";

	Heart.innerText = "❤";

	hearts.appendChild(Heart);

	setTimeout(() => {
		Heart.remove();
	}, 5000);
}, 300);
