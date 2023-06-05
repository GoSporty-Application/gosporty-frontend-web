import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {

    apiKey: "AIzaSyCLtNxCZ8v0vbdV99OcYjuH2Q2eOH7UqkY",
    authDomain: "gosporty-android-project.firebaseapp.com",
    projectId: "gosporty-android-project",
    storageBucket: "gosporty-android-project.appspot.com",
    messagingSenderId: "1034639644752",
    appId: "1:1034639644752:web:80ca7b4f6ef6b98e1e1955",
    measurementId: "G-PLWNSK0FLY"

};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const storage = firebase.storage();

export { firestore, storage, firebase };

//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);

//export { db as firestore, app };
