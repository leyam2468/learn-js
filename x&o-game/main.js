const x_CLASS = "x";
const o_CLASS = "o";

const winning_combination = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const cellEl = document.querySelectorAll(".cell");
const board = document.querySelector(".board");
const statusMsg = document.querySelector(".status-msg");
const status = document.querySelector(".status");
const resBTN = document.querySelector("#restart-btn");

let oTurn;

startGame();

resBTN.addEventListener("click", startGame);

function startGame() {
	console.log("%c Start Game", "color:green");

	oTurn = false;

	cellEl.forEach((cell) => {
		cell.classList.remove(x_CLASS);
		cell.classList.remove(o_CLASS);
		cell.removeEventListener("click", handleClick);
		cell.addEventListener("click", handleClick, { once: true });
	});
	setBoardHoverClass();
	status.classList.remove("show");
}

function handleClick(e) {
	const cell = e.target;
	const currentClass = oTurn ? o_CLASS : x_CLASS;

	// Add class player
	placeMark(cell, currentClass);

	if (checkWin(currentClass)) {
		endGame(false);
		console.log("%c Winner", "color:green; font-size:2rem");
	} else if (isDraw()) {
		endGame(true);
	} else {
		// Swap turn
		swapTurns();
		// Hover class
		setBoardHoverClass();
	}
}

function endGame(draw) {
	if (draw) {
		statusMsg.innerHTML = "Draw!";
	} else {
		statusMsg.innerHTML = `${oTurn ? "O" : "X"} Wins!`;
	}
	status.classList.add("show");
}

function isDraw() {
	return [...cellEl].every((cell) => {
		return (
			cell.classList.contains(x_CLASS) || cell.classList.contains(o_CLASS)
		);
	});
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}

function swapTurns() {
	oTurn = !oTurn;
}
function setBoardHoverClass() {
	board.classList.remove(x_CLASS);
	board.classList.remove(o_CLASS);

	if (oTurn) {
		board.classList.add(o_CLASS);
	} else {
		board.classList.add(x_CLASS);
	}
}

function checkWin(currentClass) {
	return winning_combination.some((combination) => {
		return combination.every((index) => {
			console.log(currentClass);
			return cellEl[index].classList.contains(currentClass);
		});
	});
}
