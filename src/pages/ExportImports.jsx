import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const products = [
  { title: "Fresh Fruits & Vegetables", desc: "Seasonal fruits and vegetables sourced to buyer specifications and destination-market standards.", img: "/images/products-fruits.jpg" },
  { title: "Spices & Culinary Ingredients", desc: "Indian spices and selected culinary ingredients, with packaging tailored to market demand.", img: "/images/products-spices.jpg" },
  { title: "Home Furnishing Products", desc: "Home textiles, bedsheets, cushion covers, curtains, towels, table linens and selected decor.", img: "/images/products-home.jpg" },
];

export default function ExportImports() {
  return (
    <div className="page">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        SourceEve Export Imports
      </motion.h1>

      <ScrollReveal>
        <h2>Bringing Quality Products to Global Markets</h2>
        <p>Focused on connecting suppliers, manufacturers, distributors, and buyers across international markets.</p>
      </ScrollReveal>

      <ScrollReveal>
        <h2>Our Product Categories</h2>
        <div className="business-grid" style={{ marginTop: "2rem" }}>
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

      <ScrollReveal>
        <h2>Markets</h2>
        <p><strong>Sourcing:</strong> India, China</p>
        <p><strong>Target Buyers:</strong> Middle East, Europe, United States</p>
      </ScrollReveal>
    </div>
  );
}
