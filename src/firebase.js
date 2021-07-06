// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJmQsQ_d2IcRpQHObQamDPebtn6ZHUvyw",
  authDomain: "you-review-3c27c.firebaseapp.com",
  projectId: "you-review-3c27c",
  storageBucket: "you-review-3c27c.appspot.com",
  messagingSenderId: "162153903807",
  appId: "1:162153903807:web:5dba2abd4bf6ec7d63b80a",
  measurementId: "G-8X5S4XD5HN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;