// AboutSection.jsx - Sección "Sobre Nosotros" (migrada de Angular)
import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Columna de texto */}
          <div className="col-md-6">
            <h2 className="fw-bold">
              Sobre <span className="text-gold">Nosotros</span>
            </h2>
            <p className="mb-4">
              Somos una distribuidora oficial comprometida con ofrecer productos
              de alta calidad a nuestros clientes. Nuestra misión es brindar un
              servicio excepcional y garantizar la satisfacción de cada cliente.
            </p>
            <a href="#" className="btn btn-warning btn-lg rounded-pill px-4">
              Conoce Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
