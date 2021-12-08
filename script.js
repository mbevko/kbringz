// ------  Mobile menu functionality -------

let hamburgerMenu = document.querySelector(".fa-bars");
let mobileNav = document.querySelector(".mobile_nav");

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle("mobile_nav_open")
})

// mobile nav close menu on navigation

let listItems = document.querySelectorAll(".mobile_nav_list li");

listItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileNav.classList.toggle("mobile_nav_open");
    })
});

// navbar scroll

let navbar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    if(window.scrollY > 10) {
        navbar.style.background = "rgb(236, 238, 241)"
    } else {
        navbar.style.background = "none"
    }
})