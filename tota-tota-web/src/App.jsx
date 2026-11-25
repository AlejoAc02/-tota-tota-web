import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Nosotros from "./Nosotros.jsx";
import Contacto from "./Contacto.jsx";
import Productos, { ProductImagePlaceholder, products } from "./Productos.jsx";
import DetalleProducto from "./DetalleProducto.jsx";

const whatsappUrl = "https://wa.me/573002128931?text=Hola%2C%20quiero%20hacer%20un%20pedido%20con%20Tota%20Tota";
const instagramUrl = "https://www.instagram.com/totatotabaked/";
const image = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const heroPhotos = [
  { src: "/images/products/torta-chocolate-chips.jpeg", alt: "Torta artesanal de chocolate con chips" },
  { src: "/images/products/torta-zanahoria-almendras.jpeg", alt: "Torta de zanahoria cubierta con almendras" },
  { src: "/images/products/cupcakes-rosados.jpeg", alt: "Cupcakes artesanales decorados" },
  { src: "/images/products/galletas-personalizadas.jpeg", alt: "Galletas decoradas para una ocasión especial" },
];

const categories = [
  { title: "Tortas", description: "Tortas clásicas, fit y decoradas", filter: "Tortas", product: products.find((item) => item.slug === "torta-de-chocolate") },
  { title: "Tortas fit", description: "Opciones endulzadas con monk fruit", filter: "Tortas fit", product: products.find((item) => item.slug === "torta-choco-fit") },
  { title: "Galletas", description: "Galletas decoradas y kits para crear", filter: "Galletas", product: products.find((item) => item.slug === "galletas-personalizadas") },
  { title: "Pequeños antojos", description: "Cupcakes, brownies, alfajores y más", filter: "Pequeños antojos", product: products.find((item) => item.slug === "cupcakes") },
  { title: "Panes", description: "Panes artesanales y rollos de chocolate", filter: "Panes", product: products.find((item) => item.slug === "pan-artesanal") },
  { title: "Especialidades", description: "Arequipe y creaciones personalizadas", filter: "Especialidades", product: products.find((item) => item.slug === "arequipe-monk-fruit") },
];

function Brand({ footer = false }) {
  return <a className={`brand${footer ? " brand--footer" : " brand--header"}`} href="/" aria-label="Tota Tota, inicio"><img src={footer ? "/images/logo-footer.png" : "/images/logo-header.png"} alt="" /></a>;
}

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function Button({ href = whatsappUrl, children }) {
  return <a className="button" href={href}>{children}<ArrowRight size={16} aria-hidden="true" /></a>;
}

function InstagramIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>;
}

function WhatsAppIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.48 0 .1 5.37.1 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.9 11.9 0 0 0 5.88 1.5h.01c6.6 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.2-3.55-8.41ZM12.09 21.84h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.68.97.98-3.59-.23-.37a9.87 9.87 0 0 1-1.52-5.29c0-5.43 4.42-9.85 9.85-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.88 6.97c0 5.43-4.42 9.85-9.85 9.85Zm5.4-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z" /></svg>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  const isNosotros = currentPath === "/nosotros";
  const isContacto = currentPath === "/contacto";
  const isProductos = currentPath === "/productos";
  const isProductDetail = currentPath.startsWith("/productos/");
  const isHome = !isNosotros && !isContacto && !isProductos && !isProductDetail;
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Navegación principal">
            <a className={isHome ? "active" : ""} href="/" onClick={closeMenu}>Inicio</a>
            <a className={isNosotros ? "active" : ""} href="/nosotros" onClick={closeMenu}>Nosotros</a>
            <a className={isProductos || isProductDetail ? "active" : ""} href="/productos" onClick={closeMenu}>Productos</a>
            <a className={isContacto ? "active" : ""} href="/contacto" onClick={closeMenu}>Contacto</a>
          </nav>
          <div className="header-actions">
            <a className="social-icon" href={instagramUrl} aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramIcon size={19} /></a>
            <Button>Hablemos por WhatsApp</Button>
          </div>
        </div>
      </header>

      <main>
        {isNosotros ? <Nosotros /> : isContacto ? <Contacto /> : isProductDetail ? <DetalleProducto slug={currentPath.split("/").filter(Boolean).at(-1)} /> : isProductos ? <Productos /> : <>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <Eyebrow>Pastelería artesanal</Eyebrow>
            <h1>Más que<br />pastelería,<br />son momentos</h1>
            <p>Pastelería artesanal que transforma ingredientes en momentos. Un universo de sabores, creatividad y mucho cariño.</p>
            <Button href="#productos">Conoce nuestros productos</Button>
          </div>
          <div className="hero-photo-wrap">
            <img className="hero-photo" src={heroPhotos[heroIndex].src} alt={heroPhotos[heroIndex].alt} />
            <div className="hero-dots" aria-label="Seleccionar imagen de portada">
              {heroPhotos.map((photo, index) => <button key={photo.src} className={heroIndex === index ? "selected" : ""} type="button" aria-label={`Mostrar imagen ${index + 1}`} aria-pressed={heroIndex === index} onClick={() => setHeroIndex(index)} />)}
            </div>
          </div>
        </section>

        <section className="universe section-pad" id="categorias">
          <div className="section-heading split-heading">
            <div><Eyebrow>Nuestro universo</Eyebrow><h2>Un mundo de sabores</h2></div>
            <p>Desde tortas clásicas hasta creaciones especiales, cada producto está hecho con ingredientes de calidad y mucho cariño, para acompañar tus momentos más dulces.</p>
          </div>
          <div className="category-grid">
            {categories.map((item) => <a className="category-card" href={`/productos?categoria=${encodeURIComponent(item.filter)}`} key={item.title}><img src={item.product.image} alt={item.product.name} loading="lazy" /><h3>{item.title}</h3><p>{item.description}</p></a>)}
          </div>
        </section>

        <section className="story section-wrap" id="nosotros">
          <div className="story-photo"><img src="/images/products/cupcakes-individuales.jpeg" alt="Cupcakes artesanales preparados para compartir" loading="lazy" /></div>
          <div className="story-copy">
            <Eyebrow>Nuestra historia</Eyebrow>
            <h2>Una historia<br />de dos</h2>
            <p>Esta marca nació de una historia compartida entre Silvia y Joaquín, inspirada en las recetas de su abuela.</p>
            <p>Entre recetas, momentos en familia y el gusto por crear cosas que pudieran disfrutarse y compartirse, comenzó a tomar forma algo que iba mucho más allá de la pastelería.</p>
            <Button href="#contacto">Conoce nuestra historia</Button>
          </div>
          <img className="story-seal" src="/images/logo-header.png" alt="Tota Tota" />
        </section>

        <section className="featured section-pad" id="productos">
          <div className="section-heading featured-heading">
            <div><Eyebrow>Productos destacados</Eyebrow><h2>Hecho para compartir</h2><p>Algunas de nuestras creaciones favoritas, hechas con ingredientes de calidad y mucho cariño.</p></div>
            <a className="text-link" href="/productos">Ver todos los productos <ArrowRight size={16} /></a>
          </div>
          <div className="product-grid">
            {products.slice(0, 8).map((item) => <a className="product-card" href={`/productos/${item.slug}`} key={item.slug}>{item.image ? <img src={item.image} alt={item.name} loading="lazy" /> : <ProductImagePlaceholder label={item.name} tone={item.tone} />}<div><h3>{item.name}</h3><p>{item.description}</p></div></a>)}
          </div>
        </section>

        <section className="moments section-wrap">
          <div className="moments-copy"><Eyebrow>Creamos</Eyebrow><h2>Momentos únicos</h2><p>Ya sea una celebración especial, un regalo o simplemente un antojo, estamos aquí para hacerlo realidad.</p><Button>Hablemos de tu idea</Button></div>
          <img src="/images/products/brownies.jpeg" alt="Brownies artesanales listos para compartir" loading="lazy" />
        </section>

        <section className="values" aria-label="Lo que nos inspira">
          {[ ["Recetas", "Que conectan", "✳"], ["Hecho", "Con cariño", "♡"], ["Ingredientes", "De calidad", "❋"], ["Creatividad", "En cada detalle", "✿"] ].map(([title, subtitle, icon]) => <div className="value-item" key={title}><span className="value-icon">{icon}</span><h3>{title}</h3><p>{subtitle}</p></div>)}
        </section>

        <section className="gallery section-wrap" aria-label="Creaciones Tota Tota">
          {[["/images/products/brownies.jpeg", "Brownies artesanales"], ["/images/products/torta-chocolate-chips.jpeg", "Torta de chocolate con chips"], ["/images/products/cupcakes-rosados.jpeg", "Cupcakes decorados"], ["/images/products/galletas-personalizadas.jpeg", "Galletas personalizadas"]].map(([photo, alt]) => <img src={photo} alt={alt} loading="lazy" key={photo} />)}
        </section>

        <section className="contact section-wrap" id="contacto">
          <div className="contact-copy"><h2>¿Tienes una idea<br />en mente?</h2><p>Cuéntanos y la hacemos realidad. Estamos aquí para acompañar tus momentos más especiales.</p><Button>Hablemos por WhatsApp</Button></div>
          <img src="/images/products/cupcakes-caja.jpeg" alt="Cupcakes decorados para una ocasión especial" loading="lazy" />
        </section>
        </>}
      </main>

      <footer className="site-footer section-wrap">
        <Brand footer />
        <div className="footer-main">
          <nav aria-label="Navegación al pie de página"><a href="/">Inicio</a><a href="/nosotros">Nosotros</a><a href="/productos">Productos</a><a href="/contacto">Contacto</a></nav>
          <div className="footer-social"><a href={instagramUrl} aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramIcon /></a><a href={whatsappUrl} aria-label="WhatsApp" target="_blank" rel="noreferrer"><WhatsAppIcon /></a><span>Lo que somos cuando nos unimos</span></div>
        </div>
        <div className="footer-bottom"><p><strong>Pastelería artesanal en Colombia</strong><br />© 2026 Tota Tota Baked. Todos los derechos reservados.</p><span>Hecho con mucho amor por <a href="https://mentesalaobra.co/" target="_blank" rel="noopener noreferrer">MAO</a></span></div>
      </footer>
    </div>
  );
}
