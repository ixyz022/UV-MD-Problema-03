-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-08-2018 a las 07:18:45
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprador`
--

CREATE TABLE `comprador` (
  `idComprador` int(11) NOT NULL,
  `nombreComprador` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comprador`
--

INSERT INTO `comprador` (`idComprador`, `nombreComprador`) VALUES
(1, 'Dwayne Johnson'),
(2, 'Under Taker');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Producto`
--

CREATE TABLE `Producto` (
  `numeroVendedor` int(11) NOT NULL,
  `idComprador` int(11) NOT NULL,
  `idTipoProducto` int(11) NOT NULL,
  `precioCompra` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Producto`
--

INSERT INTO `Producto` (`numeroVendedor`, `idComprador`, `idTipoProducto`, `precioCompra`) VALUES
(1, 1, 1, 1000),
(2, 2, 2, 2000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TipoProducto`
--

CREATE TABLE `TipoProducto` (
  `idTipoProducto` int(11) NOT NULL,
  `descripcionProducto` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `TipoProducto`
--

INSERT INTO `TipoProducto` (`idTipoProducto`, `descripcionProducto`) VALUES
(1, 'Cinturón campeonato Lucha Violenta'),
(2, 'Silla plegable');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `numeroVendedor` int(11) NOT NULL,
  `nombreVendedor` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vendedor`
--

INSERT INTO `vendedor` (`numeroVendedor`, `nombreVendedor`) VALUES
(1, 'Cactus Jack'),
(2, 'Stone Cold Steve Austin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comprador`
--
ALTER TABLE `comprador`
  ADD PRIMARY KEY (`idComprador`);

--
-- Indices de la tabla `Producto`
--
ALTER TABLE `Producto`
  ADD KEY `fk_comprador` (`idComprador`),
  ADD KEY `fk_vendedor` (`numeroVendedor`),
  ADD KEY `fk_tipoproducto` (`idTipoProducto`);

--
-- Indices de la tabla `TipoProducto`
--
ALTER TABLE `TipoProducto`
  ADD PRIMARY KEY (`idTipoProducto`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`numeroVendedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comprador`
--
ALTER TABLE `comprador`
  MODIFY `idComprador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `TipoProducto`
--
ALTER TABLE `TipoProducto`
  MODIFY `idTipoProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `numeroVendedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Producto`
--
ALTER TABLE `Producto`
  ADD CONSTRAINT `fk_comprador` FOREIGN KEY (`idComprador`) REFERENCES `comprador` (`idComprador`),
  ADD CONSTRAINT `fk_tipoproducto` FOREIGN KEY (`idTipoProducto`) REFERENCES `TipoProducto` (`idTipoProducto`),
  ADD CONSTRAINT `fk_vendedor` FOREIGN KEY (`numeroVendedor`) REFERENCES `vendedor` (`numeroVendedor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
