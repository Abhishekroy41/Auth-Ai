import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wrench, Percent, ShieldCheck } from 'lucide-react';

export default function WhyAuthAI() {
  const features = [
    {
      icon: <MapPin size={32} className="text-[var(--accent-blue)]" />,
      title: "Local. Personal. Present.",
      desc: "We are based in Dhanbad. We come to your shop. We set it up. We support you in Hindi or English — whichever you prefer. No ticket system. No chatbot support. A real person."
    },
    {
      icon: <Wrench size={32} className="text-orange-400" />,
      title: "Done For You",
      desc: "You don't need to learn any software. You don't need to understand automation. We build it, we test it, we hand it over working. You just watch the leads come in."
    },
    {
      icon: <Percent size={32} className="text-[var(--accent-green)]" />,
      title: "Zero Meta Markup",
      desc: "AiSensy charges 26% extra on every WhatsApp message you send. WATI charges 20%. We charge zero. You pay Meta's exact official India rate — nothing more."
    },
    {
      icon: <ShieldCheck size={32} className="text-[#7C3AED]" />,
      title: "100% Meta Compliant",
      desc: "All our WhatsApp and Instagram automation uses only official Meta APIs. No grey-area tools. No risk of your account getting banned. We protect your business."
    }
  ];

  return (
    <section id="why-us" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-white mb-4"
          >
            Why Auth AI — and Not a Big Platform?
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--text-secondary)] to-white mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 sm:p-10 rounded-3xl border-white/5 hover:border-white/10 transition-colors flex flex-col sm:flex-row gap-6"
            >
              <div className="flex-shrink-0 bg-white/5 p-4 rounded-2xl h-fit">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-2xl font-syne font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-[var(--text-secondary)] font-nunito leading-relaxed text-lg">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
