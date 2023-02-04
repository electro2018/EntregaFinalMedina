// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAli6JoXDobHAVh5laZbbBgAr5uRk4UvOs",
  authDomain: "profinal-2023.firebaseapp.com",
  projectId: "profinal-2023",
  storageBucket: "profinal-2023.appspot.com",
  messagingSenderId: "257224628248",
  appId: "1:257224628248:web:ea614c2cd26b01975c4b6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)