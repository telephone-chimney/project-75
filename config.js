import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAe9UFaxT8TG6oyWCnJXKTLVzSY_G8LYyM",
  authDomain: "e-library-cb150.firebaseapp.com",
  projectId: "e-library-cb150",
  storageBucket: "e-library-cb150.appspot.com",
  messagingSenderId: "688477239053",
  appId: "1:688477239053:web:56aaef2203f9809a62e244"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
