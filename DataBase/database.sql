-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 12:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

CREATE DATABASE IF NOT EXISTS `database`;
USE `database`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

-- --------------------------------------------------------
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Password` varchar(16) NOT NULL,
  `Email` varchar(20) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `users` (`Name`, `Password`, `Email`) VALUES
('Esteban', 'este1234', 'esteban@gmail.com'),
('Rodrigo', 'rodri1234', 'rodrigo@gmail.com');

-- --------------------------------------------------------
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Title` varchar(25) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `WriterID` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  FOREIGN KEY (`WriterID`) REFERENCES `users`(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `articles` (`Title`, `Description`, `WriterID`) VALUES
('Artículo 1', 'Descripcion del Artículo 1', 1), -- Asocia el artículo con el usuario Esteban
('Artículo 2', 'Descripcion del Artículo 2', 2); -- Asocia el artículo con el usuario Rodrigo
