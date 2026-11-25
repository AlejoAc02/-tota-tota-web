import { useState } from "react";
import { ArrowRight, CakeSlice, Cookie, Grid2X2, Sparkles } from "lucide-react";
import "./productos.css";

export const products = [
  { slug: "torta-red-velvet", name: "Torta de Red Velvet", category: "Tortas", description: "Torta húmeda de Red Velvet, rellena y cubierta con frosting de queso Philadelphia.", image: null, tone: "rose" },
  { slug: "torta-de-chocolate", name: "Torta de chocolate", category: "Tortas", description: "Torta húmeda de chocolate con relleno de ganache y chips de chocolate en la parte superior.", image: "/images/products/torta-chocolate-chips.jpeg", tone: "bread" },
  { slug: "torta-zanahoria-pina-nueces", name: "Torta de zanahoria con piña y nueces", category: "Tortas", description: "Torta húmeda de zanahoria con piña, nueces y almendras, rellena y cubierta con frosting de queso Philadelphia.", image: "/images/products/torta-zanahoria-frosting.jpeg", tone: "butter" },
  { slug: "torta-choco-fit", name: "Torta Choco Fit", category: "Tortas fit", description: "Torta húmeda de chocolate con ganache de cacao al 58 %, harina de almendras y harina de arroz. Apta para diabéticos y endulzada con monk fruit.", image: "/images/products/torta-choco-fit-original.jpeg", tone: "sage", badge: "Apta para diabéticos" },
  { slug: "torta-zanahoria-fit", name: "Torta de zanahoria Fit", category: "Tortas fit", description: "Torta húmeda de zanahoria con ganache de queso Kraft y yogurt griego, harina de almendras y harina de arroz.", image: "/images/products/torta-zanahoria-almendras.jpeg", tone: "sage" },
  { slug: "torta-zanahoria-sin-azucar", name: "Torta de zanahoria sin azúcar", category: "Tortas fit", description: "Torta de zanahoria con nueces, rellena de arequipe y frosting de queso Philadelphia sin azúcar. Endulzada con monk fruit y apta para diabéticos.", image: null, tone: "butter", badge: "Apta para diabéticos" },
  { slug: "arequipe-monk-fruit", name: "Arequipe con monk fruit", category: "Especialidades", description: "Arequipe endulzado con monk fruit. Una opción deliciosa para disfrutar y compartir.", image: "/images/products/arequipe-monkfruit.png", tone: "peach" },
  { slug: "arequipe-400g", name: "Arequipe para diabéticos · 400 g", category: "Especialidades", description: "Arequipe para diabéticos, presentado en frasco de 400 gramos.", image: "/images/products/arequipe-400g-original.jpeg", tone: "peach", badge: "400 g" },
  { slug: "galletas-personalizadas", name: "Galletas personalizadas", category: "Galletas", description: "Galletas decoradas y personalizadas para ocasiones especiales.", image: "/images/products/galletas-personalizadas.jpeg", tone: "lavender" },
  { slug: "tortas-especiales", name: "Tortas especiales", category: "Especialidades", description: "Tortas personalizadas para celebrar tus momentos especiales.", image: "/images/products/torta-ktm.jpeg", tone: "rose" },
  { slug: "torta-tematica", name: "Tortas temáticas", category: "Especialidades", description: "Tortas decoradas con diseños personalizados para celebraciones.", image: "/images/products/torta-tematica.jpeg", tone: "rose" },
  { slug: "galletas-decoradas", name: "Galletas decoradas", category: "Galletas", description: "Galletas decoradas con motivos especiales, listas para regalar o compartir.", image: "/images/products/galletas-camisas.jpeg", tone: "lavender" },
  { slug: "kits-de-galletas", name: "Kit para decorar galletas", category: "Galletas", description: "Kit con galletas, mangas de glaseado y decoraciones para crear en casa.", image: "/images/products/kit-galletas.jpeg", tone: "butter" },
  { slug: "galletas-temporada", name: "Galletas de temporada", category: "Galletas", description: "Galletas decoradas para fechas especiales y temporadas festivas.", image: "/images/products/galletas-fantasma.jpeg", tone: "lavender" },
  { slug: "pan-artesanal", name: "Panes artesanales", category: "Panes", description: "Panes horneados artesanalmente. Consulta los sabores disponibles.", image: "/images/products/panes-artesanales.jpeg", tone: "bread" },
  { slug: "rollos-de-chocolate", name: "Rollos de chocolate", category: "Panes", description: "Rollos suaves con chocolate, horneados para disfrutar en cualquier momento.", image: "/images/products/rollos-chocolate.jpeg", tone: "bread" },
  { slug: "panecillos-especiales", name: "Panecillos especiales", category: "Panes", description: "Panecillos horneados en distintos sabores y formas. Pregunta por disponibilidad.", image: "/images/products/panecillos-arandanos.jpeg", tone: "bread" },
  { slug: "brownies", name: "Brownies", category: "Pequeños antojos", description: "Brownies de chocolate, disponibles en porciones individuales y para compartir.", image: "/images/products/brownies.jpeg", tone: "bread" },
  { slug: "alfajores", name: "Alfajores", category: "Pequeños antojos", description: "Alfajores artesanales espolvoreados con azúcar, empacados individualmente o para compartir.", image: "/images/products/alfajores.jpeg", tone: "butter" },
  { slug: "cupcakes", name: "Cupcakes", category: "Pequeños antojos", description: "Cupcakes decorados con frosting para celebraciones y ocasiones especiales.", image: "/images/products/cupcakes-rosados.jpeg", tone: "rose" },
  { slug: "postres-en-vaso", name: "Postres en vaso", category: "Pequeños antojos", description: "Postres individuales en vaso. Consulta los sabores disponibles.", image: "/images/products/postres-vaso.jpeg", tone: "peach" },
  { slug: "mini-tortas", name: "Mini tortas", category: "Pequeños antojos", description: "Pequeñas tortas individuales horneadas en distintos sabores.", image: "/images/products/mini-tortas.jpeg", tone: "butter" },
  { slug: "paletas-decoradas", name: "Paletas decoradas", category: "Pequeños antojos", description: "Paletas dulces decoradas con motivos para compartir en celebraciones.", image: "/images/products/paletas-decoradas.jpeg", tone: "peach" },
  { slug: "torta-de-almendras", name: "Torta decorada con almendras", category: "Tortas", description: "Torta cubierta con frosting y almendras fileteadas. Consulta por sabor y disponibilidad.", image: "/images/products/torta-almendras.jpeg", tone: "butter" },
];

