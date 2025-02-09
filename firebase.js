import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNlCnvdXFakyOw9-K3o_cLelN7pfvC9Lk",
  authDomain: "qolshatyr-1d417.firebaseapp.com",
  projectId: "qolshatyr-1d417",
  storageBucket: "qolshatyr-1d417.appspot.com", 
  messagingSenderId: "222574994068",
  appId: "1:222574994068:web:b403062c5a030377b9ca81",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);