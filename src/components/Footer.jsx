import { Link } from "react-router-dom";
import { company } from "../data/company";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>{company.name}</h3>
          <p>{company.tagline}</p>
          <p style={{ marginTop: "1rem", fontStyle: "italic" }}>"{company.subTagline}"</p>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`mailto:${company.email}`}>📧 {company.email}</a>
          <a href={`tel:${company.phone}`}>📱 {company.phone}</a>
          <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
        </div>
        <div>
          <h4>Our Businesses</h4>
          <Link to="/businesses/staffing">Staffing Solutions</Link>
          <Link to="/businesses/export-imports">Export Imports</Link>
          <Link to="/businesses/events">Events & Exhibitions</Link>
        </div>
      </div>
      <p className="copyright">© 2026 {company.name}. All rights reserved.</p>
    </footer>
  );
}
