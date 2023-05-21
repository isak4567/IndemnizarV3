import { collection, getDocs, addDoc, doc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'
import { db } from './firebaseConfig.js';
import { FormAdmin, verActUser } from './admin.js';

const comForm = document.querySelector('.ContactoForm');
let formComNombre = comForm.querySelector('#formComNombre');
let formComDesc = comForm.querySelector('#formComDesc');

comForm.addEventListener('submit', (e) => {

        e.preventDefault();
        formComNombre = comForm.querySelector('#formComNombre').value;
        formComDesc = comForm.querySelector('#formComDesc').value;
        let noNum = formComNombre.replace(/[^0-9]+/g, "");
         // true

        if (formComNombre.toLowerCase() == "admin") {
                FormAdmin();
        }
        else if (noNum.length > 0) {
                alert("No se permite numeros en el nombre.");
        }
        else if (formComNombre.length < 4 || formComDesc.length < 12) {
                alert("El nombre debe ser de al menos 4 caracteres y el comentario de 12 caracteres.");
        }
        else {
                agregadorComentarios(formComNombre, formComDesc);
                ArmadorComentarios();
        }
});

const agregadorComentarios = async function (nombre, comentario) {
try {
        const docRef = await addDoc(collection(db, "Comentarios"), {
        persona: nombre,
        comentario: comentario,
 });
 } catch (e) {
        console.error("Error adding document: ", e);
  } 
}

let RefCom = document.querySelector('.Comentarios');

ArmadorComentarios();

async function ArmadorComentarios() {
        const querySnapshot = await getDocs(collection(db, "Comentarios"));
        RefCom.innerHTML = "";
        if (verActUser()) {
                querySnapshot.forEach((doc) => {
                        RefCom.innerHTML += `<div class="referencia">
                                                <p class="nombreRef">${doc.data().persona}</p>
                                                <p class="comRef">${doc.data().comentario}</p>
                                                <button class="borrarComent" id="${doc.id}">borrar</button>
                                            </div>`
                });
                const borrarCom = RefCom.querySelectorAll(".borrarComent");
                borrarCom.forEach((el)=> el.addEventListener("click", BorrarComent));

        } else {
                querySnapshot.forEach((doc) => {
                        RefCom.innerHTML += `<div class="referencia">
                                                <p class="nombreRef">${doc.data().persona}</p>
                                                <p class="comRef">${doc.data().comentario}</p>
                                            </div>`
                });
        }
}


function BorrarComent(e) {
        Swal.fire({
                title: '¿Borrar comentario?',
                color: '#0A6B76',
                background: 'white',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: 'green',
                cancelButtonColor: '#0A6B76',
                confirmButtonText: 'Borrar'
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteComent(e.target.id);
                    Swal.fire({title:'El comentario fue borrado',color: '#0A6B76',background:'white',confirmButtonColor: '#0A6B76'});
                }
            })
}

const deleteComent = async function (id) {
        await deleteDoc(doc(db, "Comentarios", id));
        ArmadorComentarios();
}
        