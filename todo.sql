-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2021 at 05:42 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `doing`
--

CREATE TABLE `doing` (
  `id` int(11) NOT NULL,
  `tasks` text NOT NULL,
  `on_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doing`
--

INSERT INTO `doing` (`id`, `tasks`, `on_date`) VALUES
(55, 'asdsada', '2021-07-20 09:02:31'),
(56, 'asdsada', '2021-07-20 09:02:31');

-- --------------------------------------------------------

--
-- Table structure for table `done`
--

CREATE TABLE `done` (
  `id` int(11) NOT NULL,
  `tasks` text NOT NULL,
  `on_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `done`
--

INSERT INTO `done` (`id`, `tasks`, `on_date`) VALUES
(1, 'asdasdasd', '2021-07-20 08:59:06');

-- --------------------------------------------------------

--
-- Table structure for table `todo`
--

CREATE TABLE `todo` (
  `id` int(11) NOT NULL,
  `tasks` text DEFAULT NULL,
  `on_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todo`
--

INSERT INTO `todo` (`id`, `tasks`, `on_date`) VALUES
(123, 'asdsada', '2021-07-20 08:59:14'),
(124, 'asdsada', '2021-07-20 08:59:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doing`
--
ALTER TABLE `doing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `done`
--
ALTER TABLE `done`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doing`
--
ALTER TABLE `doing`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `done`
--
ALTER TABLE `done`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `todo`
--
ALTER TABLE `todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
