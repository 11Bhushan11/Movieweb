// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvQ0vSo1px0URNeNoltbYYC0clXJiIvQ4",
  authDomain: "movieverse-238ea.firebaseapp.com",
  projectId: "movieverse-238ea",
  storageBucket: "movieverse-238ea.appspot.com",
  messagingSenderId: "880579032127",
  appId: "1:880579032127:web:ab092fe65995178692748a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db , "movies");
export const reviewsRef = collection(db , "reviews");
export const usersRef = collection(db , "users");

export default app;