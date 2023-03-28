// Denna fil skall innehålla JavaScript (JS)

const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener('click', togglemenu);

function togglemenu() {
    nav.classList.toggle("active");
}
