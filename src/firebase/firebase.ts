import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBg35mK74SlnfrpeYCMhNndtKvzFYys3JY",
  authDomain: "disney-wonder.firebaseapp.com",
  projectId: "disney-wonder",
  storageBucket: "disney-wonder.appspot.com",
  messagingSenderId: "143965504744",
  appId: "1:143965504744:web:616d52dd50e438694ef55d",
  measurementId: "G-2HBQPTJ4KB",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
