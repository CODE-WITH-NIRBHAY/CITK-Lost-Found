import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8Y5fVmImOY9vaoggFRlf-Wb27SK5QAdg",
  authDomain: "citk-lost-found.firebaseapp.com",
  projectId: "citk-lost-found",
  storageBucket: "citk-lost-found.appspot.com",
  messagingSenderId: "463435825536",
  appId: "1:463435825536:web:223f1bc704834c37aa8165"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
