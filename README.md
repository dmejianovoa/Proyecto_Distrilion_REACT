# DistriLion – Módulo de distribuidora (React + Node/Express)

Migración del módulo **DistriLion** de Lion Warrior Company, que estaba en Angular, a **React**, con una API en **Node.js/Express** conectada a **MySQL**.

Evidencia: GA7-220501096-AA4-EV03 – Codificación de módulos del software según requerimientos del proyecto.

## Tecnologías

- **Front-end:** React (Vite, JavaScript), Bootstrap 5, Bootstrap Icons
- **Back-end:** Node.js, Express, mysql2, dotenv, cors
- **Base de datos:** MySQL (`lion_warriordb`)
- **Control de versiones:** Git y GitHub

## Estructura del proyecto

```
distrilion/
├── distrilion-frontend/
│   └── src/
│       ├── components/   Header, HeroSection, ProductCard, BrandsSection,
│       │                 AboutSection, HoursSection, CartPanel, Footer
│       ├── pages/        HomePage
│       ├── services/     productService.js (consumo de la API)
│       ├── App.jsx       Estado del carrito y composición general
│       └── main.jsx
└── distrilion-api/
    ├── server.js         Rutas de la API
    ├── db.js             Conexión a MySQL
    └── .env.example      Plantilla de variables de entorno
```

Árbol de componentes: `App → Header / HomePage / Footer`, con `CartPanel` como botón flotante.

## Cómo ejecutarlo

### 1. API

```bash
cd distrilion-api
npm install
```

Copia `.env.example` a `.env` y completa tus datos de MySQL (host, puerto, usuario, contraseña y `DB_NAME=lion_warriordb`). Luego:

```bash
node server.js
```

La API queda en `http://localhost:3000/api/products`.

### 2. Front-end

```bash
cd distrilion-frontend
npm install
npm run dev
```

La aplicación queda en `http://localhost:5173`.

## Funcionalidades

- Catálogo de productos cargado desde MySQL a través de la API
- Estados de carga y error al consultar los productos
- Carrito de compras: agregar, sumar, restar, quitar y total en pesos colombianos
- Secciones de marcas, información del local y horarios con navegación por anclas

## Estándares de codificación

| Elemento                   | Convención               | Ejemplo                         |
| -------------------------- | ------------------------ | ------------------------------- |
| Componentes y sus archivos | PascalCase               | `ProductCard.jsx`               |
| Funciones y variables      | camelCase                | `handleAddToCart`, `totalItems` |
| Manejadores de eventos     | prefijo `handle`         | `handleIncrease`                |
| Props de eventos           | prefijo `on`             | `onAddToCart`                   |
| Clases CSS                 | BEM (`bloque__elemento`) | `cart-panel__item`              |
| Servicios                  | carpeta `services/`      | `productService.js`             |

Otras reglas aplicadas:

- Un componente por archivo, con su CSS al lado.
- El estado nunca se modifica directamente: se usa el _setter_ con un valor nuevo (`[...cart, item]`, `.map()`, `.filter()`).
- El estado compartido (carrito) vive en `App.jsx` y se pasa por props.
- Comentarios en español al inicio de cada archivo y en la lógica no evidente.
- Calidad de código verificada con ESLint (`npm run lint`).
- Las credenciales van en `.env`, que no se sube al repositorio.

## Control de versiones

- Repositorio en GitHub con commits pequeños, uno por cada funcionalidad.
- Mensajes con prefijo de tipo: `feat:` (nueva funcionalidad), `fix:` (corrección).

## Autor

Damian Andrés Mejía Novoa – SENA, Tecnólogo en Análisis y Desarrollo de Software, Ficha 3235899.
