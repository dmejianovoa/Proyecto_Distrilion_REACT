// App.jsx - Raiz del componente de el aplicativo DistriLion
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {
  const sampleProduct = {
    id: 1,
    name: "Pomada Mate Fuerte",
    brand: "Lion Gold",
    price: 28000,
  };
  return (
    <>
      <Header cartCount={0} />
      <ProductCard product={sampleProduct} />
    </>
  );
}

export default App;
