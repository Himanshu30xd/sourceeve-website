import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const services = [
  "Overseas recruitment and international manpower sourcing",
  "Blue-collar and skilled workforce recruitment",
  "White-collar and professional recruitment",
  "Bulk hiring and project-based recruitment",
  "Employer-led recruitment drives and interview coordination",
  "Candidate screening and shortlisting",
  "Recruitment coordination and mobilization support",
];

const industries = [
  { title: "Construction & MEP", desc: "Helpers, masons, electricians, plumbers, carpenters, steel fixers and technicians." },
  { title: "Logistics & Operations", desc: "Warehouse staff, helpers, delivery personnel and operational workers." },
  { title: "Facilities Management", desc: "Cleaners, housekeeping teams, maintenance staff and support workers." },
  { title: "Professional Roles", desc: "Administrative, technical, managerial and other white-collar positions." },
];

export default function Staffing() {
  return (
    <div className="page">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        SourceEve Staffing Solutions
      </motion.h1>

      <ScrollReveal>
        <h2>Connecting Global Talent with Global Opportunities</h2>
        <p>We support businesses in identifying, sourcing, and recruiting suitable talent across multiple industries and international markets.</p>
      </ScrollReveal>

      <ScrollReveal>
        <h2>Our Recruitment Services</h2>
        <ul>
          {services.map((s, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              {s}
            </motion.li>
          ))}
        </ul>
      </ScrollReveal>

      <ScrollReveal>
        <h2>Industries We Serve</h2>
        <div className="values-grid" style={{ marginTop: "2rem" }}>
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.title} delay={i * 0.1}>
              <div className="value-card" style={{ textAlign: "left" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{ind.title}</h3>
                <p style={{ fontSize: "0.95rem" }}>{ind.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
