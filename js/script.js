// VARIABLES
let defaultBackground = 1;

// ELEMENT SELECTION
const hamburgerIcon = document.querySelector(".hamburger");
const mainNav = document.querySelector(".header__nav--main");
const navListItems = document.querySelectorAll(".header__nav--main li");
const colorPaletteIcon = document.querySelector(".color-palette-icon");
const colorPalettePreview = document.querySelector("#color-palette-preview");

colorPalettePreview.style.background = "linear-gradient(to right, #24243e, #302b63, #0f0c29)";

// EVENT LISTENER FOR THE HAMBURGER ICON
hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("is-active");
    mainNav.classList.toggle("is-active");
});

// EVENT LISTENER FOR THE NAV LINKS ->
navListItems.forEach((navListItem) => {
    navListItem.addEventListener("click", (event) => {
        // leave the mobile nav menu open if color-palette-icon was clicked
        if (event.target.tagName === "A") {
            hamburgerIcon.classList.toggle("is-active");
            mainNav.classList.toggle("is-active");
        }
    });
});

// EVENT LISTENER FOR THE COLOR PALETTE ICON
colorPaletteIcon.addEventListener("click", () => {
    const body = document.querySelector("body");
    console.log(screen.width);
    if (defaultBackground === 1) {
        body.style.background = "linear-gradient(to right, #8f94fb, #4e54c8)";
        colorPalettePreview.style.background = "linear-gradient(to right, #8f94fb, #4e54c8)";
        // only change nav background in mobile view
        // if (screen.width < 768) {
        //     mainNav.style.background = "linear-gradient(to right, #8f94fb, #4e54c8)";
        // }
        defaultBackground = 2;
    } else if (defaultBackground === 2) {
        body.style.background = "linear-gradient(to right, #493240, #ff0099)";
        colorPalettePreview.style.background = "linear-gradient(to right, #493240, #ff0099)";
        // only change nav background in mobile view
        // if (screen.width < 768) {
        //     mainNav.style.background = "linear-gradient(to right, #493240, #ff0099)";
        // }
        defaultBackground = 3;
    } else if (defaultBackground === 3) {
        body.style.background = "linear-gradient(to right, #24243e, #302b63, #0f0c29)";
        colorPalettePreview.style.background = "linear-gradient(to right, #24243e, #302b63, #0f0c29)";
        // only change nav background in mobile view
        // if (screen.width < 768) {
        //     mainNav.style.background = "linear-gradient(to right, #24243e, #302b63, #0f0c29)";
        // }
        defaultBackground = 1;
    }
});

document.querySelector(".color-palette-icon").addEventListener("mouseover", () => {
    colorPalettePreview.style.display = "block";
});
document.querySelector(".color-palette-icon").addEventListener("mouseout", () => {
    colorPalettePreview.style.display = "none";
});
