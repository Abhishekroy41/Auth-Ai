import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ZeroMarkup() {
  const [count, setCount] = useState(0);
  const target = 2640;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let current = 0;
    
    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-white mb-4"
          >
            Every competitor charges you extra. <br className="hidden md:block"/>
            <span className="text-[var(--accent-green)]">We don't.</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl overflow-hidden mb-12 border-white/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-6 font-syne font-bold text-[var(--text-secondary)]">Platform</th>
                  <th className="p-6 font-syne font-bold text-[var(--text-secondary)]">Marketing Message Cost</th>
                  <th className="p-6 font-syne font-bold text-[var(--text-secondary)] text-right">Markup</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 text-white font-nunito font-semibold">AiSensy</td>
                  <td className="p-6 text-[var(--text-primary)]">₹1.08/message</td>
                  <td className="p-6 text-red-400 text-right">+26% ❌</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 text-white font-nunito font-semibold">WATI</td>
                  <td className="p-6 text-[var(--text-primary)]">₹1.03/message</td>
                  <td className="p-6 text-red-400 text-right">+20% ❌</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 text-white font-nunito font-semibold">Gallabox</td>
                  <td className="p-6 text-[var(--text-primary)]">~₹0.99/message</td>
                  <td className="p-6 text-red-400 text-right">+15% ❌</td>
                </tr>
                <tr className="bg-[var(--accent-green)]/10">
                  <td className="p-6 text-white font-nunito font-bold text-lg">Auth AI</td>
                  <td className="p-6 text-[var(--accent-green)] font-bold text-lg">₹0.86/message</td>
                  <td className="p-6 text-[var(--accent-green)] font-bold text-lg text-right">ZERO ✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[var(--text-secondary)] font-nunito text-lg max-w-2xl mx-auto mb-6">
            For 1,000 marketing messages/month, you save ₹170–220 vs AiSensy. 
            Over 12 months, that's savings on messaging alone — before even counting your subscription savings.
          </p>
          <div className="inline-flex items-center gap-3 bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/30 px-8 py-4 rounded-2xl">
            <span className="font-syne font-bold text-[var(--text-primary)]">You Save Up To:</span>
            <span className="font-mono text-3xl font-bold text-[var(--accent-green)]">₹{count.toLocaleString('en-IN')}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
