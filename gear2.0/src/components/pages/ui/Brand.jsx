import { Link } from "react-router-dom";

const Brand = ({ footer = false }) => (
  <Link
    to="/"
    aria-label="Zayn Levi Technologies home"
    className={`brand-lockup ${footer ? "brand-lockup-footer" : ""}`}
  >
    <svg className="brand-mark" viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id="brand-gradient" x1="13" y1="13" x2="109" y2="107" gradientUnits="userSpaceOnUse">
          <stop stopColor="#075BDB" />
          <stop offset="0.52" stopColor="#087EFF" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path
        fill="url(#brand-gradient)"
        d="M29 12h61a18 18 0 0 1 13 5l-18 17H31a7 7 0 0 0-7 7v29L7 87V34a22 22 0 0 1 22-22Zm82 24v50a22 22 0 0 1-22 22H30a18 18 0 0 1-14-6l18-17h53a7 7 0 0 0 7-7V54l17-18Z"
      />
      <path
        fill="url(#brand-gradient)"
        d="m88 17 16 17-70 69-17-16 71-70Z"
      />
    </svg>
    <span className="brand-copy">
      <span className="brand-name"><span>ZAYN</span> <span>LEVI</span></span>
      <span className="brand-tagline">TECHNOLOGIES PVT LTD</span>
    </span>
  </Link>
);

export default Brand;
