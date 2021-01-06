-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 06 jan. 2021 à 15:48
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `car_project`
--

-- --------------------------------------------------------

--
-- Structure de la table `cars`
--

DROP TABLE IF EXISTS `cars`;
CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `buying_price` decimal(8,2) UNSIGNED NOT NULL,
  `buying_date` date NOT NULL,
  `resale_price` decimal(8,2) UNSIGNED NOT NULL,
  `resale_date` date DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `img` blob,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cars`
--

INSERT INTO `cars` (`id`, `brand`, `model`, `buying_price`, `buying_date`, `resale_price`, `resale_date`, `release_date`, `img`) VALUES
(3, 'AUDI', 'TT', '5600.00', '2019-10-09', '7200.00', '2021-01-04', '2021-01-07', 0x756e646566696e6564),
(5, 'AUDI', 'TT', '5600.00', '2019-10-09', '7200.00', '2021-01-04', '2021-01-07', NULL),
(6, 'AUDI', 'TT', '5600.00', '2019-10-09', '7200.00', '2021-01-04', '2021-01-07', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `cars_archive`
--

DROP TABLE IF EXISTS `cars_archive`;
CREATE TABLE IF NOT EXISTS `cars_archive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `model` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `buying_price` decimal(8,2) UNSIGNED NOT NULL,
  `buying_date` date NOT NULL,
  `resale_price` decimal(8,2) UNSIGNED NOT NULL,
  `resale_date` date DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `img` blob,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cars_archive`
--

INSERT INTO `cars_archive` (`id`, `brand`, `model`, `buying_price`, `buying_date`, `resale_price`, `resale_date`, `release_date`, `img`) VALUES
(2, 'RENAULT', 'SCENIC', '3600.00', '2019-10-09', '5200.00', '2021-01-18', '2021-01-20', 0x433a66616b6570617468696d616765732e6a7067),
(7, 'FORD', 'FOCUS', '2300.00', '2021-01-14', '4000.00', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `employees`
--

DROP TABLE IF EXISTS `employees`;
CREATE TABLE IF NOT EXISTS `employees` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `passwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `employees`
--

INSERT INTO `employees` (`id`, `lastname`, `firstname`, `email`, `passwd`) VALUES
(6, 'number3', 'employee', 'employeenumber3@carproject.fr', '$2y$10$5xvoERyV9i1c/CbTgTttKelByvoILX1tx90fhtFvrQUT6mDEWjCsG'),
(7, 'number4', 'employee', 'employeenumber4@carproject.fr', '$2y$10$ApCmWgYwwzuBv4iK1vIJUOxyXvqH3CFn8TKn5GjhCuPvZwc9aiRpq'),
(8, 'number58', 'employee', 'employeenumber58@carproject.fr', '$2y$10$zaL3ADYRH1Hf/ZwpU7CiyuUnFiorwBYUaZfyOQzavy9NZ0hoZmESS');

-- --------------------------------------------------------

--
-- Structure de la table `employees_archive`
--

DROP TABLE IF EXISTS `employees_archive`;
CREATE TABLE IF NOT EXISTS `employees_archive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `firstname` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `passwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `employees_archive`
--

INSERT INTO `employees_archive` (`id`, `lastname`, `firstname`, `email`, `passwd`) VALUES
(5, 'number2', 'employee', 'employeenumber2@carproject.fr', '$2y$10$Vwod1e2Kqf2cPLyAPKil3OUNCccm/bRaOullfwGRiXMj0dZSAPIoG');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
