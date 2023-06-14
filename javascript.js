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

