// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { company } from "../data/company";
import { businesses } from "../data/businesses";
import ScrollReveal from "../components/ScrollReveal";
import SectionTitle from "../components/SectionTitle";

/* =====================================================================
   SETTINGS - edit these first
   ===================================================================== */
const WHATSAPP = "971554782240";
const EVENTS_LINK = "/businesses/events"; // change if your Events route differs

// Put these files in  public/images/home/
// If a file is missing, a soft green block shows instead (layout never breaks).
const IMG = {
  hero: "/images/home/hero.jpg",
  cta: "/images/home/cta.jpg", // set in CSS (.cta-band)
};

/* =====================================================================
   SVG ICONS (no emojis) - add new ones by adding a path here
   ===================================================================== */
const ICONS = {
  check: "M20 6 9 17l-5-5",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  target: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  globe: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z",
  users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  layers: "M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z",
  flag: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
  cube: "M21 16V8l-9-5-9 5v8l9 5 9-5zM3.3 7 12 12l8.7-5M12 22V12",
  pin: "M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  calendar: "M3 4h18v18H3zM16 2v4M8 2v4M3 10h18",
  quote: "M3 21c3 0 7-1 7-8V5H3v8h4c0 3-2 4-4 4zM14 21c3 0 7-1 7-8V5h-7v8h4c0 3-2 4-4 4z",
};

