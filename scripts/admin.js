import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


const adForm = document.querySelector(".adminSect");
const cerrarForm = adForm.querySelector(".cerrar");
const adminForm = adForm.querySelector("form");

export function FormAdmin() {
  adForm.classList.remove("disNone");
  return 0;
}

cerrarForm.addEventListener('click', () => adForm.classList.add("disNone"));

adminForm.addEventListener('submit', (e)=> {
  e.preventDefault();

  let email = adminForm.querySelector("#adminEmail").value;
  let contr = adminForm.querySelector("#adminCont").value;

  enterAdmin(email, contr);
});


const enterAdmin = async function (email, contr) {

  const auth = getAuth();

  if (verActUser()) {
    alert("ya estas dentro");
    adForm.classList.add("disNone");
  } 
  else {

    signInWithEmailAndPassword(auth, email, contr)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Entro");
        adForm.classList.add("disNone");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: formulario equivocado o algo malo paso");
      });
  }
}

export const verActUser = () => {
  const auth = getAuth();
  const userAct = auth.currentUser;
  return userAct;
};

