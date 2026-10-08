// Servidor de la APi de DistriLion

//Importa Express (libreria previamente instalada)
const express = require("express");
//IMporta cors (libreria previamente instalada)
const cors = require("cors");

//Creación de la aplicacion - este objeto es nuestro servidor
const app = express();
//Permite que el frontend (Vite, puerto 5173) pida datos de la API
app.use(cors({ origin: "http://localhost:5173" }));

// Puerto donde se escucha (El frontend de Vite ya usa 5173, se utiliza una diferente)
const PORT = 3000;

//Productos de prueba (Temporal). MySQL pendiente de conexion
const Products = [
  { id: 1, name: "Pomada Mate Fuerte", brand: "Lion Gold", price: 28000 },
  { id: 2, name: "Cera Brillante", brand: "Lion Gold", price: 25000 },
  { id: 3, name: "Aceite para Barba", brand: "Beard King", price: 32000 },
  { id: 4, name: "Shampoo para Barba", brand: "Beard King", price: 30000 },
  { id: 5, name: "Máquina Cortadora Pro", brand: "CutMaster", price: 185000 },
  { id: 6, name: "Navaja de Barbero", brand: "CutMaster", price: 45000 },
];

//Ruta de prueba: al momento de que se pida GET /api/health, responde con un JSON
app.get("/api/products", (req, res) => {
  res.json(Products);
});

//Establecer el servidor para recibir respuestas
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
