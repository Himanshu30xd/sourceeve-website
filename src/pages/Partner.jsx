import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

export default function Partner() {
  return (
    <div className="page">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Partner With Us
      </motion.h1>

      <ScrollReveal>
        <p style={{ fontSize: "1.15rem" }}>
          Whether you're an employer, supplier, or event partner — we'd love to hear from you.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <h2>Employer Enquiries</h2>
        <p>Looking for recruitment support? Contact SourceEve Staffing Solutions to discuss your vacancies and workforce requirements.</p>
      </ScrollReveal>

      <ScrollReveal>
        <h2>Supplier Partnerships</h2>
        <p>Looking to source or supply products? Connect with SourceEve Export Imports to discuss product requirements and trade opportunities.</p>
      </ScrollReveal>

      <ScrollReveal>
        <h2>Event Enquiries</h2>
        <p>Planning an event or exhibiting at a trade show? Let SourceEve Events & Exhibitions help you transform your brief into a professional experience.</p>
      </ScrollReveal>
    </div>
  );
}
