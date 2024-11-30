document.getElementById("questionnaireForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission until validation passes

    // Validation variables
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const serviceError = document.getElementById("serviceError");

    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    serviceError.textContent = "";

    // Name validation - must be at least 3 characters
    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }

    // Email validation - must follow a valid email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

      // Phone validation - must follow a valid international phone number format
      const phonePattern = /^\+?[0-9]{7,15}$/;
      if (!phonePattern.test(phone)) {
          phoneError.textContent = "Please enter a valid phone number (e.g., +123456789 or 123456789).";
          isValid = false;
      }

    // Service selection validation - must select an option
    if (service === "") {
        serviceError.textContent = "Please select how you heard about us.";
        isValid = false;
    }




    // If all validations pass, submit the form
    if (isValid) {
        alert("Thank you for your feedback!");
        document.getElementById("questionnaireForm").reset();
    }
});
