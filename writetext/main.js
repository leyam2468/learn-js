// Write text**************************************
const writeText = document.getElementById("writetext");
let typing = "Welcome to My Site For Learn-Js.";
let textletter = 0;

let writeTextF = () => {
	writeText.innerText = typing.slice(0, textletter);
	textletter++;

	if (textletter > typing.length) {
		textletter = 0;
	}
};
setInterval(writeTextF, 100);
