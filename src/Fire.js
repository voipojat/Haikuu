import firebase from 'firebase'
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCeemQgV4-8NYJcRe2UNfmkH55xzmxAtNI",
    authDomain: "novelly-b4faf.firebaseapp.com",
    databaseURL: "https://novelly-b4faf.firebaseio.com",
    projectId: "novelly-b4faf",
    storageBucket: "novelly-b4faf.appspot.com",
    messagingSenderId: "963778951991",
    appId: "1:963778951991:web:3c65c600e2e30d85fcf8b2",
    measurementId: "G-6HJ9KFW2KP"
};

firebase.initializeApp(config);

export default firebase