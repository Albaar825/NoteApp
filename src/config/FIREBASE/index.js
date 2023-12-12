import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDNzjyVnNPb2LaMytuI0lnFBZTgnwoQNWs",
    authDomain: "noteapp-4c5df.firebaseapp.com",
    projectId: "noteapp-4c5df",
    storageBucket: "noteapp-4c5df.appspot.com",
    messagingSenderId: "47656871555",
    appId: "1:47656871555:web:81beeed1190e9848c0ddb6"
});

const FIREBASE = firebase;

export default FIREBASE;