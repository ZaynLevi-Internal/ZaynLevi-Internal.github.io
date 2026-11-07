import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  GraduationCap,
  Lightbulb,
  MoveUpRight,
  Puzzle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from "./FAQ";
import productsList from "./ProductsList";

const services = [
  {
    number: "01",
    icon: <BrainCircuit aria-hidden="true" />,
    title: "AI & machine learning",
    description:
      "Thoughtful AI, chatbots, and predictive tools that make everyday work smarter.",
    color: "coral",
  },
  {
    number: "02",
    icon: <Bot aria-hidden="true" />,
    title: "Robotics engineering",
    description:
      "Robotics and automation designed to solve practical, real-world challenges.",
    color: "lime",
  },
  {
    number: "03",
    icon: <Code2 aria-hidden="true" />,
    title: "Digital experiences",
    description:
      "Scalable websites, apps, and cloud infrastructure built around your goals.",
    color: "lavender",
  },
  {
    number: "04",
    icon: <Puzzle aria-hidden="true" />,
    title: "Technology consulting",
    description:
      "A collaborative partner to help you choose, connect, and get more from technology.",
    color: "blue",
  },
];

const process = [
  ["01", "Listen", "We get to know your goals, your people, and the problem to solve."],
  ["02", "Imagine", "We turn the big idea into a practical plan and clear next steps."],
  ["03", "Make", "We build, test, and refine with you—not in a black box."],
  ["04", "Grow", "We launch thoughtfully and help your solution keep getting better."],
];

const appear = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <video
          className="home-hero__video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/video/main_video.mp4" type="video/mp4" />
        </video>
        <div className="home-hero__veil" />
        <div className="home-hero__content">
          <motion.div
            className="home-hero__copy"
            initial="hidden"
            animate="visible"
            variants={appear}
          >
            <p className="eyebrow eyebrow--light">
              <Sparkles size={15} aria-hidden="true" />
              A little more human. A lot more future.
            </p>
            <h1>
              Big ideas,
              <br />
              <span>made real.</span>
            </h1>
            <p className="home-hero__intro">
              We make useful technology for a changing world—from intelligent
              automation to digital experiences that move your business forward.
            </p>
            <div className="home-hero__actions">
              <Link className="button button--lime" to="/services">
                See what we do <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <Link className="button button--outline-light" to="/contact">
                Let’s talk
              </Link>
            </div>
            <a className="home-hero__scroll" href="#what-we-do">
              <span>Scroll to explore</span>
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="home-hero__art"
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="hero-art__orbit hero-art__orbit--one" />
            <div className="hero-art__orbit hero-art__orbit--two" />
            <div className="hero-art__image">
              <img src="/images/robotarm.jpg" alt="Robotic arm prototype" />
            </div>
            <div className="hero-art__sticker">
              <Lightbulb size={22} aria-hidden="true" />
              <span>Curiosity<br />in motion</span>
            </div>
            <div className="hero-art__caption">
              <span>Human ideas</span>
              <MoveUpRight size={16} aria-hidden="true" />
              <span>Real-world impact</span>
            </div>
          </motion.div>
        </div>
        <div className="home-hero__ticker" aria-label="Our focus">
          <span>Artificial intelligence</span><i />
          <span>Robotics</span><i />
          <span>Digital products</span><i />
          <span>Better futures</span>
        </div>
      </section>

      <section className="home-intro section-wrap" id="what-we-do">
        <motion.div
          className="home-intro__label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={appear}
        >
          <span className="section-index">01 / WHAT WE DO</span>
          <span className="intro-sparkle">✳</span>
        </motion.div>
        <motion.div
          className="home-intro__text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={appear}
        >
          <h2>
            Technology should feel like a <em>possibility,</em> not a puzzle.
          </h2>
          <p>
            We bring together creative thinking and engineering know-how to
            build technology that makes a difference—designed with care, built
            to last, and made for people.
          </p>
          <Link className="text-link" to="/about">
            Get to know us <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>
      </section>

      <section className="services-section section-wrap">
        <div className="section-heading">
          <div>
            <span className="section-index">02 / OUR EXPERTISE</span>
            <h2>Good work starts with a good question.</h2>
          </div>
          <Link className="text-link" to="/services">
            All services <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.article
              className={`service-card service-card--${service.color}`}
              key={service.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={appear}
              transition={{ delay: index * 0.08 }}
            >
              <div className="service-card__top">
                <span className="service-card__number">{service.number}</span>
                <span className="service-card__icon">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link
                to="/services"
                aria-label={`Learn more about ${service.title}`}
                className="service-card__link"
              >
                <ArrowUpRight size={19} aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="section-wrap">
          <div className="section-heading section-heading--products">
            <div>
              <span className="section-index">03 / THINGS WE’VE MADE</span>
              <h2>Ideas with a little bit of hardware.</h2>
            </div>
            <p>
              From a first sketch to a working product, we make technology
              tangible.
            </p>
          </div>
          <div className="product-grid">
            {productsList.slice(0, 3).map((product, index) => (
              <motion.article
                className={`product-card product-card--${index + 1}`}
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={appear}
              >
                <Link
                  to="/products"
                  className="product-card__image"
                  aria-label={`Explore ${product.name}`}
                >
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="product-card__arrow">
                    <ArrowUpRight size={20} aria-hidden="true" />
                  </span>
                </Link>
                <div className="product-card__details">
                  <span>0{index + 1} / PROJECT</span>
                  <h3>{product.name}</h3>
                  <p>{product.info}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="products-link-row">
            <Link className="button button--dark" to="/products">
              Explore our products <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="process-section section-wrap">
        <div className="process-section__heading">
          <span className="section-index">04 / HOW WE WORK</span>
          <h2>From “what if?” to “what’s next?”</h2>
          <p>
            Great work is a team sport. We keep the process open, collaborative,
            and focused on what matters.
          </p>
        </div>
        <div className="process-grid">
          {process.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span className="process-step__number">{number}</span>
              <span className="process-step__line" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="training-banner section-wrap">
        <div className="training-banner__shape" aria-hidden="true">✳</div>
        <div className="training-banner__copy">
          <span className="section-index">A LITTLE ROOM TO GROW</span>
          <h2>Learn by making things that matter.</h2>
          <p>
            Build practical Python and generative AI skills with hands-on
            projects and expert mentorship.
          </p>
          <Link className="button button--dark" to="/apply-training">
            Explore training <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="training-banner__badge">
          <GraduationCap size={34} aria-hidden="true" />
          <span>Make your<br />next move</span>
        </div>
      </section>

      <FAQ />

      <section className="home-contact section-wrap">
        <div className="home-contact__decoration" aria-hidden="true">✳</div>
        <span className="section-index">GOOD THINGS START WITH A HELLO</span>
        <h2>Got a big idea?<br /><em>Let’s make it happen.</em></h2>
        <div className="home-contact__actions">
          <Link className="button button--lime" to="/contact">
            Start a conversation <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <Link className="text-link text-link--light" to="/career">
            Or come build with us <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
