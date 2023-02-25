// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAtdKeo90udzNmRlhKDROamffMCsB6FTi4",
    authDomain: "project-aroma-61c87.firebaseapp.com",
    projectId: "project-aroma-61c87",
    storageBucket: "project-aroma-61c87.appspot.com",
    messagingSenderId: "687346918937",
    appId: "1:687346918937:web:294ba2add50b6210d62c88",
    measurementId: "G-KFJ4EXGE0G"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = serverTimestamp();
export { auth, provider, timestamp };
