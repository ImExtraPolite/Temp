function columns() {
  for (let i = 1; i <= 16; i++) {
    const container = document.querySelector("#container");
    const squares = document.createElement("div");
    squares.classList.add("row" + i);
    squares.style.cssText = "display: flex;";


    container.appendChild(squares);
  }
}

function rows() {
  for (let i = 1; i <= 16; i++) {
    for (let j = 1; j <= 16; j++) {
      const rows = document.querySelector(".row" + i);
      const squares = document.createElement("div");
      squares.style.cssText = "border: solid black; padding: 20px;";

      rows.appendChild(squares);
    }
  }
}

columns();
rows();
