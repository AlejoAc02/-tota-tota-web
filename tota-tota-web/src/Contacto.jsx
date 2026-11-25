import { useState } from "react";
import {
  ArrowRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Plus,
} from "lucide-react";
import "./contacto.css";

const emailAddress = "totatotabaked@gmail.com";
const instagramUrl = "https://www.instagram.com/totatotabaked/";
const whatsappUrl = "https://wa.me/573002128931?text=Hola%2C%20quiero%20hacer%20un%20pedido%20con%20Tota%20Tota";

const questions = [
  {
    question: "¿Cómo puedo hacer un pedido?",
    answer: "Escríbenos por WhatsApp o completa el formulario con los detalles de lo que tienes en mente. Te responderemos para confirmar opciones y disponibilidad.",
  },
  {
    question: "¿Con cuánto tiempo de anticipación debo solicitar una torta?",
    answer: "El tiempo depende del diseño y el tamaño. Para asegurar disponibilidad, te recomendamos escribirnos con varios días de anticipación.",
  },
  {
    question: "¿Hacen productos personalizados?",
    answer: "¡Sí! Cuéntanos qué ocasión celebras, cuántas personas compartirán y qué idea tienes. Juntos podemos definir los detalles.",
  },
  {
    question: "¿Cómo puedo recoger mi pedido?",
    answer: "Estamos en Cali. Coordinamos contigo la recogida y, según disponibilidad, las opciones de entrega.",
  },
  {
    question: "¿Ofrecen productos sin azúcar?",
    answer: "Tenemos opciones cuidadas, incluidas tortas para diabéticos. Escríbenos para conocer las alternativas y confirmar disponibilidad.",
  },
];

function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

