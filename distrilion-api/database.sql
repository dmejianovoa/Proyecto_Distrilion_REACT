-- database.sql - Estructura y datos de prueba de DistriLion
CREATE DATABASE IF NOT EXISTS lion_warriordb
  CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE lion_warriordb;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id_product INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  product_description VARCHAR(100) DEFAULT NULL,
  price_retail DECIMAL(10,2) NOT NULL,
  price_wholesale DECIMAL(10,2) NOT NULL,
  stock_actual INT NOT NULL,
  stock_minimo INT NOT NULL,
  PRIMARY KEY (id_product),
  CONSTRAINT chk_products_price_retail CHECK (price_retail > 0),
  CONSTRAINT chk_products_price_wholesale CHECK (price_wholesale > 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Datos de prueba (copia de la tabla real)
INSERT INTO products
  (id_product, product_name, product_description, price_retail, price_wholesale, stock_actual, stock_minimo)
VALUES
  (1,  'Cera Diamond',       'Producto especial para cabello de hombre',        40000, 20000, 20, 1),
  (2,  'Shampoo Dix',        'Shampoo especial anticaida',                      60000, 45000, 15, 1),
  (3,  'Gel Roldan',         'Gel aromatico plactico hombre',                   20000, 15000, 30, 5),
  (4,  'Minoxidil',          'Producto para crecer el cabello',                 75000, 50000, 10, 3),
  (9,  'Pomada Mate Fuerte', 'Pomada de fijación fuerte y acabado mate',        28000, 22000, 30, 5),
  (10, 'Aceite para Barba',  'Aceite hidratante para barba suave y brillante',  32000, 25000, 25, 5),
  (11, 'Cera Brillante',     'Cera de fijación media con acabado brillante',    25000, 19000, 40, 8),
  (12, 'Navaja de Barbero',  'Navaja de acero inoxidable para afeitado clásico', 45000, 36000, 15, 3);