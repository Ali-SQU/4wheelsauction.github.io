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
    "./Images/car1.jpeg",
    "2012 Mercedes C1500 LS",
    "Truck",
    "Crushed",
    "Clean and in Good Shape"
);
d2 = new Car_detail(
    "./Images/OIP.jpeg",
    "2020 Chevrolet Tahoe C1500 LS",
    "SUV",
    "Normal wear; Damage Key Available",
    ""
);
d3 = new Car_detail(
    "./Images/car3.jpeg",
    "2015 BMW S4",
    "Coupe",
    "Mediocre Broken Seats",
    " Old Luxary car"
);

d4 = new Car_detail(
    "./Images/Audi_car_demo.jpg",
    "2020 Audi A7",
    "Sedan",
    "Clean and in Good Shape",
    ""
);

d5 = new Car_detail(
    "./Images/cor.jpeg",
    "2018 Toyota Corolla",
    "Compact",
    "Minor Scratches",
    ""
);
d6 = new Car_detail(
    "./Images/honda.jpeg",
    "2019 Honda Accord",
    "Sedan",
    "Like New",
    ""
);
d7 = new Car_detail(
    "./Images/moss.jpeg",
    "2021 Ford Mustang GT",
    "Sports",
    "Pristine Condition; Recently Serviced",
    ""
);

p1 = new Car_price_mileage(
    "6400",
    "120000"
);

p2 = new Car_price_mileage(
    "14000",
    "44000"
);

p3 = new Car_price_mileage(
    "7000",
    "155000"
);

p4 = new Car_price_mileage(
    "18000",
    "32000"
);

p5 = new Car_price_mileage(
    "5400",
    "80000"
);
p6 = new Car_price_mileage(
    "7000",
    "45000"
);

p7 = new Car_price_mileage(
    "20000",
    "2300"
);
// saving object into array
let detail_array = [d1, d2, d3, d4, d5, d6, d7];
let price_mileage_array = [p1, p2, p3, p4, p5, p6, p7];

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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("filterForm");
    const tableBody = document.getElementById("carTableBody");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // FormData to send the selected filters
        const formData = new FormData(form);
        fetch("carlist.php", {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            tableBody.innerHTML = "";
            // Add a header row
            const headerRow = `
                <tr>
                    <th colspan="2" class="text-center bg-primary">Car Details</th>
                    <th colspan="2" class="text-center bg-info">Price and Mileage</th>
                    <th rowspan="2" class="text-center">Type</th>
                    <th rowspan="2" class="text-center">Details</th>
                </tr>
                <tr>
                    <th>Images</th>
                    <th>Car Model</th>
                    <th>Price (OMR)</th>
                    <th>Mileage (km)</th>
                </tr>
            `;
            tableBody.insertAdjacentHTML("beforeend", headerRow);

            if (data.length === 0) {
                tableBody.innerHTML = "<tr><td colspan='5'>No cars match the filters.</td></tr>";
                return;
            }
            data.forEach((car) => {
                const row = `
                    <tr>
                        <td><img src="${car.img}" alt="${car.model}" width="100"></td>
                        <td>${car.model}</td>
                        <td>${car.price} OMR</td>
                        <td>${car.mileage} km</td>
                        <td>${car.type}</td>
                        <td>${car.comment}</td>
                    </tr>
                `;
                tableBody.insertAdjacentHTML("beforeend", row);
            });
        })
        .catch((error) => console.error("Error:", error));
    });
});
