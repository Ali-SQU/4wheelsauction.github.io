<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "4wheelsauction";

// Connect to the database
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Initialize response array
$response = ["success" => false];

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST["name"]);
    $username = htmlspecialchars($_POST["username"]);
    $email = htmlspecialchars($_POST["email"]);
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);  // Hash the password
    $phone = htmlspecialchars($_POST["phone"]);
    $company = htmlspecialchars($_POST["company"]);
    $country = htmlspecialchars($_POST["country"]);
    $membership = htmlspecialchars($_POST["membership"]);

    // SQL statement to insert the user into the users table
    $sql = "INSERT INTO users (name, username, email, password, phone, company, country, membership)
            VALUES ('$name', '$username', '$email', '$password', '$phone', '$company', '$country', '$membership')";

    // Execute the query and handle success or error
    if (mysqli_query($conn, $sql)) {
        $response["success"] = true;
    }

    // Close the connection
    mysqli_close($conn);
}

// Return JSON response
echo json_encode($response);
?>