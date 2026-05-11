import React from 'react';
import { motion } from 'framer-motion';

export default function Roadmap() {
  const steps = [
    {
      day: "Day 1",
      title: "Free Demo Call",
      desc: "We understand your business, your WhatsApp pain points, and your goals. Zero pressure."
    },
    {
      day: "Days 2–14",
      title: "We Build It",
      desc: "Our team builds your custom bot or automation system. You see it live before we go live."
    },
    {
      day: "Day 7–21",
      title: "Go Live",
      desc: "We connect it to your number, test every flow, and hand it over. We train you for 30 minutes."
    },
    {
      day: "Day 1 Onwards",
      title: "You Get Leads",
      desc: "Your bot starts replying. Leads get captured. Follow-ups go automatically. You focus on your business."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-white mb-4"
          >
            How It Works — From First Call to First Bot
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-green)] via-[var(--accent-blue)] to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-green)] shadow-[var(--glow-green)] -translate-x-1/2 mt-6 md:mt-0 md:top-1/2 md:-translate-y-1/2 z-10"></div>
                
                <div className="md:w-1/2"></div>
                
                <div className={`md:w-1/2 pl-20 pr-4 md:px-12 py-4 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="glass-card p-6 md:p-8 rounded-3xl border-white/10 hover:border-white/20 transition-colors inline-block w-full">
                    <span className="inline-block px-3 py-1 rounded bg-[var(--accent-green)]/10 text-[var(--accent-green)] font-mono text-sm font-bold mb-4">
                      Step {idx + 1}: {step.day}
                    </span>
                    <h3 className="text-2xl font-syne font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-[var(--text-secondary)] font-nunito leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
