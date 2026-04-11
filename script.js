/* 
Author: Sabrina Shehreen
Date: 04/10/2026
File name: script.js 
*/

// Hamburger menu function for mobile navigation
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Console log to confirm script is loaded
console.log("Strike a Chord script loaded successfully");