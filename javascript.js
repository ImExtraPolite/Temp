function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
} 

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, operation, num2) {
  const equal = document.querySelector("#equal");

  equal.addEventListener("click", () => {
    if (operation == "+") {
      const display = document.querySelector("#display");

      display.textContent = add(num1, num2);
      // return add(num1, num2);
    } else if (operation == "-") {
      const display = document.querySelector("#display");

      display.textContent = subtract(num1, num2);
      // return subtract(num1, num2);
    } else if (operation == "*") {
      const display = document.querySelector("#display");

      display.textContent = multiply(num1, num2);
      // return multiply(num1, num2);
    } else if (operation == "/") {
      const display = document.querySelector("#display");

      display.textContent = divide(num1, num2);
      // return divide(num1, num2);
    }
  });
}

function refresh() {
  location.reload();
}

function num1() {
  for (let i = 1; i <= 10; i++) {
    const fnum = document.querySelector("#num" + i);
    fnum.addEventListener("click", () => {
      let num1 = "";
      const display = document.querySelector("#display");
      num1 = fnum.textContent;
      display.textContent = display.textContent + Number(num1);

      console.log(display.textContent)
    });
    console.log(display.textContent)
  }
}

function expression() {
  for (let i = 1; i <= 4; i++) {
    let expression1 = "";
    const display = document.querySelector("#display");
    const fexpression = document.querySelector("#expression" + i);

    fexpression.addEventListener("click", () => {
      expression1 = fexpression.textContent;
      display.textContent = display.textContent + expression1;
    })
  }
}

function num2() {
  for (let i = 1; i <= 10; i++) {
    let num2 = "";
    const display = document.querySelector("#display");
    const snum = document.querySelector("#num" + i);

    snum.addEventListener("click", () => {
      num2 = snum.textContent;
      display.textContent = display.textContent + num2;
    })
  }
}

// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let operation = prompt("Enter operation: ");

// console.log(num1());
operate(num1(), expression(), num2());