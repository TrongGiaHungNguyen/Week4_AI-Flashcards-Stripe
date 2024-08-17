// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9bjxJCrm78kjsSS75Jou7ooXN0x62qG8",
  authDomain: "flashcardsaas-2a5c1.firebaseapp.com",
  projectId: "flashcardsaas-2a5c1",
  storageBucket: "flashcardsaas-2a5c1.appspot.com",
  messagingSenderId: "882969213078",
  appId: "1:882969213078:web:a207affb182c96497f6ab7",
  measurementId: "G-017VP0CT0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}