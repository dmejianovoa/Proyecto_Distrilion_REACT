// Footer.jsx - Pie de pagina de Distrilion
import "./Footer.css";
import logo from "../assets/newlogo.png";

function Footer() {
  //Año calculado automaticamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo, descripción y redes sociales */}
          <div className="col-md-4">
            <img
              src={logo}
              alt="Logo Lion Warrior Company"
              className="footer__logo mb-3"
              height="120"
              loading="lazy"
            />
            <p className="footer__desc">
              Distribuidora oficial de productos para barbería. Calidad y
              profesionalismo en cada producto.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="footer__social-btn" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="footer__social-btn" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="footer__social-btn" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="footer__text">
          © {currentYear} DistriLion · Lion Warrior Company. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
