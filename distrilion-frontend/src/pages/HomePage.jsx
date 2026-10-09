// HomePage.jsx - Pagina principal Carga los productos y muestra un card por producto
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

import "../pages/HomePage.css";
import HeroSection from "../components/HeroSection";
import BrandSection from "../components/BrandSection";
// Se recibe de onAddToCart de App y lo pasa a cada tarjeta (card)
function HomePage({ onAddToCart }) {
  // Empieza con una lista vacia - Se llena cuando llega la informacion
  const [products, setProducts] = useState([]);

  // Corre una vex cuando aparece la pagina (como ngOnInit en angular)
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <HeroSection />
      {/*CATALOGO: El id permite que el link "Catalog" del Header llegue hasta aqui*/}
      <section id="catalog" className="catalog-section py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Productos de Calidad</h2>

          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-6" key={product.id}>
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandSection />
    </>
  );
}

export default HomePage;
