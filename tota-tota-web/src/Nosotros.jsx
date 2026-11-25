import {
  ArrowRight,
  CookingPot,
  Heart,
  Sparkles,
  Wheat,
} from "lucide-react";
import "./nosotros.css";

const whatsappUrl = "https://wa.me/573002128931?text=Hola%2C%20quiero%20hacer%20un%20pedido%20con%20Tota%20Tota";

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function Button({ href = whatsappUrl, children }) {
  return <a className="button" href={href}>{children}<ArrowRight size={16} aria-hidden="true" /></a>;
}

const values = [
  { title: "Recetas que conectan", text: "Tradición e inspiración en cada creación.", Icon: CookingPot },
  { title: "Hecho con cariño", text: "Porque los detalles sí importan.", Icon: Heart },
  { title: "Ingredientes de calidad", text: "Seleccionados con cuidado para un mejor sabor.", Icon: Wheat },
  { title: "Creatividad en cada detalle", text: "Productos únicos para cada ocasión.", Icon: Sparkles },
];

export default function Nosotros() {
  return (
    <div className="about-page">
      <section className="about-hero section-wrap">
        <div className="about-hero-copy">
          <Eyebrow>Nuestra esencia</Eyebrow>
          <h1>Una historia<br />de dos</h1>
          <p>Tota Tota Baked nació de una historia compartida entre Silvia y Joaquín, inspirada en las recetas de su abuela y en la alegría de crear cosas que unen.</p>
        </div>
        <img src="/images/products/torta-zanahoria-almendras.jpeg" alt="Torta artesanal de zanahoria cubierta con almendras" />
      </section>

      <section className="about-origins">
        <div className="about-origins-inner section-wrap">
          <div className="about-polaroid">
            <img src="/images/products/silvia-joaquin-nosotros.jpeg" alt="Silvia y Joaquín compartiendo una torta de chocolate" loading="lazy" />
            <span className="polaroid-tape" aria-hidden="true" />
          </div>
          <div className="about-origins-copy">
            <Eyebrow>Nuestros orígenes</Eyebrow>
            <h2>Todo empezó<br />en la cocina</h2>
            <p>Entre recetas, momentos en familia y el gusto por crear cosas que pudieran disfrutarse y compartirse, Silvia y Joaquín comenzaron a dar forma a algo que iba mucho más allá de la pastelería.</p>
            <p>La cocina de su abuela fue la inspiración: un lugar donde los ingredientes se transformaban en momentos de conexión, alegría y mucho cariño.</p>
          </div>
        </div>
      </section>

      <section className="about-promise section-wrap">
        <div className="about-promise-copy">
          <Eyebrow>Más que pastelería</Eyebrow>
          <h2>Creamos<br />momentos</h2>
          <p>Creemos en la conexión, la autenticidad y la creatividad. Cada producto que hacemos está elaborado con ingredientes de calidad y mucho cuidado, para acompañar tus momentos más dulces.</p>
        </div>
        <img src="/images/products/cupcakes-caja.jpeg" alt="Cupcakes decorados para compartir" loading="lazy" />
      </section>

      <section className="about-values section-wrap">
        <div className="about-values-heading">
          <Eyebrow>Lo que nos define</Eyebrow>
          <h2>Nuestros valores</h2>
        </div>
        <div className="about-values-grid">
          {values.map(({ title, text, Icon }) => (
            <article className="about-value" key={title}>
              <span className="about-value-icon"><Icon size={36} strokeWidth={1.6} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-universe section-wrap">
        <img src="/images/products/brownies.jpeg" alt="Brownies artesanales recién horneados" loading="lazy" />
        <div className="about-universe-copy">
          <Eyebrow>Nuestro universo</Eyebrow>
          <h2>Un mundo<br />de sabores</h2>
          <p>Desde tortas clásicas hasta creaciones especiales, cada producto está hecho para acompañar celebraciones, regalar sonrisas y hacer de lo cotidiano un momento especial.</p>
          <Button href="/#productos">Explora nuestros productos</Button>
        </div>
      </section>

      <section className="about-contact section-wrap" id="contacto">
        <div className="about-contact-copy">
          <h2>¿Tienes una idea<br />en mente?</h2>
          <p>Ya sea una celebración especial, un regalo o simplemente un antojo, estamos aquí para hacerlo realidad.</p>
          <Button>Hablemos por WhatsApp</Button>
        </div>
        <img src="/images/products/galletas-personalizadas.jpeg" alt="Galletas decoradas para una ocasión especial" loading="lazy" />
      </section>
    </div>
  );
}
