import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_TpztiyzIYzP3grOLiRZA-mrG2QrXIbw",
    authDomain: "firebacetutorial.firebaseapp.com",
    projectId: "firebacetutorial",
    storageBucket: "firebacetutorial.appspot.com",
    messagingSenderId: "949614364792",
    appId: "1:949614364792:web:2629fcfe70995d3f90458d",
    measurementId: "G-9MN2LE58YG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
