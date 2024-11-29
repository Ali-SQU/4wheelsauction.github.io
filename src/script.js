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

// Arrays of images for each category
const categoryImages = [
    ["./Home Images/car1.jpg", "./Home Images/car2.jpg", "./Home Images/car3.jpg"], // SUVs
    ["./Home Images/truck1.jpg", "./Home Images/truck2.jpg", "./Home Images/truck3.jpg"], // Trucks
    ["./Home Images/ATV1.jpg", "./Home Images/ATV2.jpg", "./Home Images/ATV3.jpg"], // ATVs
    ["./Home Images/bus1.jpg", "./Home Images/bus2.jpg", "./Home Images/bus3.jpg"], // Buses
    ["./Home Images/automobile1.jpg", "./Home Images/automobile2.jpg", "./Home Images/automobile3.jpg"], // Automobiles
    ["./Home Images/Pickup1.jpg", "./Home Images/Pickup2.jpg", "./Home Images/Pickup3.jpg"] // Pickups
];

// Array to keep track of the current image index for each category
let currentIndex = Array(categoryImages.length).fill(0);

// Function to update images for all categories
function updateCategoryImages() {
    for (let i = 0; i < categoryImages.length; i++) {
        // Increment the current index and reset if it exceeds the number of images
        currentIndex[i] = (currentIndex[i] + 1) % categoryImages[i].length;

        // Update the image for the current category
        document.getElementById(`category-image-${i + 1}`).src = categoryImages[i][currentIndex[i]];
    }
}

// Interval to update images every 3 seconds
setInterval(updateCategoryImages, 3000);
