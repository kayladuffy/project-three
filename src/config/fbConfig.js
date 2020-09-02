import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBUBK74oTLNP3aU9Od_e_KZnShSF8LHWHE",
    authDomain: "todo-project-manager.firebaseapp.com",
    databaseURL: "https://todo-project-manager.firebaseio.com",
    projectId: "todo-project-manager",
    storageBucket: "todo-project-manager.appspot.com",
    messagingSenderId: "914519477488",
    appId: "1:914519477488:web:9b3a054e46cf8531828635"
  };

  firebase,initializeApp(config);

  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;