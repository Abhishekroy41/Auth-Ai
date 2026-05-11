import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Check } from 'lucide-react';

export default function PricingBot() {
  const [phase, setPhase] = useState('phase2');

  const packages = [
    {
      title: "Basic Bot",
      price: "₹8,000",
      type: "one-time",
      features: ["1 flow: FAQ + lead capture + 1 follow-up", "Delivery: 5–7 days"],
      popular: false
    },
    {
      title: "Smart Bot",
      price: "₹18,000",
      type: "one-time",
      features: ["2–3 flows: FAQ + booking + 3-touchpoint follow-up", "Delivery: 10–14 days"],
      popular: true
    },
    {
      title: "Full Bot System",
      price: "₹30,000",
      type: "one-time",
      features: ["4–5 flows: Complete enquiry-to-conversion automation", "Delivery: 21–28 days"],
      popular: false
    },
    {
      title: "Monthly Maintenance",
      price: "₹3,500",
      type: "/month",
      features: ["Monitor + update + fix all flows", "Ongoing support"],
      popular: false
    }
  ];

  const industryBots = [
    { name: "Gym Growth Bot", price: "₹12,000", desc: "Books free trials & tracks members" },
    { name: "Clinic Care Bot", price: "₹14,000", desc: "Patient appointments & reminders" },
    { name: "Salon Booking Bot", price: "₹10,000", desc: "Service booking & offers" },
    { name: "Admission Flow Bot", price: "₹16,000", desc: "Student enquiries & brochure delivery" },
    { name: "Property Enquiry Bot", price: "₹18,000", desc: "Lead qualification & site visits" },
    { name: "Shop Enquiry Bot", price: "₹9,000", desc: "Product catalog & order taking" }
  ];

  return (
    <section id="pricing-bot" className="py-24 bg-[var(--bg-secondary)] relative border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-4">WhatsApp AI Bot — Pricing</h2>
          <p className="text-xl text-[var(--text-secondary)] font-nunito mb-10">
            Project-based pricing. You pay once. We build it. It runs forever.
          </p>

          {/* Phase Toggle */}
          <div className="inline-flex bg-black/40 p-1 rounded-full border border-white/10 mb-8">
            <button 
              onClick={() => setPhase('phase1')}
              className={`px-6 py-2.5 rounded-full font-nunito font-semibold text-sm transition-all ${phase === 'phase1' ? 'bg-white/10 text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-white'}`}
            >
              Phase 1 — Founder
            </button>
            <button 
              onClick={() => setPhase('phase2')}
              className={`px-6 py-2.5 rounded-full font-nunito font-semibold text-sm transition-all ${phase === 'phase2' ? 'bg-[var(--accent-green)] text-black shadow-[var(--glow-green)]' : 'text-[var(--text-muted)] hover:text-white'}`}
            >
              Phase 2 — Launch
            </button>
            <button 
              onClick={() => setPhase('phase3')}
              className={`px-6 py-2.5 rounded-full font-nunito font-semibold text-sm transition-all ${phase === 'phase3' ? 'bg-white/10 text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-white'}`}
            >
              Phase 3 — Commercial
            </button>
          </div>

          <AnimatePresence mode="wait">
            {phase === 'phase1' && (
              <motion.div 
                key="phase1-banner"
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 inline-flex items-center gap-3 mx-auto text-orange-200"
              >
                <Lock size={18} className="text-orange-400" />
                <span className="font-nunito text-sm font-semibold">Founder Pricing — First 5 projects only. Offered verbally. Requires video testimonial.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-3xl relative ${pkg.popular ? 'border-[var(--accent-green)] shadow-[var(--glow-green)]' : 'border-white/10'}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent-green)] text-black font-bold font-mono text-xs px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-syne font-bold text-white mb-2">{pkg.title}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-mono font-bold text-white">{pkg.price}</span>
                <span className="text-[var(--text-secondary)] font-mono text-sm">{pkg.type}</span>
              </div>

              <div className="space-y-4">
                {pkg.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex gap-3 items-start">
                    <Check size={18} className="text-[var(--accent-green)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-primary)] font-nunito text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Scroll Area */}
        <div className="mb-16">
          <h3 className="text-2xl font-syne font-bold text-white mb-8 text-center">Industry-Specific Packages</h3>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x hide-scrollbar">
            {industryBots.map((bot, idx) => (
              <div key={idx} className="glass-card min-w-[280px] p-6 rounded-2xl snap-center flex-shrink-0 border-white/5 hover:border-[var(--accent-wa)] transition-colors">
                <h4 className="font-syne font-bold text-lg text-white mb-1">{bot.name}</h4>
                <p className="text-[var(--accent-green)] font-mono font-bold mb-3">{bot.price}</p>
                <p className="text-[var(--text-secondary)] font-nunito text-sm">{bot.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-black/30 border border-white/5 p-6 rounded-2xl text-center max-w-3xl mx-auto">
          <p className="text-[var(--text-muted)] font-mono text-xs leading-relaxed">
            Meta API charges (WhatsApp messages) are billed separately by Meta at their official India rate. Auth AI charges ZERO markup. <br className="hidden sm:block"/>
            Marketing message: ₹0.86 each. Utility message: ₹0.115 each. Inbound service replies: FREE.
          </p>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
