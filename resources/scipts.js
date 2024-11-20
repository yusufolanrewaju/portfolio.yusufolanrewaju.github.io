const typed = new Typed('#multiple', {
    strings: ["Frontend Developer", "Flutter Developer", "Software Developer", "Data Entry Specialist", "Graphics Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

let navbar = document.querySelector(".navbar");
let hamburger = document.querySelector("#hamburger");
let tasks = document.querySelector(".services-done");
let content = document.querySelector(".content");
let main = document.querySelector(".main");
let skills = document.querySelector(".skills");
let footer = document.querySelector("footer")

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
})

skills.addEventListener('click', ()=> {
    content.style.display = "none";
    navbar.classList.remove('display');
})

footer.addEventListener('click', ()=> {
    content.style.display = "none";
    navbar.classList.remove('display');
})