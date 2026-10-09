// productCard.jsx - Despliegua un solo producto ()
// Importancion de estilos css
import "/src/components/ProductCard.css";
// "product" es un prop: Los padres pasan un objeto de producto de esta card
// "onAddToCart para dar funcion al boton de agregar al carrito"
function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-info">
        <h5>{product.name}</h5>
        <p className="product-description">{product.description}</p>

        <span className="product-price">
          {product.price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
            maximumFractionDigits: 0,
          })}
        </span>

        <button
          className="btn btn-warning btn-sm rounded-pill px-3 mt-2"
          onClick={() => onAddToCart(product)}
        >
          Agregar al Carrito
        </button>
      </div>

      {/* Placeholder gris: la tabla products todavía no tiene columna de imagen */}
      <div className="product-img"></div>
    </article>
  );
}

export default ProductCard;
