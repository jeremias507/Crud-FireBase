import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCx1qWY7g5OzdIpLP3ExtvLNfSSAJ5jsAg",

  authDomain: "fir-crud-97aa6.firebaseapp.com",

  projectId: "fir-crud-97aa6",

  storageBucket: "fir-crud-97aa6.appspot.com",

  messagingSenderId: "635515158820",

  appId: "1:635515158820:web:568e706cc54b007dc333b1"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db}