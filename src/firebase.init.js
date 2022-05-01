// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI4yBMGmiJVDUY1PtAzJ_mwAYokaNLX2I",
  authDomain: "assignment-11-cab40.firebaseapp.com",
  projectId: "ssignment-11-cab40",
  storageBucket: "assignment-11-cab40.appspot.com",
  messagingSenderId: "1053817568448",
  appId: "1:1053817568448:web:4059a8102cbde9bde84125",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
