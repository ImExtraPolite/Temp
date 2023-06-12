function add7(num1) {
  return num1 + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function captilize(word) {
  let sWord = word.toLowerCase();
  let newWord = "";

  for(let i = 0; i < sWord.length; i++) {
    sWord[0] = sWord.charAt(0).toUpperCase();

    newWord = newWord + sWord[i];
  }

  return newWord;
}


console.log(captilize("HELLO"));