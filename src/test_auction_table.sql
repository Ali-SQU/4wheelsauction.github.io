-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 15, 2024 at 10:48 PM
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
-- Database: `dummy_auction_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `auction_table`
--

CREATE TABLE `auction_table` (
  `image_path` varchar(255) NOT NULL,
  `Lot Info` varchar(255) NOT NULL,
  `Vehicle Info` text NOT NULL,
  `Sale Info` text NOT NULL,
  `Car_condition` varchar(100) NOT NULL,
  `Bid` double NOT NULL,
  `Bid_already` tinyint(1) NOT NULL,
  `watchlist` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auction_table`
--

INSERT INTO `auction_table` (`image_path`, `Lot Info`, `Vehicle Info`, `Sale Info`, `Car_condition`, `Bid`, `Bid_already`, `watchlist`) VALUES
('img/car_auct_demo1.jpg', '2012 Mercidies  C1500 LS', 'Odometer 4434 (ACTUAL)', 'Dubai, AE', 'Crushed', 125, 0, 0),
('img/Chevrolet_car_demo.jpeg', '2020 CHEVROLET TAHOE C1500 LS', 'Odometer 123593 (ACTUAL)', 'Halban, OM', 'Normal wear Damage Key Available', 225, 0, 0),
('img/BMW_car_demo.jpeg', '2015 BMW S4', 'Odometer 442 (Depricated)', 'Muscat, OM', 'Medicore Broken seats', 585, 0, 0),
('img/Audi_car_demo.jpg', '2020 Audi A7', 'Odometer 6521 (ACTUAL)', 'Barka, OM', 'Clean and good shape!', 1911, 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
