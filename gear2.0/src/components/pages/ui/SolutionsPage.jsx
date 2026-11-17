import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { solutionConcepts } from "./siteContent";
import usePageMeta from "./usePageMeta";

export default function SolutionsPage() {
  usePageMeta(
    "Business Software & AI Solution Concepts | Zayn Levi Technologies",
    "Explore solution concepts for AI, business operations, education, retail, finance, hospitality, infrastructure, and fitness."
  );

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="hero-eyebrow">Product thinking, grounded in your needs</span>
          <h1>Solutions that power business growth</h1>
          <p>Explore examples of the business systems and digital products we can help shape for your organization.</p>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="solution-notice">
            <strong>Solution concepts</strong>
            <p>The items below describe solution areas and product concepts, not a claim that each has been completed or deployed for a client. Scope and availability depend on project requirements.</p>
          </div>
          <div id="business-systems" className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutionConcepts.map((solution) => (
              <article key={solution.title} className="solution-card">
                <img src={solution.image} alt="" loading="lazy" />
                <div><p>{solution.category}</p><h2>{solution.title}</h2></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#061b49] px-5 py-16 text-center text-white sm:px-8">
        <h2 className="text-3xl font-semibold">Have a project in mind? Let’s build it together.</h2>
        <Link to="/contact" className="light-cta-button mt-7">Discuss your project <ArrowUpRight size={17} /></Link>
      </section>
    </main>
  );
}
