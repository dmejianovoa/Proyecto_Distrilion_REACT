// App.jsx - Raiz del componente de el aplicativo DistriLion
import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  // Cada item del carrito es un producto con su cantidad { id, name, price, quantity, ... }
  const [cart, setCart] = useState([]);

  // Agrega un producto: Si el producto ya se encuentra en el carrito suma 1, si no es asi
  // Se agrega con cantidad 1
  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      //Crea un arreglo nuevo donde solo cambia el item repetido
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Total de unidades (equivale al getter totalItems de Angular)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Header cartCount={totalItems} />
      <HomePage onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
