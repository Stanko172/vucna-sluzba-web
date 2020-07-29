//Navigation variables
const hamburger = document.querySelector('.hamburger');
const nav_links = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    nav_links.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
})

//Smooth scroll functions
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var target_position_top = target.getBoundingClientRect().top;
    var start_position = window.pageYOffset;
    var start_time = null;
    
    function scrollAnimation(current_time){
        if(start_time === null) start_time = current_time;
        var diff_time = current_time - start_time;
        var run = ease(diff_time, start_position, target_position_top, duration);
        window.scrollTo(0, run);
        if(diff_time < duration) requestAnimationFrame(scrollAnimation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if(t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t-2)-1) + b;
    }
    
    requestAnimationFrame(scrollAnimation);
}

var link1 = document.querySelector('#link1');
var link2 = document.querySelector('#link2');
var link3 = document.querySelector('#link3');
var link4 = document.querySelector('#link4');
var link5 = document.querySelector('#link5');

link1.addEventListener('click', function(){
    if (window.matchMedia('(max-device-width: 834px)').matches) {
        nav_links.classList.toggle('open');
        links.forEach(link => {
            link.classList.toggle('fade');
        });
        smoothScroll('#section1', 1000);
    }else{
        smoothScroll('#section1', 1000);
    }
});

link2.addEventListener('click', function(){
    if (window.matchMedia('(max-device-width: 834px)').matches) {
        nav_links.classList.toggle('open');
        links.forEach(link => {
            link.classList.toggle('fade');
        });
        smoothScroll('#section2', 1000);
    }else{
        smoothScroll('#section2', 1000);
    }
});

link3.addEventListener('click', function(){
    if (window.matchMedia('(max-device-width: 834px)').matches) {
        nav_links.classList.toggle('open');
        links.forEach(link => {
            link.classList.toggle('fade');
        });
        smoothScroll('#section3', 1000);
    }else{
        smoothScroll('#section3', 1000);
    }
});

link4.addEventListener('click', function(){
    if (window.matchMedia('(max-device-width: 834px)').matches) {
        nav_links.classList.toggle('open');
        links.forEach(link => {
            link.classList.toggle('fade');
        });
        smoothScroll('#section4', 1000);
    }else{
        smoothScroll('#section4', 1000);
    }
});

link5.addEventListener('click', function(){
    smoothScroll('#section2', 1000);
});

link6.addEventListener('click', function(){
    smoothScroll('#section4', 1000);
});