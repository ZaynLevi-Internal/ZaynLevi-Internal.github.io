import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { industries, serviceGroups } from "./siteContent";
import usePageMeta from "./usePageMeta";

export default function ServicesPage() {
  usePageMeta(
    "AI, Software & Cloud Services | Zayn Levi Technologies",
    "Explore AI, robotics, software development, cloud infrastructure, business systems, education, retail, and digital growth services."
  );

  const serviceAnchorIds = {
    "Artificial Intelligence & Automation": "ai-automation",
    "Web & Mobile Application Development": "software-development",
    "Cloud & IT Infrastructure": "cloud-it",
    "Business Management Solutions": "business-systems",
  };

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="hero-eyebrow"><Sparkles size={15} /> Technology for real business needs</span>
          <h1>Comprehensive AI &amp; IT solutions for modern businesses</h1>
          <p>From intelligent automation to enterprise software, explore technology services designed to help make your business smarter, faster, and more efficient.</p>
          <Link to="/contact" className="hero-primary-button">Discuss a solution <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="section-eyebrow">Our capabilities</p>
            <h2 className="section-title">A connected range of services</h2>
            <p className="section-description">Choose a starting point or combine capabilities to fit your goals. We’ll work with you to understand the requirements before proposing an approach.</p>
          </div>
          <div className="space-y-4">
            {serviceGroups.map((group, index) => (
              <details
                key={group.title}
                id={serviceAnchorIds[group.title]}
                className="service-detail-card"
                open={group.title === "Artificial Intelligence & Automation"}
              >
                <summary>
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 flex-1">
                    <strong>{group.title}</strong>
                    <span>{group.description}</span>
                  </span>
                  <ArrowRight className="service-detail-arrow" size={19} />
                </summary>
                <ul className="service-detail-list">
                  {group.services.map((service) => <li key={service}>{service}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-[#f4f8ff] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="section-eyebrow">Industry focus</p>
            <h2 className="section-title">Technology solutions designed for your industry</h2>
            <p className="section-description">We tailor digital products to the processes, teams, and customer experiences that matter in each industry.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <article key={industry.title} className="industry-card">
                <img src={industry.image} alt="" loading="lazy" />
                <div><h3>{industry.title}</h3><p>{industry.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061b49] px-5 py-16 text-center text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold">Have a challenge in mind?</h2>
          <p className="mt-4 leading-7 text-blue-100/80">Tell us what you’re trying to improve. We’ll start by understanding your needs and discussing a practical next step.</p>
          <Link to="/contact" className="light-cta-button mt-7">Get a free consultation <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
