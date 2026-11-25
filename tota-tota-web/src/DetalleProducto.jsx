import { ArrowRight, CakeSlice, Heart, Sparkles } from "lucide-react";
import { products, ProductImagePlaceholder } from "./Productos.jsx";
import "./detalle-producto.css";

const whatsappUrl = (product) => `https://wa.me/573002128931?text=${encodeURIComponent(`Hola, quiero consultar por ${product.name}.` )}`;
function Eyebrow({ children }) { return <p className="eyebrow">{children}</p>; }
function Visual({ product, large = false }) { return product.image ? <img className={`product-photo${large ? " product-photo--large" : ""}`} src={product.image} alt={product.name} /> : <ProductImagePlaceholder label={product.name} tone={product.tone} large={large} />; }

export default function DetalleProducto({ slug }) {
  const product = products.find((item) => item.slug === slug);
  if (!product) return <section className="product-not-found section-wrap"><Eyebrow>Producto</Eyebrow><h1>Producto no encontrado</h1><p>Explora nuestro catálogo para conocer las creaciones disponibles.</p><a className="button" href="/productos">Volver a productos <ArrowRight size={16} /></a></section>;
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 4);
  const detailPoints = [
    { icon: CakeSlice, title: "Hecha artesanalmente", text: product.description },
    { icon: Heart, title: "Para compartir", text: "Ideal para acompañar celebraciones y momentos especiales." },
    { icon: Sparkles, title: "Consulta disponibilidad", text: "Escríbenos para conocer tamaños, tiempos de preparación y opciones." },
  ];
  return <div className="product-detail-page"><nav className="product-breadcrumbs section-wrap" aria-label="Ruta de navegación"><a href="/">Inicio</a><span aria-hidden="true">›</span><a href="/productos">Productos</a><span aria-hidden="true">›</span><span aria-current="page">{product.name}</span></nav><section className="product-detail-hero section-wrap"><div className="product-gallery"><Visual product={product} large /></div><div className="product-detail-copy"><span className="product-category-tag">{product.category}</span><h1>{product.name}</h1><p className="product-detail-description">{product.description}</p>{product.badge && <span className="product-badge">{product.badge}</span>}<ul className="product-highlights">{detailPoints.map(({ icon: Icon, title, text }) => <li key={title}><span className="highlight-icon"><Icon size={19} /></span><div><h2>{title}</h2><p>{text}</p></div></li>)}</ul><a className="button" href={whatsappUrl(product)}>Consultar por WhatsApp <ArrowRight size={16} /></a></div></section><section className="product-story section-wrap"><div className="product-story-copy"><Eyebrow>Un antojo especial</Eyebrow><h2>Hecho para<br />disfrutar</h2><p>{product.description}</p><p>Escríbenos para consultar disponibilidad y coordinar tu pedido.</p></div><Visual product={product} large /></section><section className="related-products section-wrap"><div className="related-heading"><div><Eyebrow>Descubre más</Eyebrow><h2>Otros productos</h2></div></div><div className="related-grid">{related.map((item) => <a className="related-card" href={`/productos/${item.slug}`} key={item.slug}><Visual product={item} /><h3>{item.name}</h3><p>{item.description}</p></a>)}</div></section></div>;
}
