const mainMenu = document.getElementById('nav-items');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    mainMenu.style.display='flex';
    mainMenu.style.left='0';
}
function close(){
    mainMenu.style.left = '100%';
}