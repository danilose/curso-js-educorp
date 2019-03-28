-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 26-Mar-2019 às 16:19
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loja`
--
CREATE DATABASE IF NOT EXISTS `loja` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `loja`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `categoriaprodutos`
--

CREATE TABLE `categoriaprodutos` (
  `id_categ_prod` int(11) NOT NULL,
  `desc_categ_prod` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categoriaprodutos`
--

INSERT INTO `categoriaprodutos` (`id_categ_prod`, `desc_categ_prod`) VALUES
(1, 'Esportivos'),
(2, 'Festa'),
(3, 'Confort'),
(4, 'Crocs');

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `id_cliente` int(11) NOT NULL,
  `nome_cliente` varchar(40) NOT NULL,
  `data_niver` datetime NOT NULL,
  `email` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nome_cliente`, `data_niver`, `email`) VALUES
(15, 'Monica Ferraz', '1990-04-12 00:00:00', 'ferraz@ig.com.br'),
(16, 'Beatriz Segal', '1990-04-12 00:00:00', 'bsegal@cotuca.br'),
(17, 'Luciana Vasconcelos', '2000-03-30 00:00:00', 'luvaz@ig.com.br'),
(18, 'Monica Ferraz', '1972-04-21 00:00:00', 'ferraz@ig.com.br'),
(19, 'Anderson Nascimento', '1990-08-19 00:00:00', 'nascimento@ig.com.br');

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

CREATE TABLE `produtos` (
  `id_prod` int(11) NOT NULL,
  `desc_produto` varchar(40) NOT NULL,
  `preco_produto` float NOT NULL,
  `id_categ_prod` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`id_prod`, `desc_produto`, `preco_produto`, `id_categ_prod`) VALUES
(1, 'Tenis NIKE X', 678.9, 1),
(2, 'Tenis Adidas Y', 566.99, 1),
(3, 'Viviana', 351.9, 2),
(4, 'Arezzo', 432.87, 2),
(5, 'Picadilly', 223.87, 3),
(6, 'Tradicional', 432.87, 4),
(7, 'Sapatilha', 289.9, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoriaprodutos`
--
ALTER TABLE `categoriaprodutos`
  ADD PRIMARY KEY (`id_categ_prod`);

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indexes for table `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id_prod`),
  ADD KEY `id_categ_prod` (`id_categ_prod`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoriaprodutos`
--
ALTER TABLE `categoriaprodutos`
  MODIFY `id_categ_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`id_categ_prod`) REFERENCES `categoriaprodutos` (`id_categ_prod`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
