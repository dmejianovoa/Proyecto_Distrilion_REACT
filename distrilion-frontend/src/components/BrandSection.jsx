// BrandSection.jsx - Seccion de marcas aliadas (migrado de Angular)
import "./BrandSection.css";

// Lista de marcas: Si en un futuro se llega a agregar una nueva
// Se agrega una linea aqui
const brands = [
  { id: 1, name: "Ossion", image: "/ossion1.png" },
  { id: 2, name: "Roterbart", image: "/roterbart1.png" },
  { id: 3, name: "Reuzel", image: "/reuzel1.png" },
  { id: 4, name: "Agiva", image: "/agiva1.png" },
  { id: 5, name: "Barbershop", image: "/barbershop.png" },
];

function BrandSection() {
  return (
    <section id="brands" className="brands-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Marcas Aliadas</h2>

        <div className="row g-3 justify-content-center">
          {/* Una columna por marca; el key va en el elemento más externo */}
          {brands.map((brand) => (
            <div className="col-6 col-md-2" key={brand.id}>
              <img
                src={brand.image}
                alt={`Marca ${brand.name}`}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandSection;
