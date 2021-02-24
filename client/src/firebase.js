// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBvRmVkRYu9zERtQkThK2wbVLFLtpN2FMY",
    authDomain: "the-pantry-93d96.firebaseapp.com",
    projectId: "the-pantry-93d96",
    storageBucket: "the-pantry-93d96.appspot.com",
    messagingSenderId: "803523022705",
    appId: "1:803523022705:web:0e4b0de80e038ae99670d0",
    measurementId: "G-FM44Y9RL2L"

};

firebase.initializeApp(firebaseConfig);

export default firebase;