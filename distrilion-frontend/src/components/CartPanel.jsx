// CartPanel.jsx - Botón flotante del carrito + panel con su contenido
import { useState } from "react";
import "./CartPanel.css";

function CartPanel({ cart }) {
  // Controla si el panel está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Total de unidades, para el globito del botón
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Total a pagar: suma de precio x cantidad de cada ítem
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Formatea números como pesos colombianos
  const formatPrice = (value) =>
    value.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    });

  return (
    <>
      {/* Botón flotante: siempre visible, abre y cierra el panel */}
      <button
        className="cart-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir o cerrar carrito"
      >
        <i className="bi bi-cart3"></i>
        {totalItems > 0 && (
          <span className="cart-toggle__badge">{totalItems}</span>
        )}
      </button>

      {/* El panel solo se dibuja si isOpen es true */}
      {isOpen && (
        <div className="cart-panel">
          <h3 className="cart-panel__title">Tu carrito</h3>

          {cart.length === 0 ? (
            <p className="cart-panel__empty">El carrito está vacío</p>
          ) : (
            <>
              <ul className="cart-panel__list">
                {cart.map((item) => (
                  <li key={item.id} className="cart-panel__item">
                    <span className="cart-panel__name">{item.name}</span>
                    <span className="cart-panel__qty">x{item.quantity}</span>
                    <span className="cart-panel__price">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="cart-panel__total">
                <strong>Total:</strong> <strong>{formatPrice(total)}</strong>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default CartPanel;
