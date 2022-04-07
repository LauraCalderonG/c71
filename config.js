
import firebase from 'firebase';
const firebaseConfig= {
  apiKey: "AIzaSyAp2v5A3maAweHki2_pnp2jfd7E6B_Q5ac",
  authDomain: "library-db97b.firebaseapp.com",
  databaseURL: "https://library-db97b.firebaseio.com",
  projectId: "library-db97b",
  storageBucket: "library-db97b.appspot.com",
  messagingSenderId: "194472461828",
  appId: "1:194472461828:web:1cab00cfe202a48a395751"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}// you may remove the if condition if the app is not getting initialized.

export default firebase.firestore();

