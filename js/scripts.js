'use strict';

const hamburger = document.querySelector('.material-icons');
const close = document.querySelector('.navigation .material-icons');
const menuDiv = document.querySelector('.navigation'); 

hamburger.addEventListener('click', () => {

    menuDiv.classList.add('showMenu');
});

close.addEventListener('click', () => {

    menuDiv.classList.remove('showMenu');
});

const linksMenu = document.querySelectorAll('.navigation a');

linksMenu.forEach(elem => {
    elem.addEventListener('click', () => {
        
        menuDiv.classList.remove('showMenu');
    })
})