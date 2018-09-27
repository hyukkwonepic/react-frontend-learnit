import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCYJ97CVIrZv6mgGlb1_PwW0Kg7IhkX5Dg",
  authDomain: "authentication-e04e4.firebaseapp.com",
  databaseURL: "https://authentication-e04e4.firebaseio.com",
  projectId: "authentication-e04e4",
  storageBucket: "authentication-e04e4.appspot.com",
  messagingSenderId: "91235170341"
};
firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

export {
  db
};