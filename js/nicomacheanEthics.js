// Count-functions
function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.length;
}

function countSentences(text) {
  const sentences = text.trim().split(/[\.\?!]+/);
  return sentences.length;
}

function countParagraphs(text) {
  const paragraphs = text.trim().split(/\n\s*\n/);
  return paragraphs.length;
}

// Get the text and put it into the HTML document.
const text = document.getElementById("text");
const words = document.getElementById("words");
const sentences = document.getElementById("sentences");
const paragraphs = document.getElementById("paragraphs");

fetch("../txt/nicomacheanEthics.txt")
  .then((response) => response.text())
  .then((contents) => {
    const replacedContents = contents.replace(/\n\s*\n/g, "<br><br>");
    text.innerHTML = replacedContents;

    // Count-functions
    const wordCount = countWords(contents);
    const sentenceCount = countSentences(contents);
    const paragraphCount = countParagraphs(contents);
    words.innerHTML = `W: ${wordCount}`;
    sentences.innerHTML = `S: ${sentenceCount}`;
    paragraphs.innerHTML = `P: ${paragraphCount}`;
  })
  .catch((error) => console.log(error));
