/**
 * Get references to the hamburger button and navigation elements.
 */
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");


/**
 * Variable to track nav menu visibility state.
 */
var isNavHidden = true;


/**
 * Checks the window width and hides the navigation if less than 768px.
 */
var x = window.innerWidth;
if (x < 768) hide();

/**
 * Hides the navigation menu by removing the 'show' class and 
 * adding the 'hidden' class to the nav element. Also sets 
 * the hidden variable to true.
 */
function hide() {
    nav.classList.remove("show");
    nav.classList.add("hidden");
    isNavHidden = true;
}

/**
 * Shows the navigation menu by removing the 'hidden' class and 
 * adding the 'show' class to the nav element. Also sets  
 * the hidden variable to false.
 */
function show() {
    nav.classList.remove("hidden");
    nav.classList.add("show");
    isNavHidden = false;
}

/**
 * Toggles the navigation menu visibility by calling 
 * show() if hidden or hide() if visible.
 */
function toggleMenu() {
    if (isNavHidden) {
        show();
    } else {
        hide();
    }
}

/**
 * Checks the window width and shows or hides the navigation accordingly.
 * If the window width is 768px or more, it will call show() to display the nav.
 * If the window width is less than 768px, it will call hide() to hide the nav.
 */
function checkNav() {
    var x = window.innerWidth;
    if (x >= 768) show();
    if (x < 768) hide();
}

/**
 * Add click event listener to hamburger menu that calls toggleMenu function.
 * Add resize event listener to window that calls checkNav function.
 */
hamburger.addEventListener('click', toggleMenu);
window.addEventListener('resize', checkNav);