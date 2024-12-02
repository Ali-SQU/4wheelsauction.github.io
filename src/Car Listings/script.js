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

/* Car object */
function Car_detail(img_src, car_model, type, detail, addition_comment){
    this.img_src = img_src;
    this.car_model = car_model;
    this.type = type;
    this.detail = detail;
    this.addition_comment = addition_comment;

    // search method that will search for specific keyword within the object's property
    this.search_keyword = function(search_keyword){
        search_keyword = search_keyword.toLowerCase(); 
        if (this.img_src.toLowerCase().includes(search_keyword)) {return true;}
        if (this.car_model.toLowerCase().includes(search_keyword)) {return true;}
        if (this.type.toLowerCase().includes(search_keyword)) {return true;}
        if (this.detail.toLowerCase().includes(search_keyword)) {return true;}
        if (this.addition_comment.toLowerCase().includes(search_keyword)) {return true;}
        return false
    };
}

function Car_price_mileage(price, mileage){
    this.price = price;
    this.mileage = mileage;

    this.search_keyword = function(search_keyword){
        search_keyword = search_keyword.toLowerCase(); 
        if (this.price.toLowerCase().includes(search_keyword)) {return true;}
        if (this.mileage.toLowerCase().includes(search_keyword)) {return true;}
        return false
    };
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

// process user input in this case search box form
const form2 = document.getElementById("search_form");
const search_input2 = document.getElementById("search_input");

form2.addEventListener("submit", (event) =>{ // handle submit button
  event.preventDefault(); // This prevent the page from reloading whenever a form is submited
  const search_text = search_input2.value;
  
  let index_keyword = [];
  // search array
  for (let index = 0; index < detail_array.length; index++){
    if ((detail_array[index].search_keyword(search_text))){
      index_keyword.push(index);
    }
    if ((price_mileage_array[index].search_keyword(search_text))){
      index_keyword.push(index);
    }
  }
  // hide all the page that does include
  for (let i = 0; i < 10; i++){
    let row_id = "dynamic_listing_row_" + (i + 1);
    let row_element = document.getElementById(row_id);
    
    // Hides the row if not matched with keyword
    if (index_keyword.includes(i)){
      row_element.style.display = ""; // revert to default value
    }else{
      row_element.style.display = "none";
    }
  }
});