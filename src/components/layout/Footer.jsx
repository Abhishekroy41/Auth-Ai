import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-card)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-3 h-3 rounded-full bg-[var(--accent-green)] shadow-[var(--glow-green)]"></div>
              <span className="font-syne text-2xl font-bold tracking-wide text-white">Auth AI</span>
            </div>
            <p className="text-[var(--text-secondary)] font-nunito">
              Your Business. Our AI. Zero Limits.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-[var(--text-secondary)] font-nunito text-sm">
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Auth AI</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <p className="text-[var(--text-muted)] font-mono text-sm">
              Built in Dhanbad for India 🇮🇳 | 2026
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border-card)] pt-8 text-center">
          <p className="text-[var(--text-muted)] font-mono text-xs opacity-50 uppercase tracking-widest">
            Confidential Internal Pricing — Do not share externally
          </p>
        </div>
      </div>
    </footer>
  );
}
