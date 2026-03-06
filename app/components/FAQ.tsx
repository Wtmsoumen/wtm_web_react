"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Can you build custom AI models for our specific business needs?",
    answer:
      "Absolutely. We build custom AI models including fine-tuned LLMs, computer vision systems, recommendation engines, NLP pipelines, and predictive analytics solutions tailored to your domain. Our AI team has delivered 50+ production AI systems across healthcare, FinTech, e-commerce, and more.",
  },
  {
    question: "How can you integrate AI into our existing systems?",
    answer:
      "We offer seamless AI integration through APIs, microservices, and SDK-based approaches. Whether you need to add intelligent search, automated decision-making, chatbots, or data insights to your current platform, we can integrate without disrupting your existing workflows.",
  },
  {
    question: "Which industries benefit the most from your AI solutions?",
    answer:
      "We've delivered high-impact AI solutions across FinTech (fraud detection, trading), Healthcare (diagnostics, telemedicine), E-commerce (recommendations, pricing), Logistics (route optimization), Education (adaptive learning), and On-Demand (matching algorithms, dynamic pricing). Essentially, any data-driven industry benefits.",
  },
  {
    question: "What is your development process and how long does a project take?",
    answer:
      "We follow an Agile methodology with 2-week sprints. A typical MVP takes 6-12 weeks depending on complexity. We provide full transparency with weekly demos, Jira board access, and a dedicated project manager. Our DevOps pipelines ensure continuous delivery from day one.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-bg py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Have more questions? {" "}
            <a href="#contact" className="text-purple-400 hover:underline">
              Talk to our experts
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`card-glass rounded-2xl overflow-hidden transition-all duration-300 ${
                openIdx === idx ? "border-purple-500/40" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-white font-semibold text-base pr-4">{faq.question}</span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full gradient-btn flex items-center justify-center transition-transform duration-300 ${
                    openIdx === idx ? "rotate-45" : ""
                  }`}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
