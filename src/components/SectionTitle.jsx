// src/components/SectionTitle.jsx
// Reusable heading + subtitle block. align = "center" (default) or "left".
import ScrollReveal from "./ScrollReveal";

export default function SectionTitle({ title, subtitle, align = "center" }) {
  return (
    <ScrollReveal>
      <div className={`stitle stitle-${align}`}>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>
    </ScrollReveal>
  );
}
