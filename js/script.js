// ELEMENT SELECTION
const hamburgerIcon = document.querySelector(".hamburger");
const mainNav = document.querySelector(".header__nav--main");
const navListItems = document.querySelectorAll(".header__nav--main li");

// EVENT LISTENER FOR THE HAMBURGER ICON
hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("is-active");
    mainNav.classList.toggle("is-active");
});

// EVENT LISTENER FOR THE NAV LINKS ->
navListItems.forEach((navListItem) => {
    navListItem.addEventListener("click", () => {
        hamburgerIcon.classList.toggle("is-active");
        mainNav.classList.toggle("is-active");
    });
});
