// HomePage.jsx - Pagina principal Carga los productos y muestra un card por producto
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

import "../pages/HomePage.css";
import HeroSection from "../components/HeroSection";
import BrandSection from "../components/BrandSection";
import AboutSection from "../components/AboutSection";
import HoursSection from "../components/HoursSection";
// Se recibe de onAddToCart de App y lo pasa a cada tarjeta (card)
function HomePage({ onAddToCart }) {
  // Empieza con una lista vacia - Se llena cuando llega la informacion
  const [products, setProducts] = useState([]);
  // Empieza cargando elementos de la API - Mensaje de carga
  const [isLoading, setisLoading] = useState(true);
  //Error por si no recibe respuesta de la peticion a la API o falla conexion / Sin error al inicio
  const [error, setError] = useState(null);

  // Corre una vex cuando aparece la pagina (como ngOnInit en angular)
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setError(
          "No fue posible cargar los productos. intenta de nuevo mas tarde",
        );
      })
      .finally(() => {
        setisLoading(false); //Termina la carga. haya salido bien o mal
      });
  }, []);

  return (
    <>
      <HeroSection />
      {/*CATALOGO: El id permite que el link "Catalog" del Header llegue hasta aqui*/}
      <section id="catalog" className="catalog-section py-5">
        {isLoading && (
          <p className="text-center text-warning"> Cargando productos...</p>
        )}

        {error && <p className="text-center text-danger">{error}</p>}

        {!isLoading && !error && (
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-6" key={product.id}>
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </div>
            ))}
          </div>
        )}
      </section>

      <BrandSection />
      <AboutSection />
      <HoursSection />
    </>
  );
}

export default HomePage;
