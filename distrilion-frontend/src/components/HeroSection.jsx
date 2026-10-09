// HeroSection.jsx - Banner principal de Distrilion (Migrado de Angular)

import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="distri-hero">
      <div className="distri-hero-bg"></div>
      <div className="distri-hero-overlay"></div>
      <div className="distri-hero-content">
        <h1>
          Bienvenido a<span> Distrilion</span>
        </h1>
        <p className="distri-hero-subtitle">Distribuidora Oficial</p>
      </div>
    </section>
  );
}

export default HeroSection;
