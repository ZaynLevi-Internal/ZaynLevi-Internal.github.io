import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { serviceGroups } from "./siteContent";
import usePageMeta from "./usePageMeta";
import { companyEmail, companyPhone, companySocialLinks } from "./companyContact";

const CONTACT_ENDPOINT = "https://servicesingear-github-io.onrender.com/submit";
const emptyForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  service: "",
  requirements: "",
};

const fieldClass = "contact-field";

export default function ContactPage() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [honeypot, setHoneypot] = useState("");
  usePageMeta(
    "Contact Zayn Levi Technologies | Discuss Your Project",
    "Contact Zayn Levi Technologies to discuss custom software, AI automation, cloud solutions, or business management systems."
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (status.type !== "idle") setStatus({ type: "idle", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (honeypot.trim()) {
      setStatus({ type: "error", message: "We couldn’t submit this enquiry. Please try again." });
      return;
    }

    setStatus({ type: "sending", message: "" });

    const description = [
      `Country: ${formData.country}`,
      `Service interested in: ${formData.service}`,
      "",
      formData.requirements,
    ].join("\n");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          workEmail: formData.email,
          phone: formData.phone,
          query: formData.service,
          description,
        }),
      });

      if (!response.ok) {
        setStatus({
          type: "error",
          message: `We couldn’t send your enquiry just now. Please try again or email ${companyEmail}.`,
        });
        return;
      }

      setFormData(emptyForm);
      setStatus({ type: "success", message: "Thank you. Your enquiry has been sent successfully." });
    } catch (error) {
      console.error("Contact enquiry submission failed:", error);
      setStatus({
        type: "error",
        message: `We couldn’t connect to the enquiry service. Please try again or email ${companyEmail}.`,
      });
    }
  };

  return (
    <main className="page-shell">
      <section className="page-hero contact-hero">
        <div className="page-hero-pattern" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="hero-eyebrow">Let’s build something useful</span>
          <h1>Let’s discuss your next project</h1>
          <p>Tell us what you’re looking to improve. We’ll use your requirements to start a focused conversation about the right next step.</p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside>
            <p className="section-eyebrow">Contact details</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">We’re ready to hear from you.</h2>
            <p className="mt-4 leading-7 text-slate-600">Share a little about your project or question and our team will be in touch.</p>
            <div className="mt-8 space-y-4">
              <a className="contact-detail" href={`mailto:${companyEmail}`}>
                <span><Mail size={18} /></span>
                <span><small>Email us</small><strong>{companyEmail}</strong></span>
                <ArrowUpRight size={16} />
              </a>
              <a className="contact-detail" href={companyPhone.href}>
                <span><Phone size={18} /></span>
                <span><small>Call us</small><strong>{companyPhone.display}</strong></span>
                <ArrowUpRight size={16} />
              </a>
              <div className="contact-social-links" aria-label="Social media">
                {companySocialLinks.map((social) => {
                  const Icon = social.name === "Instagram" ? Instagram : Linkedin;
                  return (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon size={17} aria-hidden="true" />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="website-url">Leave this field empty</label>
              <input
                id="website-url"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label>Full name
                <input className={fieldClass} autoComplete="name" name="name" value={formData.name} onChange={handleChange} required maxLength={120} />
              </label>
              <label>Company name
                <input className={fieldClass} autoComplete="organization" name="company" value={formData.company} onChange={handleChange} maxLength={160} />
              </label>
              <label>Email address
                <input className={fieldClass} autoComplete="email" type="email" name="email" value={formData.email} onChange={handleChange} required maxLength={254} />
              </label>
              <label>Phone number
                <input className={fieldClass} autoComplete="tel" type="tel" name="phone" value={formData.phone} onChange={handleChange} required maxLength={40} />
              </label>
              <label>Country
                <input className={fieldClass} autoComplete="country-name" name="country" value={formData.country} onChange={handleChange} required maxLength={100} />
              </label>
              <label>Service interested in
                <select className={fieldClass} name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  {serviceGroups.map((group) => <option key={group.title} value={group.title}>{group.title}</option>)}
                  <option value="Other project enquiry">Other project enquiry</option>
                </select>
              </label>
            </div>
            <label className="mt-5 block">Project requirements
              <textarea className={`${fieldClass} min-h-36 resize-y`} name="requirements" value={formData.requirements} onChange={handleChange} required minLength={10} maxLength={5000} />
            </label>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button className="hero-primary-button" type="submit" disabled={status.type === "sending"}>
                {status.type === "sending" ? "Sending enquiry…" : "Send enquiry"}
                {status.type !== "sending" && <Send size={16} />}
              </button>
              <p className="text-xs leading-5 text-slate-500">By submitting, you’re asking us to contact you about this enquiry.</p>
            </div>
            {status.message && (
              <p className={`form-status ${status.type}`} role="status" aria-live="polite">
                {status.type === "success" && <CheckCircle2 size={18} />}
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
