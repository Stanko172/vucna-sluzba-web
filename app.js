//Navigacija

const hamburger = document.querySelector('.hamburger');
const nav_links = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    nav_links.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
})