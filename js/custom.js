// Header Responsive

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.getElementById("navbar");

    hamburger.addEventListener("click", function() {
        // Toggle the 'active' class to show/hide the navbar
        navbar.classList.toggle("active");
    });
});
