// productCard.jsx - Despliegua un solo producto ()
// Importancion de estilos css
import "/src/components/ProductCard.css";
// "product" es un prop: Los padres pasan un objeto de producto de esta card
// "onAddToCart para dar funcion al boton de agregar al carrito"
function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        {/* Espacio para una imagen real, no configurado */}
        <span>No imagen</span>
      </div>

      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__brand">{product.brand}</p>

      {/* toLocalString - formato de el numero como pesos colombianos, $28.000 */}
      <p className="product-card__price">
        {product.price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          maximumFractionDigits: 0,
        })}
      </p>

      <button
        className="product-card__button"
        onClick={() => onAddToCart(product)}
      >
        Agregar al Carrito
      </button>
    </article>
  );
}

export default ProductCard;
