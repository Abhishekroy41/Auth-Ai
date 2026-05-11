import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-[var(--bg-secondary)]/80 backdrop-blur-md border-b border-[var(--border-card)] py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[var(--accent-green)] shadow-[var(--glow-green)] animate-pulse"></div>
            <a href="#" className="font-syne text-2xl font-bold tracking-wide text-white">
              Auth AI
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 font-nunito text-[var(--text-secondary)]">
              <a href="#products" className="hover:text-white transition-colors">Products</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#why-us" className="hover:text-white transition-colors">Why Auth AI</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
            
            <a 
              href="#contact" 
              className="bg-[var(--accent-green)] text-black font-semibold px-6 py-2.5 rounded-full hover:shadow-[var(--glow-green)] transition-all duration-300 hover:scale-105"
            >
              Get a Free Demo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg-secondary)] border-b border-[var(--border-card)] backdrop-blur-lg">
          <div className="px-4 py-6 flex flex-col gap-4 text-center">
            <a href="#products" className="text-[var(--text-secondary)] hover:text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
            <a href="#pricing" className="text-[var(--text-secondary)] hover:text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
            <a href="#why-us" className="text-[var(--text-secondary)] hover:text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Why Auth AI</a>
            <a href="#contact" className="text-[var(--text-secondary)] hover:text-white text-lg py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a 
              href="#contact" 
              className="mt-4 bg-[var(--accent-green)] text-black font-semibold px-6 py-3 rounded-full hover:shadow-[var(--glow-green)] transition-all mx-auto w-full max-w-xs"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
