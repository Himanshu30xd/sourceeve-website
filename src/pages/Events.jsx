import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const eventServices = [
  { title: "Corporate Events & Conferences", desc: "Planning and coordination for corporate gatherings, business meetings, conferences, seminars, and company functions." },
  { title: "Exhibition Booth Design & Construction", desc: "Custom booth concepts, layout planning, fabrication coordination, installation, and dismantling." },
  { title: "Brand Activations & Product Launches", desc: "Event concepts and brand experiences designed to engage audiences and showcase products." },
  { title: "End-to-End Event Management", desc: "Planning, vendor coordination, venue arrangements, on-site execution, and post-event coordination." },
];

export default function Events() {
  return (
    <div className="page">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        SourceEve Events & Exhibitions
      </motion.h1>

      <ScrollReveal>
        <h2>Creating Experiences. Building Connections.</h2>
        <p>We help businesses plan, coordinate, and deliver engaging events and exhibition experiences.</p>
      </ScrollReveal>

      <ScrollReveal>
        <h2>Our Services</h2>
        <div className="values-grid" style={{ marginTop: "2rem" }}>
          {eventServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="value-card" style={{ textAlign: "left" }}>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.95rem" }}>{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
