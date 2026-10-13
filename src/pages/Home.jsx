import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company } from "../data/company";
import { businesses } from "../data/businesses";
import ScrollReveal from "../components/ScrollReveal";

const values = [
  { icon: "🤝", title: "Integrity", desc: "Building trust through transparency and responsible business practices." },
  { icon: "🎯", title: "Excellence", desc: "Delivering professional, practical, and quality-focused solutions." },
  { icon: "🌍", title: "Global Mindset", desc: "Connecting markets, talent, and opportunities across borders." },
  { icon: "👥", title: "Partnership", desc: "Creating long-term relationships built around shared success." },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {company.tagline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            A diversified group with a global outlook — bringing together international recruitment, import and export, and events and exhibitions under one trusted name.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/businesses/staffing" className="btn-primary">Explore Our Businesses</Link>
            <Link to="/contact" className="btn-secondary">Contact Our Team</Link>
          </motion.div>
        </div>
      </section>

      <section className="section businesses">
        <ScrollReveal>
          <h2 className="section-title">Our Business Ventures</h2>
          <p className="section-subtitle">Three specialized divisions, one trusted group.</p>
        </ScrollReveal>
        <div className="business-grid">
          {businesses.map((b, i) => (
            <ScrollReveal key={b.id} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 0.15}>
              <div className="business-card">
                <div className="business-card-image">
                  <img src={b.image} alt={b.title} loading="lazy" />
                </div>
                <div className="business-card-content">
                  <h3>{b.title}</h3>
                  <p className="subtitle">{b.subtitle}</p>
                  <p>{b.description}</p>
                  <Link to={b.link}>Explore More →</Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section">
        <ScrollReveal>
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide every connection we build.</p>
        </ScrollReveal>
        <div className="values-grid">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
