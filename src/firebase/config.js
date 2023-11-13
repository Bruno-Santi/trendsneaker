// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore, getDoc, updateDoc } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyDY8ZVVNnzJJt7rE5EnIyYJi2KPQN23yVM",
  authDomain: "nikeshoestore-dc74b.firebaseapp.com",
  projectId: "nikeshoestore-dc74b",
  storageBucket: "nikeshoestore-dc74b.appspot.com",
  messagingSenderId: "1076931624841",
  appId: "1:1076931624841:web:221a51c6116e35967f2b58",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fireBaseDB = getFirestore(app);
