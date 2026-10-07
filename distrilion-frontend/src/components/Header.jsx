//Header.jsx - Top bar de la aplicación: Migracion completa de proyecto paralelo Angular
import { useState } from "react";
import logo from "/src/assets/newlogo.png";
import "/src/components/Header.css";

// los Props son recibidos de un unico objeto; Destructuramos el que necesitamos
function Header({ cartCount }) {
  //State: Si el menu movil es open? React vuelve a representar el componente cuando cambia
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Al momento de usar cada link del menu mobile lo cierra despues de la navegacion
  const closeMenu = () => setIsMenuOpen(false);

  //Remplazo de Angular: [class.nc-open]="menuAbierto"
  const openClass = isMenuOpen ? "nv-open" : "";

  return (
    <nav className="navbar navbar-dark bg-black border-bottom border-dark py-3">
      <div className="container-fluid px-3 navbar-grid">
        {/* Boton de hamburguesa (visible solo en dispositivos moviles) */}
        <button
          className="navbar-toggle-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
        </button>

        {/* Links de la izquierda */}
        <div
          className={`d-flex gap-3 justify-content-end pe-4 nv-links-left ${openClass}`}
        >
          <a
            href="#catalog"
            className="nav-link text-white"
            onClick={closeMenu}
          >
            Catalogo
          </a>

          <a href="#about" className="nav-link text-white" onClick={closeMenu}>
            Nosotros
          </a>
        </div>

        {/* Centra el logo (lo esconde mientras el menu movil esta abierto) */}
        <a
          href="#top"
          className={`navbar-brand m-0 text-center ${isMenuOpen ? "d-none" : ""}`}
        >
          <img
            src={logo}
            alt="Lion Warrior Company logo"
            width="140"
            height="120"
            loading="lazy"
          />
        </a>

        {/* Links lado derecho + icono de carrito */}
        <div
          className={`d-flex align-items-center gab-3 ps-4 justify-content-between nv-links-right ${openClass}`}
        >
          <div className="d-flex gap-3">
            <a
              href="#brands"
              className="nav-link text-white"
              onClick={closeMenu}
            >
              Marcas Premium
            </a>

            <a
              href="#location"
              className="nav-link text-white"
              onClick={closeMenu}
            >
              Ubicacion
            </a>
            <a
              href="https://wa.me/573123499989?text=Hola!%20Quiero%20información%20sobre%20los%20servicios%20de%20Lion%20Warrior%20Company"
              target="_blank"
              rel="noreferrer"
              className="nav-link text-white"
            >
              Haz tu pedido
            </a>
          </div>
          <div className="icon-login">
            {/* El atributo "tooltip" es leido por CSS (content: attr(tooltip)) */}
            <a
              href="#cart"
              tooltip={`Cart${cartCount}`}
              className="icon"
              onClick={closeMenu}
            >
              <i className="bi bi-cart3"></i>
            </a>

            {/* Bagde: Solo cambia cuando el carrito tiene almenos un producto */}
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
