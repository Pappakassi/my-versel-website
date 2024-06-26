// script.js

document.addEventListener("DOMContentLoaded", function() {
    var heading = document.querySelector("h1");
    heading.addEventListener("click", function() {
        this.textContent = "You clicked the heading!";
    });
});
