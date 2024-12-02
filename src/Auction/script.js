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

// objects for auction 
// Dynamically update the site using React js
function Car(img_src, lot_info, vehicle_info, sale_info, condition){
    this.img_src = img_src;
    this.lot_info = lot_info;
    this.vehicle_info = vehicle_info;
    this.sale_info = sale_info;
    this.condition = condition;
};

function Bid_and_time(bid, time_left){
    this.bid = bid;
    this.time_left = time_left;
};

// Initilize car object
car1 = new Car(
  "img/car_auct_demo1.jpg",
  "2012 Mercidies  C1500 LS",
  "Odometer 4434 (ACTUAL)",
  "Dubai, AE",
  "Crushed",
);

car2 = new Car(
  "img/Chevrolet_car_demo.jpeg",
  "2020 CHEVROLET TAHOE C1500 LS",
  "Odometer 123593 (ACTUAL)",
  "Halban, OM",
  "Normal wear Damage Key Available",
);

car3 = new Car(
  "img/BMW_car_demo.jpeg", 
  "2015 BMW S4",
  "Odometer 442 (Depricated)",
  "Muscat, OM",
  "Medicore Broken seats",
);

car4 = new Car(
  "img/Audi_car_demo.jpg", 
  "2020 Audi A7",
  "Odometer 6521 (ACTUAL)",
  "Barka, OM",
  "Clean and good shape!",
);

// Initilizing bid and time object
bid1 = new Bid_and_time(125, "3D 1H 23min");
bid2 = new Bid_and_time(225, "1D 1H 23min");
bid3 = new Bid_and_time(585, "1H 15min");
bid4 = new Bid_and_time(1911, "49min");


// saving object into array
let auction_array = [car1, car2, car3, car4, car1, car2, car3, car4, car1, car2];
let bid_array = [bid1, bid2, bid3, bid4, bid1, bid2, bid3, bid4, bid1, bid2];

