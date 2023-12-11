import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJybi_fvzykWxhhtgyYJ9ro6WQj7v6LBM",
    authDomain: "wolf-hack-academy.firebaseapp.com",
    projectId: "wolf-hack-academy",
    storageBucket: "wolf-hack-academy.appspot.com",
    messagingSenderId: "714700225261",
    appId: "1:714700225261:web:698f125349a2b180bb6ae4",
    measurementId: "G-2NK5KJN21S"
};

initializeApp(firebaseConfig)

//const auth = getAuth(app);
const db = getFirestore()
export default db