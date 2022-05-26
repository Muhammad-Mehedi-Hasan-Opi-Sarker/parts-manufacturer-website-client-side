import {getAuth} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3JaDUniusMGxmwc5zSqUEhH_Ne28vqIM",
  authDomain: "parts-manufacturer-6301a.firebaseapp.com",
  projectId: "parts-manufacturer-6301a",
  storageBucket: "parts-manufacturer-6301a.appspot.com",
  messagingSenderId: "314282136272",
  appId: "1:314282136272:web:e70b96cab20a09bfa344d5"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;