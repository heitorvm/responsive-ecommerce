const bar = document.getElementById('bar');
const btnClose = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if(btnClose) {
    btnClose.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}