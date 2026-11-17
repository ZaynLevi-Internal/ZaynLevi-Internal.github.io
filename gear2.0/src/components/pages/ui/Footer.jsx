import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import { companyEmail, companyPhone, companySocialLinks } from "./companyContact";

const linkClass = "footer-link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.1fr_0.9fr]">
        <div>
          <Brand footer />
          <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
            AI, software, and digital solutions shaped around real business needs.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Quick links</h2>
          <ul className="space-y-3">
            <li><Link className={linkClass} to="/">Home</Link></li>
            <li><Link className={linkClass} to="/about">About us</Link></li>
            <li><Link className={linkClass} to="/services">Services</Link></li>
            <li><Link className={linkClass} to="/products">Solutions</Link></li>
            <li><Link className={linkClass} to="/#solutions">Our work</Link></li>
            <li><Link className={linkClass} to="/services#industries">Industries</Link></li>
            <li><Link className={linkClass} to="/contact">Contact us</Link></li>
            <li><Link className={linkClass} to="/career">Careers</Link></li>
            <li><Link className={linkClass} to="/training">Training</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">What we do</h2>
          <ul className="space-y-3">
            <li><Link className={linkClass} to="/services">AI &amp; automation</Link></li>
            <li><Link className={linkClass} to="/services">Robotics</Link></li>
            <li><Link className={linkClass} to="/services">Cloud solutions</Link></li>
            <li><Link className={linkClass} to="/services">Software development</Link></li>
            <li><Link className={linkClass} to="/services">Business systems</Link></li>
            <li><Link className={linkClass} to="/services">Web &amp; mobile applications</Link></li>
            <li><Link className={linkClass} to="/services">Digital growth</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Get in touch</h2>
          <a className={linkClass} href={`mailto:${companyEmail}`}>{companyEmail}</a>
          <a className={`${linkClass} mt-3 block`} href={companyPhone.href}>{companyPhone.display}</a>
          <Link to="/contact" className="footer-contact-link">Start a conversation <ArrowUpRight size={15} /></Link>
          <div className="footer-social-links" aria-label="Social media">
            {companySocialLinks.map((social) => {
              const Icon = social.name === "Instagram" ? Instagram : Linkedin;
              return (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zayn Levi Technologies Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
