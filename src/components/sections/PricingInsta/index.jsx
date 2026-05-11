import React from 'react';
import { motion } from 'framer-motion';

export default function PricingInsta() {
  const packages = [
    {
      title: "Comment-to-DM Setup",
      platform: "1 platform",
      price: "₹8,000",
      desc: "Delivery: 5–7 days"
    },
    {
      title: "Full DM Bot",
      platform: "1 platform",
      price: "₹18,000",
      desc: "Delivery: 10–14 days"
    },
    {
      title: "Both Platforms",
      platform: "Instagram + Facebook",
      price: "₹28,000",
      desc: "Delivery: 14–21 days",
      badge: "Best Value"
    }
  ];

  const addons = [
    { name: "Reel Viral Protection", price: "₹5,000 add-on" },
    { name: "Monthly Management", price: "₹5,000/month" },
    { name: "Instagram AI Audit", price: "₹1,500 one-time" }
  ];

  return (
    <section id="pricing-insta" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-4">Instagram & Facebook Automation — Pricing</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-3xl relative ${pkg.badge ? 'border-[#E1306C] shadow-[0_0_30px_rgba(225,48,108,0.15)]' : 'border-white/10'}`}
            >
              {pkg.badge && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-[#833AB4] to-[#FD1D1D] text-white font-bold font-mono text-xs px-4 py-1 rounded-full uppercase tracking-wider">
                  {pkg.badge}
                </div>
              )}
              
              <p className="text-[#E1306C] font-mono text-sm font-semibold mb-2">{pkg.platform}</p>
              <h3 className="text-2xl font-syne font-bold text-white mb-4">{pkg.title}</h3>
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-mono font-bold text-white">{pkg.price}</span>
                <span className="text-[var(--text-secondary)] font-mono text-sm">one-time</span>
              </div>
              
              <p className="text-[var(--text-secondary)] font-nunito text-sm pb-4 border-b border-white/5 mb-4">{pkg.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {addons.map((addon, idx) => (
            <div key={idx} className="bg-[var(--bg-secondary)] border border-white/5 rounded-xl p-4 flex justify-between items-center">
              <span className="font-syne font-semibold text-white">{addon.name}</span>
              <span className="font-mono text-[var(--accent-green)] text-sm font-bold">{addon.price}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#E1306C]/10 border border-[#E1306C]/20 p-6 rounded-2xl text-center max-w-4xl mx-auto">
          <p className="text-[#F0F4FF] font-nunito text-sm leading-relaxed">
            Best results on accounts with 1,000+ followers and 3+ posts/week. All automation uses Meta's official Graph API only — no grey-area tools, no account ban risk.
          </p>
        </div>

      </div>
    </section>
  );
}
