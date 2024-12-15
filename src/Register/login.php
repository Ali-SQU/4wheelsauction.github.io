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
    $email = htmlspecialchars($_POST["email"]);
    $password = $_POST["password"];

    // SQL statement to get the user from the database based on email
    $sql = "SELECT * FROM users WHERE email = '$email'";

    $result = mysqli_query($conn, $sql);

    // Check if the email exists in the database
    if (mysqli_num_rows($result) > 0) {
        // Fetch user data
        $user = mysqli_fetch_assoc($result);

        // Verify the password
        if (password_verify($password, $user['password'])) {
            // Login successful
            $response["success"] = true;
        }
    }

    // Close the connection
    mysqli_close($conn);
}

// Return JSON response
echo json_encode($response);
?>
