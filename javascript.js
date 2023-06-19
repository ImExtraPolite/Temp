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

  });

  if (operation == "+") {
    return add(num1, num2);
  } else if (operation == "-") {
    return subtract(num1, num2);
  } else if (operation == "*") {
    return multiply(num1, num2);
  } else if (operation == "/") {
    return divide(num1, num2);
  }
}

function refresh() {
  location.reload();
}

let num1 = "";
let expression = "";
const display = document.querySelector("#display");
const fnum = document.querySelector("button");

fnum.addEventListener("click", () => {
  num1 = fnum.textContent;
  expression = expression + num1;
  display.textContent = expression;

  console.log(num1);
  console.log(expression);
  console.log(display.textContent);
})


// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let operation = prompt("Enter operation: ");

// console.log(operate(num1, operation, num2));