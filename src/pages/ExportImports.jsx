import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const products = [
  {
    title: "Fresh Fruits & Vegetables",
    desc: "Seasonal fruits and vegetables sourced to buyer specifications and destination-market standards. We coordinate quality checks, packaging, and shipping for markets worldwide.",
    img: "/images/products-fruits.jpg",
  },
  {
    title: "Spices & Culinary Ingredients",
    desc: "Indian spices and selected culinary ingredients, with packaging tailored to market demand. From turmeric and chilli to custom blends — sourced and prepared for export.",
    img: "/images/products-spices.jpg",
  },
  {
    title: "Home Furnishing Products",
    desc: "Home textiles, bedsheets, cushion covers, curtains, towels, table linens, and selected decor products — sourced from trusted manufacturers.",
    img: "/images/products-home.jpg",
  },
];

const whyUs = [
  {
    title: "Trusted Sourcing Network",
    desc: "Established relationships with suppliers and manufacturers across India and China.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
    ),
  },
  {
    title: "Quality Assurance",
    desc: "Product specifications, packaging, and quality checks coordinated to destination-market standards.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
    ),
  },
  {
    title: "Export Coordination",
    desc: "Support with shipment documentation, logistics, and delivery coordination where agreed.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
    ),
  },
  {
    title: "Global Buyer Network",
    desc: "Connecting suppliers with buyers across the Middle East, Europe, and the United States.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
    ),
  },
];

const stats = [
  { number: "50+", label: "Product Categories" },
  { number: "15+", label: "Target Markets" },
  { number: "100+", label: "Supplier Partners" },
  { number: "24/7", label: "Trade Support" },
];

export default function ExportImports() {
  return (
    <div className="page">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: "4rem" }}
      >
        <h1>SourceEve Export Imports</h1>
        <p style={{ fontSize: "1.2rem", color: "var(--grey)", maxWidth: "750px", margin: "1rem auto 0" }}>
          Bringing Quality Products to Global Markets
        </p>
      </motion.div>

      {/* INTRO */}
      <ScrollReveal>
        <div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center" }}>
          <h2>International Trade & Global Sourcing</h2>
          <p style={{ fontSize: "1.05rem" }}>
            SourceEve Export Imports is the international trading division of SourceEve Group of Companies —
            connecting suppliers, manufacturers, distributors, and buyers across global markets. Our business
            spans fresh produce, spices, home furnishings, and selected merchandise for cross-border trade.
          </p>
        </div>
      </ScrollReveal>

      {/* PRODUCTS */}
      <ScrollReveal>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Our Product Categories</h2>
        <p className="section-sub" style={{ marginBottom: "3rem" }}>
          Sourced from trusted suppliers and prepared to meet the requirements of destination markets.
        </p>
        <div className="business-grid" style={{ marginBottom: "4rem" }}>
          {products.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.15}>
              <div className="business-card">
                <div className="business-card-image">
                  <img src={p.img} alt={p.title} loading="lazy" />
                </div>
                <div className="business-card-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* WHY CHOOSE US */}
      <ScrollReveal>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Why SourceEve Export Imports?</h2>
        <p className="section-sub" style={{ marginBottom: "3rem" }}>
          Reliable sourcing, transparent communication, and dependable trade partnerships.
        </p>
        <div className="values-grid" style={{ marginBottom: "4rem" }}>
          {whyUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="value-card" style={{ textAlign: "left" }}>
                <div className="why-icon" style={{ margin: "0 0 1rem 0" }}>
                  <svg viewBox="0 0 24 24" style={{ width: "30px", height: "30px", fill: "var(--green)" }}>
                    {item.icon.props.children.props.d}
                  </svg>
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* STATS */}
      <ScrollReveal>
        <div className="stats" style={{ borderRadius: "16px", marginBottom: "4rem" }}>
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <h3>{s.number}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* MARKETS */}
      <ScrollReveal>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Markets We Serve</h2>
        <p className="section-sub" style={{ marginBottom: "3rem" }}>
          Cross-border trade connecting key sourcing and buyer markets.
        </p>
        <div className="values-grid" style={{ marginBottom: "4rem" }}>
          <div className="value-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Sourcing Markets</h3>
            <p style={{ fontSize: "0.98rem" }}>
              India and China — with a focus on fresh produce, spices, and home furnishing products.
            </p>
          </div>
          <div className="value-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Target Buyer Markets</h3>
            <p style={{ fontSize: "0.98rem" }}>
              Middle East, Europe, and the United States — serving importers, distributors, and wholesalers.
            </p>
          </div>
          <div className="value-card" style={{ textAlign: "left" }}>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Trade Approach</h3>
            <p style={{ fontSize: "0.98rem" }}>
              Supplier sourcing, buyer connections, product specifications, and shipment documentation.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <div style={{ textAlign: "center", padding: "3rem 1rem", background: "var(--light-gray)", borderRadius: "16px" }}>
          <h2 style={{ marginBottom: "1rem" }}>Looking to Source Products or Expand Your Market?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 2rem", color: "var(--grey)" }}>
            Connect with SourceEve Export Imports to discuss product requirements, sourcing opportunities,
            or international trade partnerships.
          </p>
          <a href="/contact" className="btn-primary" style={{ display: "inline-block" }}>
            Get in Touch
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
}
