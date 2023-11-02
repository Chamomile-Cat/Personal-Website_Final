const words = document.querySelector(".words");
const result = document.querySelector(".result");

function countWords(words) {
  const wordList = words.innerText.split(" ");
  return wordList.length;
}

result.innerText = `Word count :  ${String(countWords(words))} words`;
