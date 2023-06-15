function columns() {
  for (let i = 1; i <= 16; i++) {
    const container = document.querySelector("#container");
    const squares = document.createElement("div");

    container.appendChild(squares);
  }
}

function rows() {
  for (let i = 1; i <= 16; i++) {
    const container = document.querySelector("#container");
    const squares = document.createElement("div");

    container.appendChild(squares);
  }
}





columns();
rows();