function Icon({ name, size = 26 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

// Image with a safe fallback: if the file is missing it hides, parent shows green block.
function Pic({ src, alt }) {
  return <img src={src} alt={alt} loading="lazy"
    onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />;
}

/* =====================================================================
   CONTENT - edit text here, JSX below stays the same
   ===================================================================== */
const services = [
  { icon: "layers", title: "Custom Stands",
    text: "Built from scratch around your brand, your products and the way you want visitors to move through your space.",
    points: ["Concept and 3D visualisation", "Fabrication and on-site build", "Dismantling and logistics"] },
  { icon: "grid", title: "Modular Stands",
    text: "Reusable systems that can be reconfigured for different show sizes, so one investment serves many exhibitions.",
    points: ["Quick set-up, lower cost", "Reconfigurable layouts", "Storage and re-use support"] },
  { icon: "flag", title: "Country Pavilions",
    text: "Shared pavilions that bring several exhibitors under one identity, with common services handled for everyone.",
    points: ["Pavilion planning and booking", "Common branding and design", "Exhibitor coordination on site"] },
];

const whyPoints = [
  { icon: "check", title: "Hassle-free planning", text: "One team handles design, approvals, build and handover, so you deal with a single point of contact." },
  { icon: "cube", title: "In-house 3D design", text: "See your stand in 3D before anything is built and adjust it while changes are still cheap." },
  { icon: "users", title: "Experienced team", text: "Planners, designers and site supervisors who have worked on shows in many countries." },
  { icon: "globe", title: "India and global reach", text: "Support for exhibitors from India going abroad and for international companies coming in." },
];

// REPLACE WITH REAL NUMBERS before going live
const stats = [
  { value: "500+", label: "Clients served" },
  { value: "1,000+", label: "Projects delivered" },
  { value: "5", label: "Continents covered" },
  { value: "150+", label: "Exhibitions supported" },
];

// SAMPLE PROJECTS - replace names, sizes and photos with real work
const projects = [
  { name: "Food and Agro Pavilion", city: "Dubai", sqm: "120 SQM", image: "/images/home/project-1.jpg" },
  { name: "Hospitality Brand Stand", city: "Frankfurt", sqm: "54 SQM", image: "/images/home/project-2.jpg" },
  { name: "Technology Showcase", city: "Bangalore", sqm: "72 SQM", image: "/images/home/project-3.jpg" },
];

// SAMPLE FEEDBACK - replace with real client reviews (names and companies) before going live
const testimonials = [
  { quote: "The team kept us informed at every step and the stand was ready well before the show opened.", name: "Marketing Head", company: "Food exporter, UAE" },
  { quote: "Clear 3D drawings and no surprises on cost. We would work with them again for our next exhibition.", name: "Business Owner", company: "Machinery manufacturer, India" },
  { quote: "Our staffing and exhibition needs are handled by one group, which saves us a lot of coordination.", name: "Operations Manager", company: "Services company, Gulf region" },
];

const cityGroups = [
  { region: "India", cities: ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"] },
  { region: "Europe", cities: ["Berlin", "Cologne", "Dusseldorf", "Frankfurt", "Munich", "Paris"] },
  { region: "Middle East and USA", cities: ["Dubai", "Abu Dhabi", "Riyadh", "Las Vegas"] },
];

// Add real dates in "date" - it only shows when filled in
const shows = [
  { name: "SIAL Paris", city: "Paris, France", sector: "Food and beverage", date: "" },
  { name: "Money20/20", city: "Las Vegas, USA", sector: "Fintech and payments", date: "" },
  { name: "Wetex", city: "Dubai, UAE", sector: "Water, energy and environment", date: "" },
  { name: "Glasstec", city: "Dusseldorf, Germany", sector: "Glass industry", date: "" },
];

const values = [
  { icon: "shield", title: "Integrity", desc: "Building trust through transparency and responsible business practices." },
  { icon: "target", title: "Excellence", desc: "Delivering professional, practical, and quality-focused solutions." },
  { icon: "globe", title: "Global Mindset", desc: "Connecting markets, talent, and opportunities across borders." },
  { icon: "users", title: "Partnership", desc: "Creating long-term relationships built around shared success." },
];

/* =====================================================================
   PAGE
   ===================================================================== */
export default function Home() {
  const aboutImages = businesses.slice(0, 3); // reuses your existing business photos

  return (
    <div className="home">
      {/* 1. HERO */}
      <section
        className="hero"
        style={{
          backgroundColor: "#1a1a1a",
          backgroundImage: `linear-gradient(rgba(26,26,26,.78), rgba(26,26,26,.78)), url(${IMG.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            {company.tagline}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            A diversified group with a global outlook — bringing together international recruitment, import and export, and events and exhibitions under one trusted name.
          </motion.p>
          <motion.div className="hero-buttons" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <Link to="/contact" className="btn-lime">Send Your Query</Link>
            <Link to="/businesses/staffing" className="btn-secondary">Explore Our Businesses</Link>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US: text left, image collage right */}
      <section className="hsec">
        <div className="hwrap about-grid">
          <ScrollReveal direction="left">
            <div className="about-text">
              <SectionTitle align="left" title="One group, three ways to connect you with the world"
                subtitle="SourceEve works across international recruitment, import and export, and events and exhibitions." />
              <p>Companies come to us when they need the right people, the right products or the right stage to reach new customers. We bring those three needs together, so you do not have to manage separate vendors in separate countries.</p>
              <p>Our approach is simple: understand what you want to achieve, plan it clearly, and stay involved until it is delivered. Every division follows the same standard of honest communication and dependable follow-through.</p>
              <Link to="/about" className="btn-lime">About the Group</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="about-collage">
              {aboutImages.map((b) => (
                <div className="pic" key={b.id}><Pic src={b.image} alt={b.title} /></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. BUSINESS VENTURES (your existing section, kept) */}
      <section className="hsec businesses">
        <div className="hwrap">
          <SectionTitle title="Our Business Ventures" subtitle="Three specialized divisions, one trusted group." />
          <div className="business-grid">
            {businesses.map((b, i) => (
              <ScrollReveal key={b.id} direction={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 0.15}>
                <div className="business-card">
                  <div className="business-card-image"><img src={b.image} alt={b.title} loading="lazy" /></div>
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
        </div>
      </section>

      {/* 4. SERVICES: exhibition stand services */}
      <section className="hsec">
        <div className="hwrap">
          <SectionTitle title="Exhibition Stand Services"
            subtitle="Whether you need a one-off stand or a full pavilion, we plan, build and manage it end to end." />
          <div className="cards3">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.12}>
                <article className="svc-card">
                  <div className="ico"><Icon name={s.icon} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul className="tick-list">
                    {s.points.map((p) => (<li key={p}><Icon name="check" size={18} />{p}</li>))}
                  </ul>
                  <Link to={EVENTS_LINK} className="text-link">Discuss your stand</Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="hsec hsec-soft">
        <div className="hwrap why-grid">
          <ScrollReveal direction="left">
            <div>
              <SectionTitle align="left" title="Why exhibitors choose SourceEve"
                subtitle="You focus on meeting buyers. We take care of everything that happens around the stand." />
              <Link to="/contact" className="btn-lime">Talk to Our Team</Link>
            </div>
          </ScrollReveal>
          <div className="why-points">
            {whyPoints.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.1}>
                <div className="why-item">
                  <div className="ico"><Icon name={w.icon} /></div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STATS */}
      <section className="hsec stats">
        <div className="hwrap stats-grid">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.1}>
              <div className="stat"><b>{s.value}</b><span>{s.label}</span></div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 7. RECENT PROJECTS */}
      <section className="hsec">
        <div className="hwrap">
          <SectionTitle title="Recent Projects" subtitle="A look at stands and pavilions our team has designed and delivered." />
          <div className="cards3">
            {projects.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.12}>
                <article className="proj">
                  <div className="pic"><Pic src={p.image} alt={p.name} /></div>
                  <h3>{p.name}</h3>
                  <div className="proj-meta"><span>{p.city}</span><span>{p.sqm}</span></div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="hsec hsec-soft">
        <div className="hwrap">
          <SectionTitle title="What Our Clients Say" subtitle="Feedback from companies we have worked with." />
          <div className="cards3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name + i} delay={i * 0.12}>
                <figure className="quote-card">
                  <Icon name="quote" size={30} />
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><strong>{t.name}</strong><span>{t.company}</span></figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. MAJOR EXHIBITING CITIES */}
      <section className="hsec">
        <div className="hwrap">
          <SectionTitle title="Major Exhibiting Cities" subtitle="Cities where we regularly plan and build for exhibitors." />
          <div className="city-groups">
            {cityGroups.map((g, i) => (
              <ScrollReveal key={g.region} delay={i * 0.1}>
                <div>
                  <h3>{g.region}</h3>
                  <ul className="city-list">
                    {g.cities.map((c) => (<li key={c}><Icon name="pin" size={18} />{c}</li>))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. UPCOMING SHOWS */}
      <section className="hsec hsec-soft">
        <div className="hwrap">
          <SectionTitle title="Upcoming Shows" subtitle="Major international exhibitions we can help you take part in." />
          <div className="shows-grid">
            {shows.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <article className="show-card">
                  <h3>{s.name}</h3>
                  <p className="show-city"><Icon name="pin" size={18} />{s.city}</p>
                  <p>{s.sector}</p>
                  {s.date && <p className="show-date"><Icon name="calendar" size={18} />{s.date}</p>}
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CORE VALUES (existing, emojis replaced with SVG) */}
      <section className="hsec">
        <div className="hwrap">
          <SectionTitle title="Our Core Values" subtitle="The principles that guide every connection we build." />
          <div className="values-grid">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="value-card">
                  <div className="value-icon"><Icon name={v.icon} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CALL TO ACTION (the full enquiry form lives on /contact) */}
      <section className="hsec cta-band">
        <ScrollReveal>
          <div className="hwrap cta-inner">
            <h2>Planning an exhibition, a hire or a shipment?</h2>
            <p>Tell us what you need and our team will reply with a clear plan.</p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn-lime">Send Your Query</Link>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="btn-ghost">Chat on WhatsApp</a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
      }
      
