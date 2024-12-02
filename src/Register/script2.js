function check() {
    // save all the options with the name 'membership' in the variable
    var options = document.getElementsByName("membership");
    var userSelect = null;//empty not choose anything yet 
    // for loop, to find the selected choise from user 
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) { //check which one selected 
            userSelect = options[i].value; // save  the selected value in the variable
            break; // stop the loop if we found the selected one
        }
    }
    // now check which one is selected, to alert the user or to mpve tp another page
    if (userSelect === 'business' || userSelect === 'vip') {
        window.location.href="../Calculation page/calculation.html";
    }
    else{
        alert("Congratulations... you now have an activated account with us!");
        
    }
}