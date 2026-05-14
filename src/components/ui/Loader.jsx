import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center">
      <div className="relative flex flex-col items-center">
        {/* Glow effect behind the logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--accent-green)] opacity-20 blur-[60px] rounded-full"></div>
        
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="relative z-10"
        >
          <span className="font-syne text-[56px] font-extrabold tracking-tight text-white" style={{ letterSpacing: '-0.05em' }}>
            {'{ Auth Ai }'}
          </span>
        </motion.div>

        {/* Industry standard Loading Bar */}
        <div className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[var(--accent-green)] shadow-[0_0_15px_var(--accent-green)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "circOut" }}
          />
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-[var(--text-secondary)] font-nunito text-sm font-medium tracking-widest uppercase"
        >
          Initializing Environment...
        </motion.p>
      </div>
    </div>
  );
}
