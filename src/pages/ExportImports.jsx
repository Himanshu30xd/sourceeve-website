import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const categories = [
  {
    title: "Vegetables",
    tagline: "Fresh & Nutritious",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600",
  },
  {
    title: "Fruits",
    tagline: "Naturally Delicious",
    img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600",
  },
  {
    title: "Dry Fruits",
    tagline: "Pure & Wholesome",
    img: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=600",
  },
  {
    title: "Indian Spices",
    tagline: "A Taste Of Tradition",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600",
  },
  {
    title: "Ground & Blend Spices",
    tagline: "For Better Tomorrow",
    img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600",
  },
];

const topProducts = [
  { name: "Cardamom", img: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=400" },
  { name: "Cashew Nuts", img: "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=400" },
  { name: "Fresh Green Chillies", img: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400" },
  { name: "Red Onions", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400" },
  { name: "Turmeric", img: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400" },
  { name: "Black Pepper", img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400" },
  { name: "Basmati Rice", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400" },
  { name: "Fresh Mangoes", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400" },
];

const testimonials = [
  {
    quote: "Really awesome. Thanks to SourceEve, we've just opened our 4th store! Exactly what our business was looking for.",
    author: "Daniel J. Willis",
    company: "Retail Chain, USA",
  },
  {
    quote: "SourceEve has got everything we need. Thank you for making the import painless, pleasant and most of all hassle-free!",
    author: "Louis Zander",
    company: "Importer, Germany",
  },
  {
    quote: "Best products ever! And the best import experience as well. SourceEve is the real deal.",
    author: "Irfan Shahib",
    company: "Distributor, UAE",
  },
];

export default function ExportImports() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productsPerSlide = 4; // Desktop: 4 products per slide
  const totalSlides = Math.ceil(topProducts.length / productsPerSlide);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const visibleProducts = topProducts.slice(
    currentSlide * productsPerSlide,
    currentSlide * productsPerSlide + productsPerSlide
  );

  return (
    <div className="page">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "4rem",
          background:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600') center/cover",
          padding: "5rem 2rem",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "1rem" }}>
          Exporting the <span style={{ color: "var(--green)" }}>Freshness of India</span> to the World
        </h1>
        <p style={{ maxWidth: "750px", margin: "0 auto 2rem", fontSize: "1.1rem", opacity: 0.95 }}>
          Premium quality vegetables, fruits, spices, dry fruits, cereals and pulses sourced from trusted
          Indian farms and delivered to global markets.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#products" className="btn-primary">Explore Products</a>
          <a href="/contact" className="btn-secondary" style={{ color: "#fff", borderColor: "#fff" }}>Get In Touch</a>
        </div>
        <div style={{ marginTop: "2.5rem", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.95rem" }}>
          <span>100% Natural & Farm Fresh</span>
          <span>Premium Quality</span>
          <span>Trusted By Clients Worldwide</span>
        </div>
      </motion.div>

      {/* INTRO */}
      <ScrollReveal>
        <div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center" }}>
          <h2>Our Commitment to Quality & Excellence</h2>
          <p style={{ fontSize: "1.05rem", color: "var(--grey)", marginTop: "1rem" }}>
            At SourceEve Export Imports, we are committed to delivering premium-quality agro products sourced
            with care from trusted suppliers. From fresh vegetables and authentic Indian spices to carefully
            selected products, we focus on quality, consistency, and customer satisfaction at every stage.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 VALUE CARDS */}
      <ScrollReveal>
        <div className="business-grid" style={{ marginBottom: "5rem" }}>
          <div className="business-card">
            <div className="business-card-content">
              <h3>We Export Values</h3>
              <p>
                We at SourceEve, Vegetables Exporters in India and Spices Exporters in India, believe that
                quality is our business and our business is always about delivering values.
              </p>
            </div>
          </div>
          <div className="business-card">
            <div className="business-card-content">
              <h3>Indian Spices</h3>
              <p>
                India being the largest producer of spices has made its footprint in the global market with
                respect to both quality and quantity.
              </p>
            </div>
          </div>
          <div className="business-card">
            <div className="business-card-content">
              <h3>Commitment to Quality</h3>
              <p>
                We are expertised in hand-picking the right products and it is giving us repeated customers
                across international markets.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* CATEGORIES */}
      <ScrollReveal>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Our Categories</h2>
        <p className="section-sub" style={{ marginBottom: "3rem" }}>
          A Rich Heritage Of Indian Agro Products
        </p>
        <div className="business-grid" style={{ marginBottom: "5rem" }}>
          {categories.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <div className="business-card">
                <div className="business-card-image">
                  <img src={c.img} alt={c.title} loading="lazy" />
                </div>
                <div className="business-card-content">
                  <h3>{c.title}</h3>
                  <p style={{ color: "var(--green)", fontWeight: 600 }}>{c.tagline}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* TOP PRODUCTS SLIDER */}
      <ScrollReveal>
        <div id="products" style={{ marginBottom: "5rem" }}>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Featured Products</h2>
          <p className="section-sub" style={{ marginBottom: "3rem" }}>
            Our Top Export Products
          </p>

          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1.5rem",
                transition: "all 0.5s ease",
              }}
              className="products-slider"
            >
              {visibleProducts.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: "100%", height: "180px", objectFit: "cover" }}
                    loading="lazy"
                  />
                  <div style={{ padding: "1rem" }}>
                    <h4 style={{ fontSize: "1.05rem", fontFamily: "'Newsreader', serif" }}>{p.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2rem" }}>
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  style={{
                    width: currentSlide === i ? "28px" : "10px",
                    height: "10px",
                    borderRadius: "5px",
                    background: currentSlide === i ? "var(--green)" : "#ccc",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* DIRECTOR'S NOTE */}
      <ScrollReveal>
        <div
          style={{
            background: "var(--light-gray)",
            borderRadius: "16px",
            padding: "3rem 2rem",
            marginBottom: "5rem",
          }}
        >
          <h2 style={{ marginBottom: "1.5rem" }}>Our Director's Note for Industry Outlook</h2>
          <p style={{ color: "var(--grey)", marginBottom: "1rem", fontSize: "1.02rem" }}>
            We at SourceEve Export Imports believe in long-term relationships and success that is driven by
            trust, customer satisfaction, quality, ethical business practices, and the service we provide to
            our customers.
          </p>
          <p style={{ color: "var(--grey)", marginBottom: "1rem", fontSize: "1.02rem" }}>
            Our team, with profound knowledge of Indian spices and agro-products, is committed to providing
            international quality standards, timely delivery, and maintaining a strong relationship with our
            customers.
          </p>
          <p style={{ color: "var(--grey)", marginBottom: "1rem", fontSize: "1.02rem" }}>
            Our competitive pricing, customized packing, high international quality standards, timely
            delivery of goods, stringent and personalized quality checks, and experienced professionals have
            made us the most eminent exporter.
          </p>
          <p style={{ color: "var(--grey)", fontSize: "1.02rem" }}>
            Over the years, SourceEve Export Imports has adhered to understanding all stakeholders and
            addressing their needs in a way that is sustainable for our business. We strongly believe that
            trust and faith cannot be purchased or acquired — it has to be earned. Thus, we strive to earn
            ours.
          </p>
          <a href="/about" className="btn-primary" style={{ display: "inline-block", marginTop: "2rem" }}>
            More About Us
          </a>
        </div>
      </ScrollReveal>

      {/* TESTIMONIALS */}
      <ScrollReveal>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>What Our Clients Say</h2>
        <p className="section-sub" style={{ marginBottom: "3rem" }}>
          Trusted by Customers Around the World
        </p>
        <div className="business-grid" style={{ marginBottom: "5rem" }}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 0.15}>
              <div className="business-card" style={{ padding: "2rem", borderLeft: "4px solid var(--green)" }}>
                <p style={{ fontStyle: "italic", color: "#444", marginBottom: "1.25rem" }}>"{t.quote}"</p>
                <div style={{ fontWeight: 600, color: "var(--black)" }}>{t.author}</div>
                <div style={{ fontSize: "0.88rem", color: "var(--grey)" }}>{t.company}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <div
          style={{
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600') center/cover",
            borderRadius: "16px",
            padding: "4rem 2rem",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2 style={{ marginBottom: "1rem" }}>Let's Grow A Healthier Tomorrow Together</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 2rem", opacity: 0.95 }}>
            Partner with SourceEve Export Imports for premium Indian agro products.
          </p>
          <a href="/contact" className="btn-primary" style={{ display: "inline-block" }}>
            Send an Enquiry
          </a>
        </div>
      </ScrollReveal>
    </div>
  );
        }
