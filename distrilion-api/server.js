// Servidor de la APi de DistriLion

//Importa Express (libreria previamente instalada)
const express = require("express");

//Creación de la aplicacion - este objeto es nuestro servidor
const app = express();

// Puerto donde se escucha (El frontend de Vite ya usa 5173, se utiliza una diferente)
const PORT = 3000;

//Ruta de prueba: al momento de que se pida GET /api/health, responde con un JSON
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "API en funcionamiento" });
});

//Establecer el servidor para recibir respuestas
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
