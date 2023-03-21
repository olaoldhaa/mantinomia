// Get the DOM element with an ID of "text" and store it in a variable called "text"
const text = document.getElementById("text");

// Fetch the contents of the text file "mantinomia.txt" and return a Promise
fetch("mantinomia.txt")
  // When the Promise is resolved, convert the response to text using the "text()" method
  .then((response) => response.text())
  // When the text data is available, replace paragraph spaces with <br><br> using a regular expression
  .then((contents) => {
    const replacedContents = contents.replace(/\n\s*\n/g, "<br><br>");

    // Set the "innerHTML" property of the "text" element to the replaced text data
    text.innerHTML = replacedContents;
  })
  // If there is an error, log the error message to the console
  .catch((error) => console.log(error));
