<?php
// Database connection
$host = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "4wheelsauction"; 

$conn = new mysqli($host, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form data is received via POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and assign the POST data to variables
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $subject = mysqli_real_escape_string($conn, $_POST['subject']);
    $message = mysqli_real_escape_string($conn, $_POST['message']);

    // Insert data into the database
    $sql = "INSERT INTO contact_us (name, email, phone, subject, message) 
            VALUES ('$name', '$email', '$phone', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        // Success: Send a JSON response
        echo json_encode(["success" => true]);
    } else {
        // Failure: Send a JSON response
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }

    // Close the connection
    $conn->close();
}
?>