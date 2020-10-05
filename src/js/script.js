const gamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu__close');
const menuOverlay = document.querySelector('.menu__overlay');

gamburger.addEventListener('click', function(){
    menu.classList.add('active');
});

menu.addEventListener('click', function(){
    menu.classList.remove('active');
});

menuClose.addEventListener('click', function(){
    menu.classList.remove('active');
});

menuOverlay.addEventListener('click', function(){
    menu.classList.remove('active');
});