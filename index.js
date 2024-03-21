const computerChoiceDisplay = document.getElementById("Computer-choice");
const userChoiceDisplay = document.getElementById("User-choice");
const resultDisplay = document.getElementById("Result");
const possibleChoice = document.querySelectorAll("button");

let userChoice;
let computerChoice;
let result;

possibleChoice.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "Papper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "it's a draw!";
  }

  if (computerChoice === "Rock" && userChoice === "Papper") {
    result = "You Win!";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You lose!";
  }
  if (computerChoice === "Papper" && userChoice === "Scissors") {
    result = "You Win!";
  }
  if (computerChoice === "Papper" && userChoice === "Rock") {
    result = "You lose!";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You Win!";
  }
  if (computerChoice === "Scissors" && userChoice === "Papper") {
    return (result = "You lose!");
  }
  resultDisplay.innerHTML = result;
}
