// import
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';
import { db } from './firebaseConfig.js';

// Muestra algunos comentarios
let indexCom = document.querySelector('#indexCom');

const querySnapshot = await getDocs(collection(db, "Comentarios"));
let cont = 0;

querySnapshot.forEach((doc) => {
    console.log(querySnapshot[cont]);
    if (cont < 2) {
        indexCom.innerHTML += `<div class="referencia">
                                    <p class="nombreRef">${doc.data().persona}</p>
                                    <p class="comRef">${doc.data().comentario}</p>
                                </div>`;
        cont++;
    }
});

