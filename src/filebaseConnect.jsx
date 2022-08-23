// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyCdaW0n5fbaxmfy0aRf_g9gyTFl7z3b_rA",
    authDomain: "react-filebase-29d73.firebaseapp.com",
    projectId: "react-filebase-29d73",
    storageBucket: "react-filebase-29d73.appspot.com",
    messagingSenderId: "191823836423",
    appId: "1:191823836423:web:62a201255e3fdd1af841a2",
    measurementId: "G-NNXN4KEH8E"
};


firebase.initializeApp(config);

export const firestore = firebase.firestore();

