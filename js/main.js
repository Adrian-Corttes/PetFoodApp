//funcionamiento del menu-btn
let navbar = document.querySelector('.navbar');

document.querySelector('#menu__btn').onclick = () =>{
   navbar.classList.toggle('active');
}