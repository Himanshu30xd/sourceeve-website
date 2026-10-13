import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <div className="page">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        About SourceEve Group of Companies
      </motion.h1>

      <ScrollReveal>
        <p style={{ fontSize: "1.2rem", color: "#000", fontStyle: "italic", marginBottom: "2rem" }}>
          Building connections. Creating opportunities. Expanding horizons.
        </p>
        <p>SourceEve Group of Companies is a diversified business group focused on international recruitment, import and export, and event management and exhibition solutions.</p>
        <p>Through our specialized sister companies, we aim to deliver focused, practical, and professional solutions tailored to the evolving needs of businesses across different industries and regions.</p>
      </ScrollReveal>

      <ScrollReveal>
        <h2>Our Vision</h2>
        <p>To become a trusted international group recognized for connecting global talent, facilitating trade, and delivering memorable business experiences.</p>
      </ScrollReveal>

      <ScrollReveal>
        <h2>Our Mission</h2>
        <p>To provide dependable, customer-focused business solutions through specialized services, ethical practices, international collaboration, and a commitment to long-term value creation.</p>
      </ScrollReveal>
    </div>
  );
}
