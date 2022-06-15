
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";





const initializeFirebase=()=>{
    initializeApp(firebaseConfig);
}

export default initializeFirebase;