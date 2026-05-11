import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do I need to pay Meta separately?",
      a: "Yes. Meta charges per message at their official India 2026 rate: ₹0.86 for marketing messages, ₹0.115 for utility messages. Inbound replies within 24 hours are free. Auth AI charges ZERO markup — you pay Meta's exact rate, nothing more."
    },
    {
      q: "What's the difference between Phase 1 and Phase 2 pricing?",
      a: "Phase 1 (Founder Pricing) is available for our first 5 projects at discounted rates, offered verbally and in exchange for a video testimonial. Phase 2 is our standard launch pricing."
    },
    {
      q: "Will Instagram automation get my account banned?",
      a: "No. Auth AI uses only Meta's official Graph API — fully compliant and approved methods. We never use grey-area or unofficial tools that risk your account."
    },
    {
      q: "Do I need to know any technology?",
      a: "Zero technical knowledge required. We handle everything — setup, testing, training, and ongoing maintenance."
    },
    {
      q: "What happens if the bot doesn't work properly?",
      a: "All projects include a support period (30–60 days depending on package). Monthly maintenance clients get priority support."
    },
    {
      q: "How is Auth AI different from AiSensy or WATI?",
      a: "AiSensy and WATI are SaaS platforms — they give you the tools and you set them up yourself. Auth AI builds everything for you. Plus, we charge zero Meta markup vs AiSensy's 26% and WATI's 20%."
    },
    {
      q: "Is the CRM available on mobile?",
      a: "Yes. The Auth AI CRM is fully web-based and mobile-optimized. Your team can reply from any device."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border-white/10"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
              >
                <h3 className="font-syne font-bold text-lg text-white">{faq.q}</h3>
                <ChevronDown 
                  className={`text-[var(--text-secondary)] transition-transform duration-300 flex-shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    key="faq-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-[var(--text-secondary)] font-nunito leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
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
