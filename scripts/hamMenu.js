const hamMenu = document.querySelector('.hamMenu');
const nav = document.querySelector('nav ul');

hamMenu.addEventListener('click', ()=> {
    nav.classList.toggle('disflex');
});