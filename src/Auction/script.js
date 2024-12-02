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
// array 
car_obj_array = [];
auction_item_array = [];
let auction_row  = document.getElementById("dynamic_auction_row");

// objects for auction 
function Car(img_src, lot_info, vehicle_info, sale_info, condition, bid){
    this.img_src = img_src;
    this.lot_info = lot_info;
    this.vehicle_info = vehicle_info;
    this.sale_info = sale_info;
    this.condition = condition;
    this.bid = bid;
    this.update = function(){

    };
};

function Auction_item(car, time_left){
    this.car = car;
    this.time_left = time_left;
};

// initilize the two object
car_obj_array.push(new Car("..\\src\\Auction\\img\\car_auct_demo1.jpg",
    "2020 CHEVROLET TAHOE C1500 LS",
    "Odometer \n123593\jn(ACTUAL)",
    "Halban, OM",
    "Normal wear\nDamage\nkey Available",
    200
))

auction_row.innerHTML = "";

// this will dyanmical generate using .innerHTML 
// the value will be dyanamically updated from the Car object array
<tr>
<th scope="row" style="width: 200;"><img src="img\car_auct_demo1.jpg" width="160" height="120" alt="car image"/></th>
<td>2020 CHEVROLET TAHOE C1500 LS</td>
<td> Odometer <br/>123593 <br/>(ACTUAL)<br/></td>
<td>
  Halban, OM<br/>
  <span id="auction-date-text" class="text-danger">Auction Ends at 7D 18H 39min </span>
</td>
<td>
  Normal wear<br/>
  Damage<br/>
  key Available
</td>
<td>
  Current Bid:<br/>
  200 OMR<br/>
  <div style="margin-top: 1em;">
    <input type="number" name="bid_value" style="width: 105px;" value="200" min="200"/><label style="text-indent: 4px;">OMR</label><br/>
    <span id="bidding-hint">Bid according to increment rule</span><br/>
    <button type="button" class="btn btn-primary" style="margin-top: 0.45em; width: 88px;">Bid</button>
    <a href="..\Car Details\car_details.html"><button type="button" class="btn btn-warning" style="margin-top: 0.45em; width: 120px;">More Detail</button></a>
    <a href="..\Car Details\car_details.html"><button type="button" class="btn btn-success btn-sm" style="margin-top: 0.45em; width: 140px;">Add to watchlist</button></a>
  </div>
</td>
</tr>