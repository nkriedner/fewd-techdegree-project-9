// ELEMENT SELECTION
const hamburgerIcon = document.querySelector(".hamburger");

// EVENT LISTENER FOR THE HAMBURGER ICON
hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("is-active");
});
