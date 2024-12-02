// Jump to the beginning of the page
var scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () {
    if (window.scrollY > 600) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

scrollUpBtn.onclick = function () {
    window.scrollTo(0, 0);
};

// process form
// form.addEventListener("submit", (event) =>{ n
//     event.preventDefault(); // prevents page from reloading once form is submited
    
// });

/* Car object */
function Car_detail(img_src, car_model, type, detail, addition_comment){
    this.img_src = img_src;
    this.car_model = car_model;
    this.type = type;
    this.detail = detail;
    this.addition_comment = addition_comment;
}

function Car_price_mileage(price, mileage){
    this.price = price;
    this.mileage = mileage;
}

// Initilize car object
d1 = new Car_detail(
    "./Images/car.jpg",
    "Car Model 1",
    "Pickups",
    "Detail 1",
    "Additional comment 1"
);
d2 = new Car_detail(
    "./Images/BMW_car_demo.jpeg",
    "BMW",
    "ATVs",
    "Fast car",
    "Cleaned and polished!"
);
d3 = new Car_detail(
    "./Images/Audi_car_demo.jpg",
    "Audi",
    "Automobiles",
    "100 s12",
    "Luxary car"
);

d4 = new Car_detail(
    "./Images/Chevrolet_car_demo.jpeg",
    "Car Model 4",
    "Mini cooper",
    "Small",
    "old school car"
);

d5 = new Car_detail(
    "./Images/car_auct_demo1.jpg",
    "Car Model 5",
    "Trucks",
    "Detail 1",
    "Old is gold"
);

p1 = new Car_price_mileage(
    "100",
    "12040141414"
);

p2 = new Car_price_mileage(
    "200",
    "1013414"
);

p3 = new Car_price_mileage(
    "10050",
    "12024"
);

p4 = new Car_price_mileage(
    "4400",
    "10000"
);

p5 = new Car_price_mileage(
    "50000",
    "200001"
);

// saving object into array
let detail_array = [d1, d2, d3, d4, d5, d1, d2, d3, d4, d5];
let price_mileage_array = [p1, p2, p3, p4, p5, p1, p2, p3, p4, p5];