import { ArrowDown, ArrowRight, ArrowUpRight, Bot, Cloud, Code2, FileText, GraduationCap, Layers3, Network, Sparkles, Store, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import FAQ from "./FAQ";
import { industries, processStages, serviceGroups, solutionConcepts, technologyAreas } from "./siteContent";
import usePageMeta from "./usePageMeta";

const serviceIcons = {
  sparkles: Sparkles,
  robot: Bot,
  code: Code2,
  cloud: Cloud,
  chart: Workflow,
  book: GraduationCap,
  store: Store,
  layers: Layers3,
  globe: Network,
};

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`mx-auto mb-12 max-w-3xl text-center ${light ? "text-slate-950" : "text-white"}`}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className={`mx-auto mt-4 max-w-2xl text-base leading-7 ${light ? "text-slate-600" : "text-slate-400"}`}>{description}</p>}
    </div>
  );
}

function ContactCta({ compact = false }) {
  return (
    <section className={`px-5 ${compact ? "py-12" : "py-20"}`}>
      <div className="cta-panel mx-auto max-w-7xl rounded-3xl px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/80">Let’s build what’s next</p>
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Your next big idea deserves smarter technology.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-50/85">
          From custom software to intelligent automation, let’s find the right solution for your business.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/contact" className="light-cta-button">Start your project <ArrowUpRight size={17} /></Link>
          <Link to="/contact" className="outline-cta-button">Contact our team</Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  usePageMeta(
    "Zayn Levi Technologies | AI & IT Solutions",
    "Explore AI-powered business solutions, intelligent automation, cloud systems, and custom software from Zayn Levi Technologies."
  );

  return (
    <main>
      <section className="home-hero relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:min-h-[760px] lg:pt-36">
        <div className="home-hero-pattern" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 max-w-2xl">
            <div className="hero-eyebrow"><Sparkles size={15} aria-hidden="true" /> AI-powered business solutions</div>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Ready to transform your business with <span className="hero-title-gradient">smart technology?</span>
            </h1>
            <p className="mt-6 text-lg font-medium leading-8 text-slate-200">
              Empowering businesses through artificial intelligence, intelligent automation, cloud solutions, and custom software development.
            </p>
            <p className="mt-4 max-w-xl leading-7 text-slate-400">
              At Zayn Levi Technologies, we build digital solutions that simplify operations, improve productivity, automate business processes, and support growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/services" className="hero-primary-button">Explore our solutions <ArrowRight size={17} /></Link>
              <Link to="/contact" className="hero-secondary-button">Let’s talk</Link>
            </div>
            <a href="#services" className="mt-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300">
              Discover what we do <ArrowDown size={15} />
            </a>
          </div>

          <div className="hero-dashboard relative mx-auto w-full max-w-[560px]" role="img" aria-label="Illustration of connected business technology services">
            <div className="hero-dashboard-top">
              <Brand />
              <span className="dashboard-live"><span /> DIGITAL SOLUTIONS</span>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-intro">
                <span>CONNECTED CAPABILITIES</span>
                <strong>Technology, working together.</strong>
                <p>Thoughtful software and systems for real business needs.</p>
              </div>
              <div className="dashboard-map">
                <div className="dashboard-map-line dashboard-line-one" />
                <div className="dashboard-map-line dashboard-line-two" />
                <div className="dashboard-map-line dashboard-line-three" />
                <div className="dashboard-center"><Network size={30} /></div>
                <div className="dashboard-service dashboard-ai"><Bot size={17} /><span>AI &amp; automation</span></div>
                <div className="dashboard-service dashboard-cloud"><Cloud size={17} /><span>Cloud solutions</span></div>
                <div className="dashboard-service dashboard-software"><Code2 size={17} /><span>Custom software</span></div>
                <div className="dashboard-service dashboard-data"><FileText size={17} /><span>Business systems</span></div>
              </div>
              <div className="dashboard-footnote"><span>BUILT AROUND YOUR BUSINESS</span><span>01 — 04</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          light
          eyebrow="What we do"
          title="Comprehensive AI & IT solutions for modern businesses"
          description="From intelligent automation to enterprise software, we deliver technology that makes businesses smarter, faster, and more efficient."
        />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceGroups.map((group) => {
            const Icon = serviceIcons[group.icon];
            return (
              <article key={group.title} className="service-category-card">
                <span className="service-category-icon"><Icon size={21} /></span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <details>
                  <summary>Explore this area <ArrowRight size={15} /></summary>
                  <ul>{group.services.map((service) => <li key={service}>{service}</li>)}</ul>
                </details>
              </article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="text-link">Explore all services <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section id="industries" className="bg-[#f4f8ff] px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          light
          eyebrow="Industry solutions"
          title="Technology solutions designed for your industry"
          description="We shape digital tools around the work your teams do and the needs of the people they serve."
        />
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <article key={industry.title} className="industry-card">
              <img src={industry.image} alt="" loading="lazy" />
              <div>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <Link to="/services" aria-label={`Explore solutions for ${industry.title}`}>Explore <ArrowUpRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#061b49] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Why Zayn Levi</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Technology should make work feel simpler.</h2>
            <p className="mt-5 leading-7 text-blue-100/75">
              We bring business needs and technology together to make useful, adaptable solutions—not technology for its own sake.
            </p>
            <Link to="/about" className="text-link mt-7 text-cyan-200">About our approach <ArrowUpRight size={16} /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Business-first thinking", "Start with your goals, processes, and people."],
              ["Solutions shaped for you", "Adapt the product and workflow to your requirements."],
              ["AI where it adds value", "Use intelligent automation to address meaningful tasks."],
              ["Connected systems", "Bring applications and information together."],
              ["Designed to grow", "Build a foundation that can evolve with your needs."],
              ["Support through delivery", "Work with a team from planning to deployment."],
            ].map(([title, description]) => (
              <article key={title} className="value-card">
                <span><Sparkles size={17} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          light
          eyebrow="Our approach"
          title="Turning ideas into intelligent solutions"
          description="A collaborative process keeps the work grounded in your goals from the first conversation through ongoing improvements."
        />
        <ol className="process-list mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {processStages.map((stage) => (
            <li key={stage.number} className="process-card">
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#f4f8ff] px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Technology expertise</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">The right tools for the right job</h2>
          </div>
          <div className="flex max-w-3xl flex-wrap gap-2">
            {technologyAreas.map((technology) => <span className="technology-pill" key={technology}>{technology}</span>)}
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          light
          eyebrow="Solutions showcase"
          title="Ideas for solving everyday business challenges"
          description="Explore solution concepts across business operations, education, retail, and automation. These examples describe areas we can help develop—not claims of completed client deployments."
        />
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutionConcepts.slice(0, 8).map((solution) => (
            <article key={solution.title} className="solution-card">
              <img src={solution.image} alt="" loading="lazy" />
              <div><p>{solution.category}</p><h3>{solution.title}</h3></div>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <Link to="/products" className="text-link">View the solutions showcase <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="bg-[#f4f8ff] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">About the company</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950">Building smarter businesses through technology</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Zayn Levi Technologies Pvt Ltd helps businesses embrace digital transformation through software, intelligent automation, cloud technologies, and customized business applications.
            </p>
          </div>
          <Link to="/about" className="text-link">Get to know us <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <FAQ />
      <ContactCta />
    </main>
  );
}
