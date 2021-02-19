import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCxP9XOe0wsqxDBnj4RlEn0DKan0EMRmZE",
    authDomain: "story-hub-65419.firebaseapp.com",
    databaseURL: "https://story-hub-65419-default-rtdb.firebaseio.com",
    projectId: "story-hub-65419",
    storageBucket: "story-hub-65419.appspot.com",
    messagingSenderId: "353639158320",
    appId: "1:353639158320:web:86c7cdebe10439707c53f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();