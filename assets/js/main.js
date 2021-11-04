let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    menuBar.classList.toggle('active');
} 


window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    menuBar.classList.remove('active');
} 