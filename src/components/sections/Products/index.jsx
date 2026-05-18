import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MessageSquareHeart, LayoutGrid, CheckCircle } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: "whatsapp-bot",
      title: "WhatsApp AI Bot",
      subtitle: "Custom AI chatbot built for your WhatsApp — done for you",
      icon: <MessageCircle size={32} className="text-[var(--accent-wa)]" />,
      glowColor: "var(--glow-green)",
      features: [
        "Auto-replies to every enquiry in 3 seconds",
        "Books appointments without human involvement",
        "Sends follow-ups on Day 1, Day 3, Day 7 automatically",
        "Handles FAQs, lead capture, broadcasts",
        "Works 24/7 — weekends and holidays included",
        "Hindi, English, and regional language support",
        "ZERO Meta API markup — you pay Meta's official rate only"
      ],
      priceBadge: "From ₹3,000 one-time",
      cta: "See WhatsApp Bot Pricing →",
      link: "#pricing-bot"
    },
    {
      id: "instagram-automation",
      title: "Instagram & Facebook Automation",
      subtitle: "Comment-to-DM, AI reply bots, lead capture — fully managed",
      icon: <MessageSquareHeart size={32} className="text-[#E1306C]" />,
      glowColor: "0 0 30px rgba(225, 48, 108, 0.2)",
      features: [
        "Someone comments \"PRICE\" → they get an instant DM automatically",
        "Every DM gets an AI reply within seconds",
        "Story reply automation, reel comment automation",
        "Collects name, phone, requirement inside the conversation",
        "Follow-gate: new followers get a welcome DM with your offer",
        "Fully Meta-compliant — no account ban risk",
        "Works on both Instagram AND Facebook pages"
      ],
      priceBadge: "From ₹3,000 one-time",
      cta: "See Instagram Pricing →",
      link: "#pricing-insta"
    },
    {
      id: "whatsapp-crm",
      title: "WhatsApp CRM",
      subtitle: "Monthly subscription platform — your team's WhatsApp command centre",
      icon: <LayoutGrid size={32} className="text-[var(--accent-blue)]" />,
      glowColor: "var(--glow-blue)",
      features: [
        "Multiple agents share one WhatsApp number",
        "AI chatbot handles 60–70% of routine enquiries",
        "Broadcast to unlimited contacts in one click",
        "Full lead pipeline — track every enquiry to conversion",
        "Automated follow-up workflows — no lead ever gets lost",
        "Analytics dashboard with response time and conversion data",
        "ZERO markup on Meta API — competitors charge 20–26% extra"
      ],
      priceBadge: "From ₹2,499/month",
      cta: "See CRM Pricing →",
      link: "#pricing-crm"
    }
  ];

  return (
    <section id="products" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-white mb-4"
          >
            Three AI Products. One Local Team.
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card flex flex-col h-full rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              style={{ '--hover-glow': product.glowColor }}
            >
              <div className="p-8 flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  {product.icon}
                </div>
                
                <h3 className="text-2xl font-syne font-bold text-white mb-2">{product.title}</h3>
                <p className="text-[var(--text-secondary)] font-nunito mb-8 h-12">
                  {product.subtitle}
                </p>

                <div className="space-y-4 mb-8">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex gap-3 items-start">
                      <CheckCircle size={20} className="text-[var(--accent-green)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-primary)] font-nunito text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 pt-0 mt-auto bg-gradient-to-t from-black/40 to-transparent">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-mono text-sm font-semibold mb-6">
                  {product.priceBadge}
                </div>
                
                <a 
                  href={product.link}
                  className="block w-full text-center py-4 rounded-xl border border-white/10 text-white font-bold font-nunito hover:bg-white/5 transition-colors"
                >
                  {product.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
