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
    return playerSelection + " " + computerSelection + "tie game";
  }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  console.log(playGame(rock.textContent, getComputerChoice()));
});

paper.addEventListener("click", () => {
  console.log(playGame(paper.textContent, getComputerChoice()));
});

scissors.addEventListener("click", () => {
  console.log(playGame(scissors.textContent, getComputerChoice()));
});