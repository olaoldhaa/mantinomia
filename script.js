// Import Firebase and Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Initialize Firebase with your project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgeBQl-f54OEp1_Aq7E6o88x9wpZ400qA",
  authDomain: "mantinomia-5d9a0.firebaseapp.com",
  projectId: "mantinomia-5d9a0",
  storageBucket: "mantinomia-5d9a0.appspot.com",
  messagingSenderId: "1020973233543",
  appId: "1:1020973233543:web:b15ed73b4d531483bd0f22",
  measurementId: "G-ZJVH0MQ33M",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save the edited text to Firestore
function saveEditedText() {
  const textContent = textElement.textContent;

  // Save the text content to Firestore
  db.collection("texts")
    .doc("editedText")
    .set({ content: textContent })
    .then(() => {
      console.log("Text saved successfully");
    })
    .catch((error) => {
      console.error("Error saving text:", error);
    });
}

// Call the function when the user finishes editing the text
textElement.addEventListener("blur", saveEditedText);
