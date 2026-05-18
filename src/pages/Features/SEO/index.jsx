import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Layers, Search, BarChart, Globe, PenTool, TrendingUp, Target, Database, Activity } from 'lucide-react';
import seoDashboardImg from '../../../assets/seo-dashboard.png';

export default function SEOFeature() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Google Analytics 4 (GA4)",
      description: "Deep integration with GA4 for precise tracking of user journeys, conversion events, and traffic attribution models.",
      icon: <Activity className="text-[var(--accent-green)]" size={24} />
    },
    {
      title: "Google Tag Manager (GTM)",
      description: "Advanced GTM setups to deploy marketing tags, track button clicks, form submissions, and custom events without touching code.",
      icon: <Database className="text-[var(--accent-green)]" size={24} />
    },
    {
      title: "Comprehensive Keyword Strategy",
      description: "Identify high-converting, low-competition keywords that drive highly-targeted, ready-to-buy traffic to your landing pages.",
      icon: <Search className="text-[var(--accent-green)]" size={24} />
    },
    {
      title: "Technical SEO Audits",
      description: "We optimize site speed, mobile responsiveness, Core Web Vitals, and crawlability to ensure search engines love your architecture.",
      icon: <Zap className="text-[var(--accent-green)]" size={24} />
    },
    {
      title: "On-Page Optimization",
      description: "From meta tags and schema markup to internal linking, we optimize every element on your pages to align with Google's algorithms.",
      icon: <Layers className="text-[var(--accent-green)]" size={24} />
    },
    {
      title: "High-Quality Link Building",
      description: "Build domain authority safely with our white-hat outreach strategies, securing powerful backlinks from reputable publications.",
      icon: <Globe className="text-[var(--accent-green)]" size={24} />
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse"></span>
            <span className="text-sm font-bold text-white tracking-wider">ENTERPRISE SEO & ANALYTICS</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-syne font-extrabold text-white leading-tight">
            Data-Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-emerald-400">Growth Engine</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-[var(--text-secondary)] font-nunito leading-relaxed max-w-xl">
            We combine elite SEO strategies with advanced Google Analytics (GA4) and Google Tag Manager (GTM) tracking. See exactly where your traffic comes from and how it converts.
          </p>

          <div className="flex gap-4 pt-4">
            <Link to="/contact" className="bg-[var(--accent-green)] text-black font-bold px-8 py-4 rounded-full hover:shadow-[var(--glow-green)] hover:-translate-y-0.5 transition-all flex items-center gap-2 text-lg">
              Get Your Free Audit <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-4">
             <div>
                <h4 className="text-3xl font-bold text-white font-syne mb-1">300%</h4>
                <p className="text-sm text-[var(--text-secondary)]">Avg. Traffic Increase</p>
             </div>
             <div>
                <h4 className="text-3xl font-bold text-white font-syne mb-1">Top 3</h4>
                <p className="text-sm text-[var(--text-secondary)]">Google Rankings</p>
             </div>
             <div>
                <h4 className="text-3xl font-bold text-white font-syne mb-1">100%</h4>
                <p className="text-sm text-[var(--text-secondary)]">Data Accuracy</p>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center"
        >
          {/* Glowing background effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--accent-green)] opacity-20 blur-[100px] rounded-full"></div>
          
          {/* Realistic Dashboard Image with Floating Animation */}
          <motion.div
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
             <img 
               src={seoDashboardImg} 
               alt="SEO Analytics Dashboard" 
               className="w-full h-full object-cover"
             />
             
             {/* Floating UI Element overlay */}
             <motion.div 
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 1, duration: 0.5 }}
               className="absolute bottom-6 right-6 z-20 glass-card bg-black/70 backdrop-blur-md border border-[var(--accent-green)]/30 p-4 rounded-xl shadow-lg flex items-center gap-4"
             >
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                   <Target className="text-green-400" size={24} />
                </div>
                <div>
                   <p className="text-sm text-gray-300">Conversion Rate</p>
                   <p className="text-xl font-bold text-white font-syne">+14.2% <span className="text-green-400 text-sm">↑</span></p>
                </div>
             </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-6">Complete SEO & Tracking Arsenal</h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just drive traffic; we track every interaction. From complex GTM tags to robust technical SEO audits, we build an analytics-backed growth machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-[var(--accent-green)]/30 transition-all hover:-translate-y-2 group bg-white/[0.02]"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_rgba(var(--accent-green-rgb),0.3)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden border border-[var(--accent-green)]/20 shadow-[0_0_50px_rgba(var(--accent-green-rgb),0.1)]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-green)]/10 via-transparent to-[var(--accent-green)]/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--accent-green)] to-transparent"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-6">Stop Guessing. Start Tracking.</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
            Unlock the exact keywords, traffic sources, and conversion paths your competitors are using. Let's build your data-driven SEO strategy.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-black font-bold px-10 py-5 rounded-full hover:bg-[var(--accent-green)] transition-all text-lg group">
            Schedule a Strategy Call 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
