// script.js

document.addEventListener("DOMContentLoaded", function() {
    var options = document.querySelectorAll(".option");
    options.forEach(function(option) {
        option.addEventListener("click", function() {
            showCelebration();
        });
    });
});

function showCelebration() {
    var ribbons = document.createElement("div");
    ribbons.className = "ribbons";
    document.body.appendChild(ribbons);

    var fireworks = document.createElement("div");
    fireworks.className = "fireworks";
    document.body.appendChild(fireworks);

    setTimeout(function() {
        ribbons.remove();
        fireworks.remove();
    }, 3000); // Remove celebration after 3 seconds
}
