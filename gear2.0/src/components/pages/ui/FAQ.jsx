import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you offer custom AI/IT solutions?",
    answer:
      "Yes. We design tailored solutions based on your business needs, from idea to deployment.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across sectors including energy, manufacturing, logistics, and software.",
  },
  {
    question: "How quickly can you deliver a prototype?",
    answer:
      "Our agile approach allows us to go from concept to working prototype in a matter of weeks.",
  },
  {
    question: "Are your systems sustainable?",
    answer:
      "Absolutely. Every solution we build is developed with energy-efficiency and sustainability in mind.",
  },
  {
    question: "Can you integrate AI into existing systems?",
    answer: "Yes, we specialize in retrofitting AI into legacy infrastructure and workflows.",
  },
  {
    question: "What makes your robotics different?",
    answer: "We combine AI with mechanical design for adaptive, intelligent automation.",
  },
  {
    question: "Do you offer custom software/web development?",
    answer: "Yes, we build IT solutions including web apps, platforms, and system integrations.",
  },
  {
    question: "Can you handle both product and service design?",
    answer: "Absolutely — we handle both end-to-end product builds and digital services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-section__inner">
        <span className="section-index">05 / THE DETAILS</span>
        <h2>
          Frequently Asked Questions
        </h2>

        <div className="faq-section__list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="faq-section__item"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="faq-section__question"
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="faq-section__toggle"
                  aria-hidden="true"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="faq-section__answer"
                  >
                    <motion.p layout transition={{ duration: 0.4 }}>
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
