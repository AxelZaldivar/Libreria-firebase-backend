//importar para utilizar storage
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA2hZ7vc9BdVJJSEXuie5Sk1TEr1W59Z5Q",
    authDomain: "vuefirebase-3fc20.firebaseapp.com",
    projectId: "vuefirebase-3fc20",
    storageBucket: "vuefirebase-3fc20.appspot.com",
    messagingSenderId: "59356587241",
    appId: "1:59356587241:web:006713173289782883bc78"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.storage();