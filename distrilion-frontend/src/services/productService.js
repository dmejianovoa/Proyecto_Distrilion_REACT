// productService.js - Devuelve product data de la app
// Change: Ahora la informacion la pide de la API de Express remplazando datos de pruebas

//Direccion de la API (Un unico lugar para realizar cambios mas facilmente)
const API_URL = "http://localhost:3000/api";

// Ahora pide la lista de la API y los devuelve
export async function getProducts() {
  // 1. fetch hace la peticion GET y espera la respuesta
  const response = await fetch(`${API_URL}/products`);

  // 2. Si el servidor responde con un error, lo avisamos con throw
  if (!response.ok) {
    throw new Error("No fue posible cargar los productos");
  }

  // 3. Espera la respuesta y convierte el cuerpo de la respuesta de JSON a un arreglo de JavaScript
  return await response.json();
}
