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
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email from the form
    $email = htmlspecialchars($_POST["email"]);
    // SQL statement to check if the email exists
    $checkSql = "SELECT * FROM subscriptions WHERE email = '$email'";
    $result = mysqli_query($conn, $checkSql);
    if (mysqli_num_rows($result) > 0) {
        // Email exists, proceed to delete
        $deleteSql = "DELETE FROM subscriptions WHERE email = '$email'";

        if (mysqli_query($conn, $deleteSql)) {
            // Redirect back with success message
            header("Location: index.html?success=true");
        } else {
            // Error while deleting
            header("Location: index.html?success=false");
        }
    } else {
        // Email does not exist
        header("Location: index.html?success=false&error=email_not_found");
    }
    // Close the connection
    mysqli_close($conn);
    exit();
}
?>
