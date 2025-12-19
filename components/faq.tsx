"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is this beginner-friendly?",
      answer:
        "Yes. Each strategy is written in simple, step-by-step language so even beginners can follow and apply it confidently.",
    },
    {
      question: "Is this updated for AI SEO?",
      answer:
        "Absolutely. The database focuses on modern SEO strategies designed for AI search, LLMs, and how people discover content today.",
    },
    {
      question: "Will this work without backlinks?",
      answer:
        "Yes. Many strategies are specifically designed to rank with little to no backlinks, especially in low-competition niches.",
    },
    {
      question: "Is this a course?",
      answer:
        "No. This is a searchable, living database — no videos, no long lessons, just actionable strategies.",
    },
    {
      question: "Do I get future updates?",
      answer:
        "Yes. You get lifetime access, including all future strategies and updates at no extra cost.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-darkBlue-900 py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-10 text-center text-3xl font-bold text-white">
          Frequently asked questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-white text-lg font-medium">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 text-neutral-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-sweetBlue-400" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-neutral-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-neutral-400">
          Still have questions? You’ll find answers inside the database too.
        </p>
      </div>
    </section>
  );
}