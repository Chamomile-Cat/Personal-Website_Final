const words = document.querySelector(".words");
const result = document.querySelector(".result");

function countWords(words) {
  const organizedWords = words.innerText.replaceAll("\n", " ");
  const wordList = organizedWords.split(" ");

  return wordList.length;
}

result.innerText = `Word count :  ${String(countWords(words))} words`;
