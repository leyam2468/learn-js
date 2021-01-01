let qrBtn = document.querySelector(".qr-btn");
let qrImg = document.querySelector(".qr-img");
let loading = document.querySelector(".loading");

qrBtn.addEventListener("click", () => {
	let qrInput = document.querySelector(".qr-input").value;

	if (qrInput) {
		loading.style.display = "block";
		qrImg.onload = function () {
			loading.style.display = "none";
		};
	}

	let url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrInput}`;
	qrImg.src = url;
});
