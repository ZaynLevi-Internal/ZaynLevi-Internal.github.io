import { Link } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
];

const explore = [
  { label: "Careers", to: "/career" },
  { label: "Training", to: "/training" },
  { label: "Contact", to: "/contact" },
];

function Footer() {
  const scrollToTopIfCurrent = (path) => {
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <Link to="/" aria-label="Zayn Levi Technologies home">
            <img src="/images/z.png" alt="Zayn Levi Technologies" />
          </Link>
          <p>
            Thoughtful technology, built together. We turn ambitious ideas into
            useful solutions for a changing world.
          </p>
        </div>

        <div>
          <h2>Explore</h2>
          <ul>
            {navigation.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} onClick={() => scrollToTopIfCurrent(to)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>More</h2>
          <ul>
            {explore.map(({ label, to }) => (
              <li key={to}>
                <Link to={to} onClick={() => scrollToTopIfCurrent(to)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__contact">
          <h2>Say hello</h2>
          <a href="mailto:business@zaynlevi.com">business@zaynlevi.com</a>
          <a href="tel:+916300854318">+91 63008 54318</a>
        </div>
      </div>

      <div className="site-footer__bottom">
        © 2025 ZAYN LEVI TECHNOLOGIES PVT LTD · ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}

export default Footer;
