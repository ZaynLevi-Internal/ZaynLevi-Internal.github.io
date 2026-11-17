import { ArrowUpRight, Compass, Lightbulb, Target } from "lucide-react";
import { Link } from "react-router-dom";
import usePageMeta from "./usePageMeta";

export default function AboutPage() {
  usePageMeta(
    "About Zayn Levi Technologies | Practical Digital Transformation",
    "Learn about Zayn Levi Technologies Pvt Ltd and our business-focused approach to software, AI, automation, and digital transformation."
  );

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="page-hero-pattern" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="hero-eyebrow"><Compass size={15} /> About Zayn Levi Technologies</span>
          <h1>Building smarter businesses through technology</h1>
          <p>We bring technology and business requirements together to create practical solutions that improve operations, simplify complex processes, and open new opportunities for growth.</p>
          <Link to="/contact" className="hero-primary-button">Let’s work together <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Who we are</p>
            <h2 className="section-title">Technology made practical and valuable</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Zayn Levi Technologies Pvt Ltd is an AI and IT solutions company focused on helping businesses embrace digital transformation through innovative software, intelligent automation, cloud technologies, and customized business applications.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our objective is to make advanced technology accessible, practical, and valuable for businesses of every size. We focus on understanding the problem first, then shaping a solution around the people and processes involved.
            </p>
          </div>
          <div className="about-image-wrap">
            <img src="/images/aboutus.png" alt="Technology and digital transformation" loading="lazy" />
            <div className="about-image-note"><span>OUR FOCUS</span><strong>Useful technology.<br />Meaningful outcomes.</strong></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8ff] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {[
            {
              icon: <Target size={21} />,
              title: "Our mission",
              text: "Help businesses use software, AI, and automation to make everyday work more effective.",
            },
            {
              icon: <Lightbulb size={21} />,
              title: "Our vision",
              text: "Make advanced technology practical and valuable for organizations of every size.",
            },
            {
              icon: <Compass size={21} />,
              title: "Our approach",
              text: "Listen first, design around real needs, and build solutions that can evolve over time.",
            },
          ].map(({ icon, title, text }) => (
            <article key={title} className="about-principle">
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#061b49] px-5 py-16 text-center text-white sm:px-8">
        <h2 className="text-3xl font-semibold">Let’s make your next idea useful.</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100/80">Start a conversation about the goals, constraints, and opportunities behind your project.</p>
        <Link to="/contact" className="light-cta-button mt-7">Talk to our team <ArrowUpRight size={17} /></Link>
      </section>
    </main>
  );
}
