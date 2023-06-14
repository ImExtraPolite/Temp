function add7(num1) {
  return num1 + 7;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function captilize(word) {
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    if (i == 0) {
      newWord = newWord + word[0].toUpperCase();
    } else {
      newWord = newWord + word[i].toLowerCase();
    }
  }

  return newWord;
}

function lastLetter(word) {
  let wordLength = word.length - 1;

  return word[wordLength];
}

console.log(lastLetter("abcd"));