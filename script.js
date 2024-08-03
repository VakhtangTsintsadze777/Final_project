let burger = document.querySelector(".fa-bars");
let xmark = document.querySelector(".fa-circle-xmark");
let header_nav = document.querySelector(".header_nav");

burger.addEventListener("click", ()=>{
    header_nav.classList.add("show");
    burger.style.display = "none";
    xmark.style.display = "flex"
})

xmark.addEventListener("click", ()=>{
    header_nav.classList.remove("show");
    burger.style.display = "flex";
    xmark.style.display = "none"
})