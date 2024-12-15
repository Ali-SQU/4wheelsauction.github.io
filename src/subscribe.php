<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "car_sales";

// Connect to the database
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email from the form
    $email = htmlspecialchars($_POST["email"]);

    // SQL statement to insert email
    $sql = "INSERT INTO subscriptions (email) VALUES ('$email')";

    // Execute the query and handle success or error
    if (mysqli_query($conn, $sql)) {
        // Redirect back to index.html with a success parameter
        header("Location: index.html?success=true");
    } else {
        // Redirect back to index.html with an error parameter
        header("Location: index.html?success=false");
    }

    // Close the connection
    mysqli_close($conn);
    exit();
}
?>