// import
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';
import { db } from './firebaseConfig.js';

// Video



// Muestra de algunos comentarios
// Mostrar
const querySnapshot = await getDocs(collection(db, "Comentarios"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().persona}`);
});