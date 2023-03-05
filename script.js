const header = document.getElementById("header");
const menu = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    header.classList.toggle("menu-active");
});

document.querySelectorAll("#navbar a").forEach(anchor => {
    anchor.addEventListener('click', () => {        
        header.classList.remove("menu-active");
    });
}); 