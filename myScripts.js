console.log("Loading...");
const hamburger = document.getElementById("hamburger");
hamburger.classList.add("test");
const nav = document.getElementById("nav");
var hidden = true;
var x = window.innerWidth;
if (x < 768) hide();
console.log("Done!");

function hide () {
    nav.classList.remove("show");
    nav.classList.add("hidden");
    hidden = true;
    console.log("Navigation: hidden");
}

function show () {
    nav.classList.remove("hidden");
    nav.classList.add("show");
    hidden = false;
    console.log("Navigation: show");
}

function toggleMenu () {
    console.log("Navigation: toggling...");
    if (hidden) {
        show();
    } else {
        hide();
    }
    console.log("Navigation: Done!");
}

function checkNav() {
    var x = window.innerWidth;
    if (x >= 768) show();
    if (x < 768) hide();
}

hamburger.addEventListener('click', toggleMenu)
window.addEventListener("resize", checkNav)