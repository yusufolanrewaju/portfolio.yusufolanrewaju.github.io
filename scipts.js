const typed = new Typed('#multiple', {
    strings: ["Frontend Developer", "Flutter Developer", "Software Developer", "Data Entry Specialist", "Graphics Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

let navbar = document.querySelector(".navbar");
let hamburger = document.querySelector(".hamburger")
let tasks = document.querySelector(".services-done")
let content = document.querySelector(".content")

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('display');
})

tasks.addEventListener('click', ()=> {
    content.style.display === "none" ? content.style.display = "block" : content.style.display = "none";
})