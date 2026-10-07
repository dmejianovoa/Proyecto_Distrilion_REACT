// App.jsx - Raiz del componente de el aplicativo DistriLion
import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  // Las tarjetas viven juntas porque el Header y product cards necesitan lo mismo
  const [cart, setCart] = useState([]);

  // Se agrega el producto al carrito (recive todo el objeto del producto)
  const handleAddToCart = (product) => {
    console.log("Producto agregado:", product);
    setCart([...cart, product]);
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <HomePage onAddToCart={handleAddToCart} />
    </>
  );
}

export default App;
