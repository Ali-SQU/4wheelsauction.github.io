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

    // Name validation
    const namePattern = /^[a-zA-Z\s]{3,}$/;
    if (!namePattern.test(name)) {
        nameError.textContent = "Name must contain only letters and be at least 3 characters long.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email) || email.length > 254) {
        emailError.textContent = "Please enter a valid email address (maximum 254 characters).";
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^\+?[0-9]{7,15}$/;
    if (!phonePattern.test(phone) || phone.includes(" ")) {
        phoneError.textContent = "Phone number must be 7-15 digits, and cannot include spaces.";
        isValid = false;
    }

    // Service selection validation
    const validServices = ["Referral", "Advertisement", "Social Media", "Other"]; // Example options
    if (!validServices.includes(service)) {
        serviceError.textContent = "Please select a valid service option.";
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert("Thank you for your feedback!");
        document.getElementById("questionnaireForm").reset();
    }
});
