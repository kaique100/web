const hambuguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hambuguer.addEventListener("click", ()=>{
    hambuguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})