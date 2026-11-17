import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "./Brand";

const links = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Industries", to: "/services#industries" },
  { label: "Our work", to: "/#solutions" },
];

const mobileLinks = [
  ...links.slice(0, 2),
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/products" },
  ...links.slice(2),
];

const serviceMenu = [
  { label: "All services", to: "/services" },
  { label: "AI & automation", to: "/services#ai-automation" },
  { label: "Software development", to: "/services#software-development" },
  { label: "Cloud & IT", to: "/services#cloud-it" },
];

const solutionMenu = [
  { label: "Solutions showcase", to: "/products" },
  { label: "Business systems", to: "/products#business-systems" },
  { label: "Industry solutions", to: "/services#industries" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname === to;
  };

  return (
    <header className={`site-header ${scrolled || menuOpen ? "site-header-scrolled" : ""}`}>
      <nav className="site-nav" aria-label="Main navigation">
        <Brand />
        <div className="site-nav-links">
          {links.slice(0, 2).map((link) => (
            <Link key={link.label} to={link.to} className={isActive(link.to) ? "nav-link nav-link-active" : "nav-link"}>
              {link.label}
            </Link>
          ))}
          {[["Services", serviceMenu], ["Solutions", solutionMenu]].map(([label, items]) => (
            <details className="nav-dropdown" key={label}>
              <summary className={isActive(label === "Services" ? "/services" : "/products") ? "nav-link nav-link-active" : "nav-link"}>
                {label}<span aria-hidden="true">⌄</span>
              </summary>
              <div className="nav-dropdown-menu">
                {items.map((item) => <Link key={item.label} to={item.to}>{item.label}</Link>)}
              </div>
            </details>
          ))}
          {links.slice(2).map((link) => (
            <Link key={link.label} to={link.to} className={isActive(link.to) ? "nav-link nav-link-active" : "nav-link"}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta">Get a free consultation</Link>
        </div>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-navigation" id="mobile-navigation">
          {mobileLinks.map((link) => (
            <Link key={link.label} to={link.to} className={isActive(link.to) ? "mobile-nav-link nav-link-active" : "mobile-nav-link"}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta mobile-nav-cta">Get a free consultation</Link>
        </div>
      )}
    </header>
  );
}
