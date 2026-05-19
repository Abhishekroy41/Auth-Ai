import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MessageCircle, Zap, Shield, HelpCircle, Phone, PlayCircle, BookOpen, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    {
      name: 'Features',
      dropdown: [
        { title: 'Enterprise CRM', desc: 'Custom CRM solutions', icon: <Layers size={18} />, link: '/features/crm' },
        { title: 'n8n Automation', desc: 'Automate complex workflows', icon: <Zap size={18} />, link: '/features/n8n' },
        { title: 'Landing Pages', desc: 'High-converting websites', icon: <PlayCircle size={18} />, link: '/features/websites' },
        { title: 'SEO Services', desc: 'Rank higher on search engines', icon: <MessageCircle size={18} />, link: '/features/seo' },
        { title: 'AI Workflows', desc: 'Intelligent process automation', icon: <Shield size={18} />, link: '/features/ai' },
        { title: 'Meta & Google Ads', desc: 'Campaign management', icon: <HelpCircle size={18} />, link: '/features/ads' },
      ]
    },
    {
      name: 'Industries',
      dropdown: [
        { title: 'Education', desc: 'Edtech, Coaches, Institutes', icon: <BookOpen size={18} /> },
        { title: 'E-commerce', desc: 'Brands & D2C', icon: <PlayCircle size={18} /> },
        { title: 'Healthcare', desc: 'Appointment Booking, Hospitals', icon: <Shield size={18} /> },
        { title: 'Real Estate', desc: 'Developers, Brokers', icon: <Layers size={18} /> },
      ]
    },
    {
      name: 'Resources',
      dropdown: [
        { title: 'Help Center', desc: "FAQ's, How-to's & more", icon: <HelpCircle size={18} /> },
        { title: 'Tutorials', desc: 'Learn how to use the platform', icon: <PlayCircle size={18} /> },
        { title: 'Contact Support', desc: 'Get in touch with us', icon: <Phone size={18} /> },
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-[var(--bg-secondary)]/80 backdrop-blur-md border-b border-[var(--border-card)] py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 relative z-10 group">
            <span className="font-syne text-[32px] font-extrabold tracking-tight text-white group-hover:text-gray-200 transition-colors" style={{ letterSpacing: '-0.05em' }}>
              {'{ Auth Ai }'}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8 font-nunito text-[var(--text-secondary)] font-medium">
              
              {navLinks.map((link, idx) => (
                <div 
                  key={idx}
                  className="relative group py-2"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-white transition-colors">
                    {link.name} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === idx ? 'rotate-180 text-[var(--accent-green)]' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === idx && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[450px] bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-2xl p-4 grid grid-cols-2 gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.8)] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white/10"
                      >
                        {link.dropdown.map((item, i) => (
                          <Link to={item.link || "#"} key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item">
                            <div className="mt-0.5 text-[var(--text-secondary)] group-hover/item:text-[var(--accent-green)] transition-colors">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-white font-syne font-bold text-sm mb-1 group-hover/item:text-[var(--accent-green)] transition-colors">{item.title}</div>
                              <div className="text-[var(--text-secondary)] text-xs leading-snug">{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link to="/pricing" className={`hover:text-white transition-colors ${location.pathname === '/pricing' ? 'text-white font-bold' : ''}`}>
                Pricing
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://wadesk.authai.space/login" target="_blank" rel="noopener noreferrer" className="text-white font-bold font-nunito hover:text-[var(--accent-green)] transition-colors">Login</a>
              <a 
                href="https://wa.me/918877221407?text=Hi%20Auth%20AI%2C%20I%20want%20to%20Book%20a%20Demo.%20Can%20you%20help%20me%20get%20started%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-bold font-nunito px-6 py-2.5 rounded-full hover:bg-[var(--accent-green)] hover:shadow-[var(--glow-green)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Demo
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-[var(--bg-primary)] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link to="/" className="text-white font-syne text-xl font-bold border-b border-white/10 pb-4">Home</Link>
              <Link to="/pricing" className="text-white font-syne text-xl font-bold border-b border-white/10 pb-4">Pricing</Link>
              
              {navLinks.map((link, idx) => (
                <div key={idx} className="border-b border-white/10 pb-4">
                  <button 
                    className="w-full flex items-center justify-between text-white font-syne text-xl font-bold mb-3"
                    onClick={() => setActiveMobileDropdown(activeMobileDropdown === idx ? null : idx)}
                  >
                    {link.name}
                    <ChevronDown size={20} className={`transition-transform duration-300 ${activeMobileDropdown === idx ? 'rotate-180 text-[var(--accent-green)]' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeMobileDropdown === idx && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-col gap-3 pl-4 overflow-hidden"
                      >
                        {link.dropdown.map((item, i) => (
                          <Link to={item.link || "#"} key={i} className="text-[var(--text-secondary)] font-nunito text-base flex items-center gap-2 py-1">
                            <span className="w-5 h-5 flex items-center justify-center text-[var(--accent-green)] scale-90">{item.icon}</span>
                            {item.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              <div className="mt-4 flex flex-col gap-4">
                <a href="https://wadesk.authai.space/login" target="_blank" rel="noopener noreferrer" className="text-center text-white font-bold py-3 rounded-full border border-white/20 hover:bg-white/5">Login</a>
                <a 
                  href="https://wa.me/918877221407?text=Hi%20Auth%20AI%2C%20I%20want%20to%20Book%20a%20Demo.%20Can%20you%20help%20me%20get%20started%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center bg-[var(--accent-green)] text-black font-bold py-3 rounded-full shadow-[var(--glow-green)]"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
