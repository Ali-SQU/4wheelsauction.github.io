-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2024 at 03:14 PM
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
-- Database: `car_sales`
--

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
(1, 'John Doe', 'john.doe@example.com', '1234567890', 'Inquiry about SUVs', 'I would like to know more about the SUV models you offer.'),
(2, 'Jane Smith', 'jane.smith@example.com', '0987654321', 'Feedback', 'Your website is very user-friendly, great job!'),
(3, 'Mike Tyson', 'mike.tyson@example.com', '1122334455', 'Luxury Cars', 'I am interested in luxury cars. Do you offer leasing options?'),
(4, 'Alice Johnson', 'alice.johnson@example.com', '2233445566', 'Pricing Inquiry', 'Can you provide the price range for the electric cars you sell?'),
(5, 'Robert Brown', 'robert.brown@example.com', '3344556677', 'Test Drive Request', 'I would like to book a test drive for a premium sedan.'),
(6, 'Emily Davis', 'emily.davis@example.com', NULL, 'Partnership Inquiry', 'Are you open to partnerships with small car dealerships?'),
(7, 'Chris Evans', 'chris.evans@example.com', '4455667788', 'Warranty Questions', 'What is the warranty period for the luxury cars you offer?');

-- --------------------------------------------------------

--
-- Table structure for table `subscriptions`
--

CREATE TABLE `subscriptions` (
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscriptions`
--

INSERT INTO `subscriptions` (`email`) VALUES
('car.enthusiast@gmail.com'),
('classic.car.collector@gmail.com'),
('jane.smith@example.com'),
('john.doe@example.com'),
('luxurycars2024@yahoo.com'),
('speedy.driver@hotmail.com'),
('suvlover@outlook.com');

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
(1, 'John Doe', 'johnd', 'john.doe@example.com', 'hashed_password1', '1234567890', 'JD Auto', 'USA', 'basic'),
(2, 'Jane Smith', 'janes', 'jane.smith@example.com', 'hashed_password2', '0987654321', 'Smith Motors', 'Canada', 'premium'),
(3, 'Mike Tyson', 'miketyson', 'mike.tyson@example.com', 'hashed_password3', '1122334455', 'Boxing Wheels', 'UK', 'business'),
(4, 'Alice Johnson', 'alicej', 'alice.johnson@example.com', 'hashed_password4', '2233445566', NULL, 'Australia', 'vip'),
(5, 'Robert Brown', 'robertb', 'robert.brown@example.com', 'hashed_password5', '3344556677', 'RB Enterprises', 'USA', 'basic'),
(6, 'Emily Davis', 'emilyd', 'emily.davis@example.com', 'hashed_password6', NULL, NULL, 'New Zealand', 'premium'),
(7, 'Chris Evans', 'chrise', 'chris.evans@example.com', 'hashed_password7', '4455667788', 'Evans Cars', 'Germany', 'vip');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`email`);

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
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
