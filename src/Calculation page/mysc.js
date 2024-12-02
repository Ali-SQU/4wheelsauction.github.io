function calculate() {
    // Set the prices and discount amount in variables 
    var pric1 = 29.99;
    var price2 = 99.99;
    var dis_5 = 0.05;  // 5% discount for business users
    var dis_15 = 0.15;  // 15% discount for Business2
    var dis_25 = 0.25;  // 25% discount for VIP
    // save the user selections in variables
    var type1 = document.getElementById("type1").value; 
    var type2 = document.getElementById("type2").value; 
    var result;  // Initialize result variable before use it 
    // Calculate the price after discount according to the user selection
    if (type1 === "Busin" && type2 === "Busin2") { //check  the user selection
        result = pric1 - (pric1 * (dis_5 + dis_15)); // calculate the price after discount(add 5% more if he select Business)
    } else if (type1 === "Busin" && type2 === "VIP") {
        result = price2 - (price2 * (dis_5 + dis_25)); 
        //if the user choose indivial he will not be given more discount (5%)
    } else if (type1 === "Indiv" && type2 === "Busin2") {
        result = pric1 - (pric1 * dis_15); 
    } else if (type1 === "Indiv" && type2 === "VIP") {
        result = price2 - (price2 * dis_25); 
    } else {
        // If the user does not choose correctly, alert will be given
        alert("Please choose a valid selections for both fields");
        return;
    }
    // Display result in the form
    document.getElementById("res").value = `$${result.toFixed(2)}`; }
function submition(event) {
    event.preventDefault(); 
   // get the values of the user select 
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
    const result = document.getElementById("res").value;
    // check if the user fill the form (no empty box)
    if (!type1 || !type2 || !result) {
        //if the user does not fill the form , an alert will be given 
        alert("Please fill the form and calculate the price before submitting");
        return;
    }
    // after the user click next , a message will appeaar to ask the user if he sure about the choices
    var confirmation = confirm("Are you sure you want to complete your purchase?");
    if (confirmation) {
        alert("Congratulations... you now have an activated account with us!");
        document.getElementById("multiForms").submit(); // Submit the form after the user confirm his choise
    }
}
