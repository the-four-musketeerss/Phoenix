import firebase from "firebase/app";
import "firebase/storage";

 var firebaseConfig = {
   apiKey: "AIzaSyCBKbVmWzPg8MIlGOFcWHiTaHK1uqN2VoE",
   authDomain: "phoenix-662d7.firebaseapp.com",
   databaseURL: "https://phoenix-662d7.firebaseio.com",
   projectId: "phoenix-662d7",
   storageBucket: "phoenix-662d7.appspot.com",
   messagingSenderId: "861996400683",
   appId: "1:861996400683:web:90c9676dd6de01b8"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 const storage = firebase.storage()

export { storage, firebase as default };
