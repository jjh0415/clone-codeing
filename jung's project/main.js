const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.nav__menu');
const icon = document.querySelector('.nav__icon');

toggle.addEventListener('click',() => {
    menu.classList.toggle('active');
    icon.classList.toggle('active');
});