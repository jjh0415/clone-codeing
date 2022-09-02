const tooglebtn = document.querySelector('.navbar__tooglebtn');
const menu = document.querySelector('.navbar__menu');
const links = document.querySelector('.navbar__links');

tooglebtn.addEventListener('click',() => {
    menu.classList.toggle('active');
    links.classList.toggle('active');
});