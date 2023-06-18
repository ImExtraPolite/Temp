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

// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let operation = prompt("Enter operation: ");

// console.log(operate(num1, operation, num2));