function WhatsAppIcon({ size = 26 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.48 0 .1 5.37.1 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.9 11.9 0 0 0 5.88 1.5h.01c6.6 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.2-3.55-8.41ZM12.09 21.84h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.68.97.98-3.59-.23-.37a9.87 9.87 0 0 1-1.52-5.29c0-5.43 4.42-9.85 9.85-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 0 1 2.88 6.97c0 5.43-4.42 9.85-9.85 9.85Zm5.4-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.49s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.13-.27-.2-.57-.35Z" /></svg>;
}

function Button({ href = whatsappUrl, children, outline = false }) {
  return <a className={`button${outline ? " button-outline" : ""}`} href={href}>{children}<ArrowRight size={16} aria-hidden="true" /></a>;
}

function ChannelCard({ icon, title, children, href, action, outline = false }) {
  return (
    <article className="channel-card">
      <span className="channel-icon">{icon}</span>
      <div className="channel-content">
        <h3>{title}</h3>
        <p>{children}</p>
        <Button href={href} outline={outline}>{action}</Button>
      </div>
    </article>
  );
}

function ContactForm() {
  const [productType, setProductType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Consulta web: ${form.get("productType")}`);
    const body = encodeURIComponent(
      `Nombre: ${form.get("name")}\nTeléfono: ${form.get("phone")}\nCorreo: ${form.get("email")}\nTipo de producto: ${form.get("productType")}\n\nMensaje:\n${form.get("message")}`,
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <Eyebrow>Escríbenos</Eyebrow>
        <h2>Cuéntanos tu idea <span aria-hidden="true">✨</span></h2>
        <p>Completa el formulario y te responderemos lo más pronto posible.</p>
      </div>
      <div className="form-row">
        <label>Nombre *<input name="name" type="text" placeholder="Tu nombre" autoComplete="name" required /></label>
        <label>Teléfono *<input name="phone" type="tel" placeholder="Número de contacto" autoComplete="tel" required /></label>
      </div>
      <label>Correo electrónico *<input name="email" type="email" placeholder="ejemplo@correo.com" autoComplete="email" required /></label>
      <label>Tipo de producto *
        <select name="productType" value={productType} onChange={(event) => setProductType(event.target.value)} required>
          <option value="" disabled>Selecciona una opción</option>
          <option>Torta</option><option>Cupcakes y pequeños antojos</option><option>Galletas</option><option>Pan artesanal</option><option>Producto personalizado</option><option>Otro</option>
        </select>
      </label>
      <label>Mensaje *<textarea name="message" rows="5" placeholder="Cuéntanos todos los detalles de tu idea..." required /></label>
      <button className="form-submit" type="submit">Enviar mensaje</button>
      <p className="form-privacy">Al enviar este formulario aceptas que utilicemos esta información únicamente para responder tu consulta.</p>
    </form>
  );
}

function ContactDetails() {
  return (
    <aside className="contact-details">
      <Eyebrow>También puedes escribirnos</Eyebrow>
      <h2>Otras formas<br />de contactarnos</h2>
      <div className="detail-list">
        <div className="detail-item"><span><Mail size={19} /></span><div><h3>Correo electrónico</h3><a href={`mailto:${emailAddress}`}>{emailAddress}</a><p>Para consultas generales.</p></div></div>
        <div className="detail-item"><span><MapPin size={19} /></span><div><h3>Ubicación</h3><p>Cali, Colombia</p><small>(Entrega y recogida según disponibilidad).</small></div></div>
        <div className="detail-item"><span><Clock3 size={19} /></span><div><h3>Horario de atención</h3><p>Lunes a sábado</p><small>8:00 a. m. – 6:00 p. m.</small></div></div>
      </div>
      <img className="contact-details-photo" src="/images/products/cupcakes-caja.jpeg" alt="Cupcakes artesanales decorados" loading="lazy" />
    </aside>
  );
}

export default function Contacto() {
  return (
    <div className="contact-page">
      <section className="contact-hero section-wrap">
        <div className="contact-hero-copy">
          <Eyebrow>Contacto</Eyebrow>
          <h1>Hablemos de lo dulce</h1>
          <p>Nos encantaría escucharte. Cuéntanos tus ideas, preguntas o pedidos especiales y con gusto te ayudaremos.</p>
          <Button>Hablemos por WhatsApp</Button>
        </div>
        <img src="/images/products/torta-chocolate-chips.jpeg" alt="Torta artesanal de chocolate con chips" />
      </section>

      <section className="contact-channels">
        <div className="contact-channels-inner section-wrap">
          <div className="channels-heading"><Eyebrow>Nuestros canales</Eyebrow><h2>Estamos aquí para ti</h2></div>
          <div className="channel-grid">
            <ChannelCard icon={<WhatsAppIcon />} title="WhatsApp" href={whatsappUrl} action="Enviar mensaje">Hablemos sobre tus pedidos, ideas y opciones personalizadas.</ChannelCard>
            <ChannelCard icon={<Instagram size={26} />} title="Instagram" href={instagramUrl} action="Ver nuestro perfil" outline>Descubre nuestras creaciones, novedades y momentos del día a día.</ChannelCard>
          </div>
        </div>
      </section>

      <section className="contact-main section-wrap">
        <ContactForm />
        <ContactDetails />
      </section>

      <section className="faq section-wrap">
        <div className="faq-intro"><Eyebrow>Preguntas frecuentes</Eyebrow><h2>Te ayudamos</h2><p>Aquí respondemos algunas de las dudas más comunes. Si tienes otra pregunta, escríbenos y con gusto te ayudamos.</p></div>
        <div className="faq-list">
          {questions.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<Plus size={19} aria-hidden="true" /></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="contact-cta section-wrap">
        <div><h2>¿Tienes una idea<br />en mente?</h2><p>Creamos tortas y productos personalizados para cada ocasión. Cuéntanos tu idea y la hacemos realidad.</p><Button>Hablemos por WhatsApp</Button></div>
        <img src="/images/products/brownies.jpeg" alt="Brownies artesanales para compartir" loading="lazy" />
      </section>
    </div>
  );
}
