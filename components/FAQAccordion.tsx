"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/faqs";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-background-elevated border-t border-border">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-foreground font-heading">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about our scheduling, service expectations, mobile setup, and vehicle care.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-surface border-primary/40 shadow-sm"
                    : "bg-surface/60 border-border hover:border-border-strong hover:bg-surface"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-sm md:text-base font-bold text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 pb-5 pt-1 text-xs md:text-sm text-muted-foreground leading-relaxed border-t border-border/40"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-surface border border-border text-center max-w-xl mx-auto">
          <p className="text-xs md:text-sm text-foreground font-medium">
            Have a specific vehicle requirement or unique project?
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Call or text Mike directly at{" "}
            <a href="tel:9193203010" className="text-primary font-bold hover:underline">
              (919) 320-3010
            </a>{" "}
            for personal guidance.
          </p>
        </div>
      </div>
    </section>
  );
}
