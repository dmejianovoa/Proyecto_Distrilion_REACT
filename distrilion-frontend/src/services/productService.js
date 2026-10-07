// productService.js - Devuelve product data de la app
// Por el momento solo devuelve mock data | Despues la API express hara el llamado.

// Mock products (Temporal). Precios en COP.
const mockProducts = [
  {
    id: 1,
    name: "Pomada Mate Fuerte",
    brand: "Lion Gold",
    price: 28000,
    image: "",
  },
  {
    id: 2,
    name: "Cera Brillante",
    brand: "Lion Gold",
    price: 25000,
    image: "",
  },
  {
    id: 3,
    name: "Aceite para Barba",
    brand: "Beard King",
    price: 32000,
    image: "",
  },
  {
    id: 4,
    name: "Shampoo para Barba",
    brand: "Beard King",
    price: 30000,
    image: "",
  },
  {
    id: 5,
    name: "Máquina Cortadora Pro",
    brand: "CutMaster",
    price: 185000,
    image: "",
  },
  {
    id: 6,
    name: "Navaja de Barbero",
    brand: "CutMaster",
    price: 45000,
    image: "",
  },
];

// Devuelve la lista de los programas
// Es un async (devuelve a una promesa) a proposito: Sera implementado igual al momento de llamar la real API
// Los componentes que usa esta función no se cambiarán despues.
export async function getProducts() {
  return mockProducts;
}
