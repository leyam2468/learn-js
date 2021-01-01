let userScore = 0;
let compScore = 0;

const userElSpan = document.querySelector(".s-user");
const compElSpan = document.querySelector(".s-comp");

const resultDiv = document.querySelector(".result");

const choices = document.querySelectorAll(".choice");
const rockDiv = document.querySelector("#rock");
const paperDiv = document.querySelector("#paper");
const scissorsDiv = document.querySelector("#scissors");

// Computer choices
compChoice = () => {
	const compChoices = ["rock", "paper", "scissors"];
	let num = Math.floor(Math.random() * 3);
	return compChoices[num];
};

function win(compu) {
	userScore++;

	resultDiv.style.color = "green";
	resultDiv.innerHTML = "WIN";

	userElSpan.innerHTML = userScore;
}
function lose() {
	compScore++;

	resultDiv.style.color = "red";
	resultDiv.innerHTML = "LOSE";

	compElSpan.innerHTML = compScore;
}
function draw() {
	resultDiv.style.color = "gray";
	resultDiv.innerHTML = "Draw";
}

choices.forEach((item) => {
	item.addEventListener("click", () => {
		const computer = compChoice();

		switch (item.id + ":" + computer) {
			case "rock:rock":
			case "paper:paper":
			case "scissors:scissors":
				draw();
				break;
			case "rock:scissors":
			case "paper:rock":
			case "scissors:paper":
				win(computer);
				break;
			case "rock:paper":
			case "paper:scissors":
			case "scissors:rock":
				lose();
				break;
		}
	});
});
