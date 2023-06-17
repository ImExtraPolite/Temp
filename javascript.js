function columns(rowNum) {
  for (let i = 1; i <= rowNum; i++) {
    const container = document.querySelector("#container");
    const squares = document.createElement("div");
    squares.classList.add("row" + i);
    squares.style.cssText = "display: flex; margin: auto; justify-content: center;";

    container.appendChild(squares);
  }
}

function rows(columnNum) {
  for (let i = 1; i <= columnNum; i++) {
    for (let j = 1; j <= columnNum; j++) {
      const rows = document.querySelector(".row" + i);
      const squares = document.createElement("div");
      squares.style.cssText = "padding: 20px; border: solid black;";

      rows.appendChild(squares);

      squares.addEventListener("mouseover", () => {
        squares.style.cssText = "background-color: black; border: solid black; padding: 20px;";
      });
    }
  }
}

function num() {
  num1 = Number(prompt("Enter a number: "));

  return num1
}


// console.log(num());
columns(num());
rows(num());
