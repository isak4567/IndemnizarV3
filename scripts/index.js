// import
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';
import { db } from './firebaseConfig.js';


// Muestra de algunos comentarios
// Mostrar
let indexCom = document.querySelector('#indexCom');

const querySnapshot = await getDocs(collection(db, "Comentarios"));
querySnapshot.forEach((doc) => {

    indexCom.innerHTML += `<div class="referencia">
                    <p class="nombreRef">${doc.data().persona}</p>
                    <p class="comRef">${doc.data().comentario}</p>
                </div>`

    //console.log(`${doc.id} => ${doc.data().persona}`);
});