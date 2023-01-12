-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 12 jan. 2023 à 14:59
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pokemonv2`
--

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

CREATE TABLE `player` (
  `id` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `champion` tinyint(1) NOT NULL,
  `poke_id1` int(3) DEFAULT NULL,
  `poke_id2` int(3) DEFAULT NULL,
  `poke_id3` int(3) DEFAULT NULL,
  `poke_id4` int(3) DEFAULT NULL,
  `poke_id5` int(3) DEFAULT NULL,
  `poke_id6` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `player`
--

INSERT INTO `player` (`id`, `psw`, `pseudo`, `champion`, `poke_id1`, `poke_id2`, `poke_id3`, `poke_id4`, `poke_id5`, `poke_id6`) VALUES
('tristanL', 'test', 'Necr3w', 0, 3, 6, 149, 784, 488, 448);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
