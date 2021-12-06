// ------  Mobile menu configuration -------

let hamburgerMenu = document.querySelector(".fa-bars");
let mobileNav = document.querySelector(".mobile_nav");

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle("mobile_nav_open")
})