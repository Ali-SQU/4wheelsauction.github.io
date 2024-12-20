<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "4wheelsauction";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Fetch data from the car listing table
$query = "SELECT * FROM carlisting"; // select all info
$result = mysqli_query($conn, $query);
$cars = []; // create an array for the data
if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        // Extract price from the 'price' column directly
        $price = isset($row['price']) ? (int) filter_var($row['price'], FILTER_SANITIZE_NUMBER_INT) : 0;
        // Extract mileage from the 'mileage' column
        $mileage = isset($row['detail']) ? (int) filter_var($row['detail'], FILTER_SANITIZE_NUMBER_INT) : 0;
        $cars[] = [
            "img" => $row['img_src'],
            "model" => $row['car_model'],
            "type" => $row['type'],
            "price" => $price,
            "mileage" => $mileage,
            "comment" => $row['addition_comment']
            
        ];
    }
}
// Check for filter (from user select)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $vehicleTypes = $_POST['vehicle-type'] ?? [];
    $priceRanges = $_POST['price-range'] ?? [];
    $mileageRanges = $_POST['mileage-range'] ?? [];
    $filteredCars = array_filter($cars, function ($car) use ($vehicleTypes, $priceRanges, $mileageRanges) {
        $typeMatch = empty($vehicleTypes) || in_array($car['type'], $vehicleTypes);
        $priceMatch = empty($priceRanges) || array_reduce($priceRanges, function ($carry, $range) use ($car) {
            // Check for the price
            if ($range == "Less than 5,000 OMR") {
                return $carry || $car['price'] < 5000;
            } elseif ($range == "5,001 - 10,000 OMR") {
                return $carry || ($car['price'] >= 5001 && $car['price'] <= 10000);
            } elseif ($range == "10,001 - 20,000 OMR") {
                return $carry || ($car['price'] >= 10001 && $car['price'] <= 20000);
            } elseif ($range == "20,001 - 50,000 OMR") {
                return $carry || ($car['price'] >= 20001 && $car['price'] <= 50000);
            } elseif ($range == "Greater than 50,000 OMR") {
                return $carry || $car['price'] > 50000;
            }
            return $carry;
        }, false);
        $mileageMatch = empty($mileageRanges) || array_reduce($mileageRanges, function ($carry, $range) use ($car) {
            // Check the mileage
            if ($range == "Less than 50,000 km") {
                return $carry || $car['mileage'] < 50000;
            } elseif ($range == "50,001 - 100,000 km") {
                return $carry || ($car['mileage'] >= 50001 && $car['mileage'] <= 100000);
            } elseif ($range == "100,001 - 200,000 km") {
                return $carry || ($car['mileage'] >= 100001 && $car['mileage'] <= 200000);
            } elseif ($range == "200,001 - 300,000 km") {
                return $carry || ($car['mileage'] >= 200001 && $car['mileage'] <= 300000);
            } elseif ($range == "Greater than 300,000 km") {
                return $carry || $car['mileage'] > 300000;
            }
            return $carry;
        }, false);
        return $typeMatch && $priceMatch && $mileageMatch;
    });
    // Display filtered cars as JSON
    header('Content-Type: application/json');
    echo json_encode(array_values($filteredCars));
    exit;
}
// Close the connection
mysqli_close($conn);
?>
