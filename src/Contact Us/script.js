var scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () {
    if (window.scrollY > 200) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.onclick = function () {
    window.scrollTo(0, 0);
};
