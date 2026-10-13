import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company } from "../data/company";

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link to="/" className="brand">
        <img src="/images/logo.png" alt={company.name} className="brand-logo" />
        <span>{company.shortName}</span>
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/businesses/staffing">Our Businesses</Link>
        <Link to="/partner">Partner With Us</Link>
        <Link to="/contact" className="btn-primary">Contact Us</Link>
      </nav>
    </motion.header>
  );
}
