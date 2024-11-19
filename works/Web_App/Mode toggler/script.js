let toggle = document.querySelector(".nav-bar input");
const main = document.querySelector(".container");

toggle.addEventListener('click', ()=>{
 let checkBox = toggle.checked;
 if (checkBox) {
    main.style.background = "black";
    main.style.color = "white"
 } else {
     main.style.background = "white";
     main.style.color = "black"
 }
})