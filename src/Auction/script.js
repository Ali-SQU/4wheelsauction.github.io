// Button to scroll up the page
var scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () {
    if (window.scrollY > 700) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.onclick = function () {
    window.scrollTo(0, 0);
};

// Prevent user from redirecting to new page
const process_form = document.getElementById("search_form");
process_form.addEventListener("submit", (event) =>{event.preventDefault();})
