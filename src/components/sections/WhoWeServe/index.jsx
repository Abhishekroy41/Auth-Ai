import React from 'react';
import { motion } from 'framer-motion';

export default function WhoWeServe() {
  const industries = [
    {
      icon: "🏋️",
      title: "Gyms & Fitness Centers",
      desc: "Enquiries come after hours — our bot books trial sessions while you sleep."
    },
    {
      icon: "🏥",
      title: "Clinics & Doctors",
      desc: "Receptionists miss calls — our bot handles appointment booking instantly."
    },
    {
      icon: "💇",
      title: "Salons & Spas",
      desc: "Clients want to know pricing — we auto-reply with menus and book slots."
    },
    {
      icon: "📚",
      title: "Coaching Institutes",
      desc: "Students ask about courses — we send brochures and capture lead info."
    },
    {
      icon: "🏠",
      title: "Real Estate Agents",
      desc: "Leads get cold quickly — our bot qualifies buyers and schedules site visits."
    },
    {
      icon: "🛍️",
      title: "Local Retail Shops",
      desc: "Too many DMs on Instagram — our bot replies to every comment automatically."
    }
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
            Built for Indian Businesses Like Yours
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent-green)] to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{ind.icon}</div>
              <h3 className="text-xl font-syne font-bold text-white mb-3">{ind.title}</h3>
              <p className="text-[var(--text-secondary)] font-nunito leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
