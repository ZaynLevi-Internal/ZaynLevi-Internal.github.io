import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can you create a solution for our specific business needs?",
    answer: "We discuss your requirements, existing systems, and goals first, then outline a suitable project scope and approach.",
  },
  {
    question: "What industries do you work with?",
    answer: "Our solution areas include healthcare, education, retail, finance, hospitality, infrastructure, fitness, and small or enterprise businesses. The right fit depends on the project requirements.",
  },
  {
    question: "How long does a project take?",
    answer: "Timelines depend on the solution scope, integrations, and requirements. Share your goals with us and we can discuss a realistic plan.",
  },
  {
    question: "Can you integrate AI into an existing system?",
    answer: "Integration feasibility depends on your current systems, data, and objectives. We can review these details with you before recommending an approach.",
  },
  {
    question: "Do you build websites and business applications?",
    answer: "Yes. Our service areas include business websites, web and mobile applications, e-commerce, custom software, and system integrations.",
  },
  {
    question: "Do you provide robotics services?",
    answer: "Our service areas include custom robotics development, robotics integration, automation, and computer vision. We scope each project based on its requirements.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#030b1c] py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Questions</p>
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}<ChevronDown size={18} aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
