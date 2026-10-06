// HomePage.jsx - Pagina principal Carga los productos y muestra un card por producto
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function HomePage() {
  // Empieza con una lista vacia - Se llena cuando llega la informacion
  const [products, setProducts] = useState([]);

  // Corre una vex cuando aparece la pagina (como ngOnInit en angular)
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <main id="catalog" className="catalog">
      <h2>Catalogo</h2>

      <div className="catalog__grid">
        {/* Un productCard por cada producto en la lista */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}

export default HomePage;
