import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Layers } from 'lucide-react';

export default function AIWorkflowsFeature() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[var(--glow-green)]">
            <Layers size={48} className="text-[var(--accent-green)]" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-syne font-extrabold text-white leading-tight">
            AI Workflows
          </h1>
          
          <p className="text-lg lg:text-xl text-[var(--text-secondary)] font-nunito leading-relaxed max-w-xl">
            Leverage the power of artificial intelligence to automate customer support, generate content, and analyze data instantly.
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-bold text-white mb-4">Key Benefits:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-2 text-[var(--text-secondary)]"><Zap size={16} className="text-[var(--accent-green)]" /><span>Custom AI Chatbots</span></li>
              <li className="flex items-center gap-2 text-[var(--text-secondary)]"><Zap size={16} className="text-[var(--accent-green)]" /><span>Automated Content</span></li>
              <li className="flex items-center gap-2 text-[var(--text-secondary)]"><Zap size={16} className="text-[var(--accent-green)]" /><span>Data Extraction</span></li>
              <li className="flex items-center gap-2 text-[var(--text-secondary)]"><Zap size={16} className="text-[var(--accent-green)]" /><span>24/7 Virtual Assistants</span></li>
            </ul>
          </div>

          <div className="flex gap-4 pt-8">
            <Link to="/pricing" className="bg-[var(--accent-green)] text-black font-bold px-8 py-3.5 rounded-full hover:shadow-[var(--glow-green)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
              View Pricing <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] lg:h-[600px] rounded-3xl glass-card border border-white/10 overflow-hidden flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent-green)] opacity-20 blur-[80px] rounded-full"></div>
          
          <div className="relative z-10 text-center px-8">
            <h3 className="text-3xl font-syne font-bold text-white mb-2">Ready to Upgrade?</h3>
            <p className="text-[var(--text-secondary)]">Experience the power of AI Workflows today.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
