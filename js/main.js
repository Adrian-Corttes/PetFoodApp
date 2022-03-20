//funcionamiento del menu-btn
let navbar = document.querySelector('.navbar');

document.querySelector('#menu__btn').onclick = () =>{
   navbar.classList.toggle('active');
}

//onscroll to the header
window.onscroll = () =>{
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }
   else{
      document.querySelector('.header').classList.remove('active');
   }
}

//para que se ejecute la funcion, al terminar de cargar la pagina
window.onload = () =>{
   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}