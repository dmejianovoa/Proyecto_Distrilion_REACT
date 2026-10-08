// Servidor de la APi de DistriLion

//Importa Express (libreria previamente instalada)
const express = require("express");
//Importa cors (libreria previamente instalada)
const cors = require("cors");
//Import pool (Fuente de archivos de reutilizacion)
const pool = require("./db");

//Creación de la aplicacion - este objeto es nuestro servidor
const app = express();
//Permite que el frontend (Vite, puerto 5173) pida datos de la API
app.use(cors({ origin: "http://localhost:5173" }));

// Puerto donde se escucha (El frontend de Vite ya usa 5173, se utiliza una diferente)
const PORT = 3000;

//GET /api/products -> devuelve los productos desde MySQL
app.get("/api/products", async (req, res) => {
  try {
    //Se usa alias (AS) que renombra las columnas, con el proposito de que el frontend
    //reciba los mismos nombres que se han utilizado en la construccion
    const [rows] = await pool.query(
      `SELECT id_product AS id,
                    product_name AS name,
                    product_description AS description,
                    price_retail As price
            FROM products`,
    );

    //MySQL entrega los DECIMAl como texto, asi que
    //convertimos el precio a numero para que el frontend lo pueda formatear
    const products = rows.map((row) => ({ ...row, price: Number(row.price) }));

    res.json(products);
  } catch (error) {
    //Si llegara a presentarse un error, respondemos con un error 500 para informar al usuario
    console.error("Error consultando productos:", error);
    res.status(500).json({ message: "Error al consultar los productos" });
  }
});

//Establecer el servidor para recibir respuestas
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
