import { motion } from "framer-motion";
import { company } from "../data/company";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prototype: Form submit not connected yet. Will connect to backend later.");
  };

  return (
    <div className="page">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Let's Build Something Together
      </motion.h1>

      <ScrollReveal>
        <p style={{ fontSize: "1.1rem" }}>
          Whether you're looking for recruitment solutions, international trade opportunities, or professional event services, our team would be pleased to hear from you.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Full Name *</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Business Email *</label>
          <input type="email" placeholder="you@company.com" required />

          <label>Company Name</label>
          <input type="text" placeholder="Your company name" />

          <label>I'm interested in *</label>
          <select required defaultValue="">
            <option value="" disabled>Select an option</option>
            <option>Recruitment & Staffing Solutions</option>
            <option>Export & Import</option>
            <option>Events & Exhibitions</option>
            <option>General Enquiry / Business Partnership</option>
          </select>

          <label>Your Message *</label>
          <textarea rows="5" placeholder="Tell us about your requirements..." required></textarea>

          <button type="submit" className="btn-primary">Prepare My Enquiry</button>
        </form>
      </ScrollReveal>

      <ScrollReveal>
        <div className="contact-info">
          <h3 style={{ marginBottom: "1rem" }}>Direct Contact</h3>
          <p>📧 <a href={`mailto:${company.email}`}>{company.email}</a></p>
          <p>📱 <a href={`tel:${company.phone}`}>{company.phone}</a></p>
          <p>💬 <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
        </div>
      </ScrollReveal>
    </div>
  );
}