const filters = ["Todos", ...new Set(products.map(({ category }) => category))];

function ProductVisual({ product, large = false }) {
  return product.image
    ? <img className={`product-photo${large ? " product-photo--large" : ""}`} src={product.image} alt={product.name} />
    : <div className={`product-image-placeholder product-image-placeholder--${product.tone}${large ? " product-image-placeholder--large" : ""}`} role="img" aria-label={`Foto de ${product.name}`}><span className="placeholder-decoration placeholder-decoration--one" /><span className="placeholder-decoration placeholder-decoration--two" /><span className="placeholder-icon"><CakeSlice size={large ? 62 : 43} strokeWidth={1.15} aria-hidden="true" /></span><span className="placeholder-caption">Foto de {product.name.toLowerCase()}</span></div>;
}

export function ProductImagePlaceholder({ label, tone, large = false }) {
  return <ProductVisual product={{ name: label, tone }} large={large} />;
}

function ProductCard({ product }) {
  return <a className="catalog-category-card" href={`/productos/${product.slug}`}><ProductVisual product={product} /><div className="catalog-category-copy"><span className="catalog-category-icon">{product.category === "Galletas" ? <Cookie size={20} /> : product.category === "Especialidades" ? <Sparkles size={20} /> : <CakeSlice size={20} />}</span><h3>{product.name}</h3><p>{product.description}</p>{product.badge && <span className="product-badge">{product.badge}</span>}<span className="catalog-card-link">Ver producto <ArrowRight size={15} /></span></div></a>;
}

export default function Productos() {
  const requestedCategory = new URLSearchParams(window.location.search).get("categoria");
  const initialFilter = filters.includes(requestedCategory) ? requestedCategory : "Todos";
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  const visibleProducts = selectedFilter === "Todos" ? products : products.filter(({ category }) => category === selectedFilter);
  return <div className="products-page"><section className="products-hero section-wrap"><div className="products-hero-copy"><p className="eyebrow">Nuestros productos</p><h1>Un mundo<br />de sabores</h1><p>Creaciones artesanales hechas con ingredientes de calidad y mucho cariño, para acompañar tus momentos más dulces.</p></div><ProductVisual product={products[1]} large /></section><section className="products-catalog section-wrap" aria-label="Productos"><div className="catalog-filters" aria-label="Filtrar por categoría">{filters.map((filter, index) => <button className={`catalog-filter${selectedFilter === filter ? " catalog-filter--active" : ""}`} type="button" key={filter} aria-pressed={selectedFilter === filter} onClick={() => setSelectedFilter(filter)}>{index === 0 && <Grid2X2 size={16} aria-hidden="true" />}{filter}</button>)}</div><div className="catalog-grid" aria-live="polite">{visibleProducts.map((product) => <ProductCard product={product} key={product.slug} />)}</div></section><section className="products-custom section-wrap"><div className="products-custom-copy"><p className="eyebrow">Hecho especialmente para ti</p><h2>¿No encuentras<br />lo que buscas?</h2><p>Creamos productos personalizados para celebraciones especiales. Cuéntanos tu idea y la hacemos realidad.</p><a className="button" href="/contacto">Cuéntanos tu idea <ArrowRight size={16} /></a></div><ProductVisual product={products.at(-1)} large /></section></div>;
}
