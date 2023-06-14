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
    return playerSelection + " " + computerSelection + " tie game";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return playerSelection + " " + computerSelection + " you lose";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return playerSelection + " " + computerSelection + " you win";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return playerSelection + " " + computerSelection + " you win";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return playerSelection + " " + computerSelection + " tie game";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return playerSelection + " " + computerSelection + " you lose";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return playerSelection + " " + computerSelection + " you lose";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return playerSelection + " " + computerSelection + " you win";
  } else {
    return playerSelection + computerSelection + "tie game";
  }
}

let userChoice = prompt("Rock, paper scissors: ");

console.log(playGame(userChoice, getComputerChoice()));