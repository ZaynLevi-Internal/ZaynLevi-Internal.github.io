import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Briefcase,
  Mail,
  Package,
  UserRoundCheck,
  Users,
  GraduationCap,
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "About Us", path: "/about", icon: <Users size={18} /> },
    { name: "Services", path: "/services", icon: <Briefcase size={18} /> },
    { name: "Products", path: "/products", icon: <Package size={18} /> },
    { name: "Career", path: "/career", icon: <UserRoundCheck size={18} /> },
    { name: "Training", path: "/training", icon: <GraduationCap size={18} /> },
  ];

  return (
    <header
      className={`site-header${scrolling ? " site-header--scrolled" : ""}${menuOpen ? " site-header--open" : ""}`}
    >
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="site-brand" to="/" aria-label="Zayn Levi Technologies home">
          <img src="/images/z.png" alt="" />
          <span>Zayn Levi<br />Technologies</span>
        </Link>

        <ul className={`site-nav__links${menuOpen ? " site-nav__links--open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                aria-current={location.pathname === item.path ? "page" : undefined}
                onClick={() => {
                  if (location.pathname === item.path) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  setMenuOpen(false);
                }}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              className="site-nav__contact"
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              <Mail size={16} aria-hidden="true" />
              Let’s talk
            </Link>
          </li>
        </ul>

        <button
          className="site-nav__toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
