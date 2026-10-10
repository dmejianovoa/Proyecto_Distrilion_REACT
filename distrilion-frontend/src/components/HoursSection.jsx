// HoursSection.jsx - Horarios de atención y ubicación (migrado de Angular)
import "./HoursSection.css";

// Los horarios viven en un arreglo: para cambiar uno, se edita solo aquí
const schedules = [
  { id: 1, days: "Lunes a Viernes", hours: "9:00 AM - 6:00 PM" },
  { id: 2, days: "Sábado", hours: "10:00 AM - 4:00 PM" },
  { id: 3, days: "Domingo", hours: "9:00 AM - 12:00 PM" },
];

function HoursSection() {
  return (
    <section id="location" className="hours-section py-5">
      <div className="container py-4">
        <h2 className="text-center fw-bold mb-5">Horarios de Atención</h2>

        <div className="row g-4 justify-content-center">
          {schedules.map((schedule) => (
            <div className="col-md-4" key={schedule.id}>
              <div className="schedule-card text-center p-4 rounded shadow-sm">
                <h5>{schedule.days}</h5>
                <p>{schedule.hours}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mapa con la ubicación del local */}
        <div className="hours-section__map mt-4">
          <p className="text-center fw-bold mb-3 text-light">
            Estamos ubicados en:
          </p>
          <iframe
            title="Ubicación de Lion Warrior Company"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.097391440859!2d-74.2111587868671!3d4.634302713406448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9de3fbcc4b91%3A0xf3dab037e9307a56!2sCra.%2098b%20%2369%20Sur-19%20a%2069%20Sur-71%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1791635279145!5m2!1sen!2sco"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default HoursSection;
