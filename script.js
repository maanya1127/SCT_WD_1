const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-item");

// 1. Change navbar style when scrolling past 50px
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// 2. Toggle mobile navigation menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// 3. Close mobile menu automatically when a link is clicked
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});