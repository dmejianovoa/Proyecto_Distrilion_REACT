// HoursSection.jsx - Horarios de atención (migrado de Angular)
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
      <div className="container py-5">
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
      </div>
    </section>
  );
}

export default HoursSection;
