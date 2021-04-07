import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCLm6SfQwTu9OujObaU8_HDhLJqdXP7WEQ",
    authDomain: "whatsapp-clone-73667.firebaseapp.com",
    projectId: "whatsapp-clone-73667",
    storageBucket: "whatsapp-clone-73667.appspot.com",
    messagingSenderId: "993438237159",
    appId: "1:993438237159:web:16edc9baefd81ca34abd42"
  };

  const app=!firebase.apps.length?firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider}