export default function HeroSection({ backgroundImage, headlines = [], subtext }) {
  const headline = headlines[0] || "Technology for your next chapter";

  return (
    <section
      className="legacy-page-hero"
      style={backgroundImage ? { backgroundImage: `linear-gradient(100deg, rgba(3, 11, 28, .94), rgba(6, 27, 73, .72)), url("${backgroundImage}")` } : undefined}
    >
      <div className="legacy-page-hero-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Zayn Levi Technologies Pvt Ltd</p>
        <h1>{headline}</h1>
        {subtext && <p>{subtext}</p>}
      </div>
    </section>
  );
}
