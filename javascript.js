function getComputerChoice() {
  let randomNum =  Math.floor(Math.random() * 3) + 1;

  if (randomNum == 1) {
    return "rock";
  } else if (randomNum == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playGame(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == "rock" && computerSelection == "rock") {
    return "tie game";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "you lose";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "you win";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "you win";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "tie game";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "you lose";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "you lose";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "you win";
  } else {
    return "tie game";
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results")

rock.addEventListener("click", () => {
  let game = playGame(rock.textContent, getComputerChoice());

  if (game == "tie game") {
    results.textContent = "tie game";
  } else if (game == "you win") {
    results.textContent = "you win";
  } else {
    results.textContent = "you lose";
  }
});

paper.addEventListener("click", () => {
  let game = playGame(paper.textContent, getComputerChoice());

  if (game == "tie game") {
    results.textContent = "tie game";
  } else if (game == "you win") {
    results.textContent = "you win";
  } else {
    results.textContent = "you lose";
  }});

scissors.addEventListener("click", () => {
  let game = playGame(scissors.textContent, getComputerChoice());

  if (game == "tie game") {
    results.textContent = "tie game";
  } else if (game == "you win") {
    results.textContent = "you win";
  } else {
    results.textContent = "you lose";
  }});