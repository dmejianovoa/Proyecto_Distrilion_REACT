// Footer.jsx - Pie de pagina de Distrilion
import "./Footer.css";

function Footer() {
  //Año calculado automaticamente
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__text">
        © {currentYear} DistriLion · Lion Warrior Company. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

export default Footer;
