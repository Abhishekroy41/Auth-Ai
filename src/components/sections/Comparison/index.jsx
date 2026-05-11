import React from 'react';
import { motion } from 'framer-motion';

export default function Comparison() {
  const data = [
    { feature: "WhatsApp Bot (done for you)", authAI: "✅", aisensy: "❌ SaaS only", wati: "❌ SaaS only", interakt: "❌ SaaS only", manychat: "❌ SaaS only" },
    { feature: "Instagram Automation (done for you)", authAI: "✅", aisensy: "❌", wati: "❌", interakt: "❌", manychat: "✅ (self-serve)" },
    { feature: "Meta API Markup", authAI: "0% ✅", aisensy: "+26% ❌", wati: "+20% ❌", interakt: "+18% ❌", manychat: "N/A" },
    { feature: "Local Indian Support (Hindi)", authAI: "✅", aisensy: "❌", wati: "❌", interakt: "Partial", manychat: "❌" },
    { feature: "Setup Done For You", authAI: "✅", aisensy: "❌", wati: "❌", interakt: "❌", manychat: "❌" },
    { feature: "CRM Starter Price/month", authAI: "₹999", aisensy: "₹1,500", wati: "₹4,100", interakt: "₹999", manychat: "₹1,250" },
    { feature: "Entry-Level Bot Price", authAI: "₹8,000 one-time", aisensy: "SaaS fee ongoing", wati: "SaaS fee ongoing", interakt: "SaaS fee ongoing", manychat: "SaaS fee ongoing" }
  ];

  return (
    <section className="py-24 bg-[var(--bg-secondary)] relative border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-white mb-4"
          >
            Auth AI vs The Competition — At a Glance
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl overflow-hidden border-white/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-5 font-syne font-bold text-[var(--text-secondary)] min-w-[250px]">Feature</th>
                  <th className="p-5 font-syne font-bold text-[var(--accent-green)] text-lg">Auth AI</th>
                  <th className="p-5 font-syne font-bold text-[var(--text-secondary)]">AiSensy</th>
                  <th className="p-5 font-syne font-bold text-[var(--text-secondary)]">WATI</th>
                  <th className="p-5 font-syne font-bold text-[var(--text-secondary)]">Interakt</th>
                  <th className="p-5 font-syne font-bold text-[var(--text-secondary)]">ManyChat</th>
                </tr>
              </thead>
              <tbody className="font-nunito">
                {data.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-5 text-white font-semibold">{row.feature}</td>
                    <td className="p-5 font-bold text-[var(--text-primary)] bg-[var(--accent-green)]/5 border-x border-[var(--accent-green)]/10">{row.authAI}</td>
                    <td className="p-5 text-[var(--text-muted)]">{row.aisensy}</td>
                    <td className="p-5 text-[var(--text-muted)]">{row.wati}</td>
                    <td className="p-5 text-[var(--text-muted)]">{row.interakt}</td>
                    <td className="p-5 text-[var(--text-muted)]">{row.manychat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
