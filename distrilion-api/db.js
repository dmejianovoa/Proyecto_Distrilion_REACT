// db.js - Conexion a la base de datos MySQL (lion_warriordb)

// Se carga las variables del archivo .env en process.env
require("dotenv").config();

const mysql = require("mysql2/promise");

//Pool utlizado ya que es un grupo de conexiones listas para reutilizar
//Con esto no se abre y cierra una conexion nueva en cada peticion

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Exporta el pool para que otros archivos puedan hacer sus consultas
module.exports = pool;
