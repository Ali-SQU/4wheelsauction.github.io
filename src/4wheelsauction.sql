-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2024 at 10:10 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `4wheelsauction`
--

-- --------------------------------------------------------

--
-- Table structure for table `auction_cars`
--

CREATE TABLE `auction_cars` (
  `car_id` int(11) NOT NULL,
  `img_src` varchar(255) NOT NULL,
  `lot_info` varchar(255) NOT NULL,
  `vehicle_info` varchar(255) NOT NULL,
  `sale_info` varchar(255) NOT NULL,
  `car_condition` varchar(255) NOT NULL,
  `Bid_amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auction_cars`
--

INSERT INTO `auction_cars` (`car_id`, `img_src`, `lot_info`, `vehicle_info`, `sale_info`, `car_condition`, `Bid_amount`) VALUES
(1, 'img/car_auct_demo1.jpg', '2012 Mercidies C1500 LS', 'Odometer 4434 (ACTUAL)', 'Dubai, AE', 'Crushed', 1024),
(2, 'img/Chevrolet_car_demo.jpeg', '2020 CHEVROLET TAHOE C1500 LS', 'Odometer 123593 (ACTUAL)', 'Halban, OM', 'Normal wear Damage Key Available', 3044),
(3, 'img/BMW_car_demo.jpeg', '2015 BMW S4', 'Odometer 442 (Depricated)', 'Muscat, OM', 'Medicore Broken seats', 525),
(4, 'img/Audi_car_demo.jpg', '2020 Audi A7', 'Odometer 6521 (ACTUAL)', 'Barka, OM', 'Clean and good shape!', 890),
(5, 'img/car_toyota_demo.jpg', '2018 Toyota Corolla', 'Odometer 24500 (ACTUAL)', 'Sohar, OM', 'Minor scratches', 10500),
(6, 'img/car_honda_demo.jpg', '2019 Honda Accord', 'Odometer 31500 (ACTUAL)', 'Muscat, OM', 'Like new', 1000),
(7, 'img/car_ford_demo.jpg', '2021 Ford Mustang', 'Odometer 8900 (ACTUAL)', 'Dubai, AE', 'Perfect condition', 589);

-- --------------------------------------------------------

--
-- Table structure for table `cardetails`
--

CREATE TABLE `cardetails` (
  `id` int(11) NOT NULL,
  `img_src` varchar(255) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `lot_number` varchar(50) NOT NULL,
  `odometer` varchar(50) NOT NULL,
  `engine_type` varchar(100) NOT NULL,
  `transmission` varchar(100) NOT NULL,
  `drive` varchar(100) NOT NULL,
  `fuel` varchar(50) NOT NULL,
  `car_keys` varchar(10) NOT NULL,
  `year` year(4) NOT NULL,
  `model` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `cylinders` int(11) NOT NULL,
  `vehicle_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cardetails`
--

INSERT INTO `cardetails` (`id`, `img_src`, `title`, `description`, `lot_number`, `odometer`, `engine_type`, `transmission`, `drive`, `fuel`, `car_keys`, `year`, `model`, `brand`, `cylinders`, `vehicle_type`) VALUES
(1, 'img/car_auct_demo1.jpg', 'Mercedes', '2012 Mercedes C1500 LS', '41081101', '4,434 mi', '5.0L V8', 'Automatic', 'Rear-wheel drive', 'Gas', 'Yes', '2012', 'C1500 LS', 'Mercedes', 8, 'Pickup'),
(2, 'img/Chevrolet_car_demo.jpeg', 'Chevrolet', '2020 Chevrolet Tahoe C1500 LS', '41081134', '123,593 mi', '5.3L V8', 'Automatic', 'Rear-wheel drive', 'Gas', 'Yes', '2020', 'Tahoe C1500 LS', 'Chevrolet', 8, 'SUV'),
(3, 'img/BMW_car_demo.jpeg', 'BMW', '2015 BMW S4', '41081135', '442 mi', '3.0L I6', 'Automatic', 'All-wheel drive', 'Gas', 'Yes', '2015', 'S4', 'BMW', 6, 'Sedan'),
(4, 'img/Audi_car_demo.jpg', 'Audi', '2020 Audi A7', '41081136', '6,521 mi', '3.0L V6', 'Automatic', 'All-wheel drive', 'Gas', 'Yes', '2020', 'A7', 'Audi', 6, 'Sedan'),
(5, 'img/car_toyota_demo.jpg', 'Toyota', '2018 Toyota Corolla', '41081137', '24,500 mi', '1.8L I4', 'CVT', 'Front-wheel drive', 'Gas', 'Yes', '2018', 'Corolla', 'Toyota', 4, 'Sedan'),
(6, 'img/car_honda_demo.jpg', 'Honda', '2019 Honda Accord', '41081138', '31,500 mi', '2.0L I4', 'Automatic', 'Front-wheel drive', 'Gas', 'Yes', '2019', 'Accord', 'Honda', 4, 'Sedan'),
(7, 'img/car_ford_demo.jpg', 'Ford', '2021 Ford Mustang', '41081139', '8,900 mi', '5.0L V8', 'Manual', 'Rear-wheel drive', 'Gas', 'Yes', '2021', 'Mustang', 'Ford', 8, 'Sports Car');

-- --------------------------------------------------------

--
-- Table structure for table `carlisting`
--

CREATE TABLE `carlisting` (
  `id` int(11) NOT NULL,
  `img_src` varchar(255) NOT NULL,
  `car_model` varchar(255) NOT NULL,
  `type` varchar(100) NOT NULL,
  `detail` varchar(255) NOT NULL,
  `addition_comment` text DEFAULT NULL,
  `price` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carlisting`
--

INSERT INTO `carlisting` (`id`, `img_src`, `car_model`, `type`, `detail`, `addition_comment`, `price`) VALUES
(1, './Images/car1.jpeg', '2012 Mercedes C1500 LS', 'Truck', '120000', 'Crushed', '6400 OMR'),
(2, './Images/OIP.jpeg', '2020 Chevrolet Tahoe C1500 LS', 'SUV', '44000', 'Normal wear; Damage Key Available', '14000 OMR'),
(3, './Images/car3.jpeg', '2015 BMW S4', 'Coupe', '155000', 'Mediocre Broken Seats', '7000 OMR'),
(4, './Images/Audi_car_demo.jpg', '2020 Audi A7', 'Sedan', '32000', 'Clean and in Good Shape', '18000 OMR'),
(5, './Images/cor.jpeg', '2018 Toyota Corolla', 'Compact', '80000', 'Minor Scratches', '5400 OMR'),
(6, './Images/honda.jpeg', '2019 Honda Accord', 'Sedan', '45000', 'Like New', '7000 OMR'),
(7, './Images/moss.jpeg', '2021 Ford Mustang GT', 'Sports', '2300', 'Pristine Condition; Recently Serviced', '20000 OMR');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `name`, `email`, `phone`, `subject`, `message`) VALUES
(1, 'ahmed', 'ahmed@gamil.com', '12345424', 'Hello', 'Hi there!');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `email`, `created_at`) VALUES
(1, 'test1@testing.com', '2024-12-20 20:58:49'),
(2, 'test2@testing.com', '2024-12-20 20:59:07');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `membership` enum('basic','premium','business','vip') DEFAULT 'basic'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `phone`, `company`, `country`, `membership`) VALUES
(1, 'Ahmed', 'Ahmed123', 'Ahhmed@gmail.com', '$2y$10$z14qzqgAqm.IAO.voNMxcu04fHcwein7SAU6ymuo0fDp9JVt9wxVu', '12242432', 'SQU', 'Om', 'basic'),
(2, 'Ali', 'Ali123', 'Ali@gmail.com', '$2y$10$GlEMEAYDymSm0Cyy9oVk6uKo8V4Yt8REyJIxNZ.9XcA3ZVK6p8ZmC', '1123234234', 'Dell', 'Om', 'basic');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auction_cars`
--
ALTER TABLE `auction_cars`
  ADD PRIMARY KEY (`car_id`);

--
-- Indexes for table `cardetails`
--
ALTER TABLE `cardetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auction_cars`
--
ALTER TABLE `auction_cars`
  MODIFY `car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cardetails`
--
ALTER TABLE `cardetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
