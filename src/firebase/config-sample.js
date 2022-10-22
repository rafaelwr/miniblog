import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Preencher com os dados do Firebase
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };