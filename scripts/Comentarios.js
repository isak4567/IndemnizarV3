import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'
import { db } from './firebaseConfig.js';

        // agrega datos a la coleccion
/*         try {
        const docRef = await addDoc(collection(db, "Comentarios"), {
            persona: "el perro",
            comentario: "que pagina de mierda",
        });
        } catch (e) {
        console.error("Error adding document: ", e);
        } */


        //Borrar comentario
        /* await deleteDoc(doc(db, "Comentarios", "1")); */