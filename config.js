import firebase from 'firebase';

// Agregar SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD3JA1Z3xXZb7HskLlL25J8O-Ik_MLhIfk",
  authDomain: "vota-en-equipo.firebaseapp.com",
  databaseURL: "https://vota-en-equipo-default-rtdb.firebaseio.com",
  projectId: "vota-en-equipo",
  storageBucket: "vota-en-equipo.appspot.com",
  messagingSenderId: "1048095225798",
  appId: "1:1048095225798:web:84fc3bee16004c38b4a4c7"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
