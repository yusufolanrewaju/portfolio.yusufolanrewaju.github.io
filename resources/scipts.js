let tabs = document.querySelectorAll('.tab');
let navbar = document.querySelector(".navbar");
let hamburger = document.querySelector("#hamburger");
let tasks = document.querySelector(".services-done");
let content = document.querySelector(".content");
let main = document.querySelector(".main");
let skills = document.querySelector(".skills");
let footer = document.querySelector("footer");



tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const activeTab = document.querySelector('.tab.active');
    
    if (activeTab) {
        activeTab.classList.add('active');

        const targetSection = document.querySelector(activeTab.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


const typed = new Typed('#multiple', {
    strings: ["Frontend Developer", "Flutter Developer", "Software Developer", "Data Entry Specialist", "Graphic Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('display');
    hamburger.classList.toggle('rotate');
    hamburger.classList.toggle('rotate2');
})

tasks.addEventListener('click', ()=> {
    content.style.display === "none" ? content.style.display = "block" : content.style.display = "none";
})

main.addEventListener('click', ()=> {
    content.style.display = "none";
    navbar.classList.remove('display');
    hamburger.classList.remove('rotate');
    hamburger.classList.add('rotate2');
})

skills.addEventListener('click', ()=> {
    content.style.display = "none";
    navbar.classList.remove('display');
    hamburger.classList.remove('rotate');
    hamburger.classList.add('rotate2');
})

footer.addEventListener('click', ()=> {
    content.style.display = "none";
    navbar.classList.remove('display');
    hamburger.classList.remove('rotate');
    hamburger.classList.add('rotate2');
})

other.addEventListener('click', ()=> {
    content.style.display = "none";
    navbar.classList.remove('display');
    hamburger.classList.remove('rotate');
    hamburger.classList.add('rotate2');
})
