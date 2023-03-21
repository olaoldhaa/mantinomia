// The hardcoded password for enabling editing (replace 'your-password' with your chosen password)
const editPassword = "mantinnomia";

// Get the input field, button, and the editable text element
const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlockButton");
const textElement = document.querySelector(".main-content p");

// Function to check if the entered password is correct and enable editing
function unlockEditing() {
  if (passwordInput.value === editPassword) {
    textElement.contentEditable = "true";
    textElement.focus(); // Focus on the text element for editing
    passwordInput.value = ""; // Clear the input field
  } else {
    alert("Incorrect password. Please try again.");
    passwordInput.value = "";
  }
}

// Attach the function to the button's click event
unlockButton.addEventListener("click", unlockEditing);
