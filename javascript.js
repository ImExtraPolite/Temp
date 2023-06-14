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
const results = document.querySelector("#results");
const wScore = document.querySelector("#wScore");
const lScore = document.querySelector("#lScore");
const tScore = document.querySelector("#tScore");

let tie = 0;
let win = 0;
let lose = 0;

rock.addEventListener("click", () => {
  let game = playGame(rock.textContent, getComputerChoice());

  if (tie < 5 && win < 5 && lose < 5) {
    if (game == "tie game") {
      tie = tie + 1;
      tScore.textContent = tie;
      results.textContent = "tie game";
    } else if (game == "you win") {
      win = win + 1;
      wScore.textContent = win;
      results.textContent = "you win";
    } else if (game == "you lose"){
      lose = lose + 1;
      lScore.textContent = lose;
      results.textContent = "you lose";
    }
  }

});


paper.addEventListener("click", () => {
  let game = playGame(paper.textContent, getComputerChoice());

  if (tie < 5 && win < 5 && lose < 5) {
    if (game == "tie game" || tie < 5) {
      tie = tie + 1;
      tScore.textContent = tie;
      results.textContent = "tie game";
    } else if (game == "you win" || tie < 5) {
      win = win + 1;
      wScore.textContent = win;
      results.textContent = "you win";
    } else if (game == "you lose" || lose < 5) {
      lose = lose + 1;
      lScore.textContent = lose;
      results.textContent = "you lose";
    }
  }
});

scissors.addEventListener("click", () => {
  let game = playGame(scissors.textContent, getComputerChoice());

  if (tie < 5 && win < 5 && lose < 5) {
    if (game == "tie game" || tie < 5) {
      tie = tie + 1;
      tScore.textContent = tie;
      results.textContent = "tie game";
    } else if (game == "you win" || win < 5) {
      win = win + 1;
      wScore.textContent = win;
      results.textContent = "you win";
    } else if (game == "you lose" || win < 5){
      lose = lose + 1;
      lScore.textContent = lose;
      results.textContent = "you lose";
    }
  }
});

