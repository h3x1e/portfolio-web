const hamburgerButton = document.getElementById("hamburger");
const navigationList = document.getElementById("navigation-list");

function toggleButton() {
    navigationList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);
