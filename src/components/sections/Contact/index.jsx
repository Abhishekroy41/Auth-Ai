import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    city: '',
    whatsappNumber: '',
    product: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Professional approach - simple greeting message
    const text = `Hi, I'd like to book a free demo and learn more about Auth AI.`;
    const url = `https://wa.me/918877221407?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-green)]/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-syne text-white mb-6"
          >
            Ready to Stop Missing Leads?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[var(--text-secondary)] font-nunito"
          >
            Get a free 30-minute demo. We'll show you exactly what your bot would look like — before you pay a single rupee.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl border-[var(--accent-green)]/20 shadow-[var(--glow-green)] max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--text-secondary)] font-nunito text-sm mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-green)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[var(--text-secondary)] font-nunito text-sm mb-2">Business Name</label>
                <input 
                  type="text" 
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-green)] transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[var(--text-secondary)] font-nunito text-sm mb-2">City</label>
                <input 
                  type="text" 
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-green)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[var(--text-secondary)] font-nunito text-sm mb-2">WhatsApp Number</label>
                <input 
                  type="tel" 
                  name="whatsappNumber"
                  required
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-green)] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[var(--text-secondary)] font-nunito text-sm mb-2">Which product are you interested in?</label>
              <select 
                name="product"
                required
                value={formData.product}
                onChange={handleChange}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--accent-green)] transition-colors appearance-none"
              >
                <option value="" disabled>Select an option</option>
                <option value="WhatsApp AI Bot">WhatsApp AI Bot</option>
                <option value="Instagram Automation">Instagram Automation</option>
                <option value="WhatsApp CRM">WhatsApp CRM</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full bg-[var(--accent-green)] text-black font-bold font-syne text-lg py-4 rounded-xl hover:shadow-[var(--glow-green)] hover:scale-[1.02] transition-all"
            >
              Book My Free Demo
            </button>
          </form>

          <div className="mt-12 text-center space-y-4">
            <a 
              href="https://wa.me/918877221407" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full transition-colors font-nunito"
            >
              <span className="text-[var(--accent-wa)]">WhatsApp us directly</span>
            </a>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[var(--text-secondary)] font-mono text-sm pt-4">
              <a href="https://authai.space" className="hover:text-white transition-colors">🌐 authai.space</a>
              <span className="hidden sm:inline">•</span>
              <span>📍 Dhanbad, Jharkhand</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
