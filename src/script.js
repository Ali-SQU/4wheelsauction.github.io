// For scroll up icon
var scrollUpBtn = document.getElementById("scrollUpBtn");
window.onscroll = function () {
    if (window.scrollY > 900) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

// Go up when up arrow is clicked
scrollUpBtn.onclick = function () {
    window.scrollTo(0, 0);
};

// Get the current date and time 
document.getElementById("current-date").innerText = new Date().toLocaleDateString();
document.getElementById("current-time").innerText = new Date().toLocaleTimeString();

