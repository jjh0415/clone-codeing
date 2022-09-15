const morebtn = document.querySelector('.info .metadate .morebtn');
const title = document.querySelector('.info .metadate .title');

morebtn.addEventListener('click',() => {
    morebtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});