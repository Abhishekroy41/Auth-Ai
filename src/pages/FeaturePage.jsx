import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Zap, PlayCircle, MessageCircle, Shield, HelpCircle } from 'lucide-react';

const featuresData = {
  crm: {
    title: 'Enterprise CRM',
    description: 'A powerful, custom CRM solution tailored for your business needs. Track leads, manage customer relationships, and scale your operations effortlessly.',
    icon: <Layers size={48} className="text-[var(--accent-green)]" />,
    benefits: ['Lead Tracking', 'Pipeline Management', 'Customer Analytics', 'Custom Integrations']
  },
  n8n: {
    title: 'n8n Automation',
    description: 'Automate complex workflows and connect all your apps without writing a single line of code. Save hours of manual work every week.',
    icon: <Zap size={48} className="text-[var(--accent-green)]" />,
    benefits: ['Visual Workflow Builder', '200+ Integrations', 'Custom Webhooks', 'Error Handling']
  },
  websites: {
    title: 'Landing Pages & Websites',
    description: 'High-converting, lightning-fast landing pages and full websites built with modern technologies to wow your visitors and capture leads.',
    icon: <PlayCircle size={48} className="text-[var(--accent-green)]" />,
    benefits: ['Responsive Design', 'Ultra Fast Loading', 'Conversion Optimized', 'Modern UI/UX']
  },
  seo: {
    title: 'SEO Services',
    description: 'Rank higher on Google and drive organic, high-intent traffic to your website with our comprehensive SEO strategies.',
    icon: <MessageCircle size={48} className="text-[var(--accent-green)]" />,
    benefits: ['Keyword Research', 'On-Page SEO', 'Technical Audits', 'Link Building']
  },
  ai: {
    title: 'AI Workflows',
    description: 'Leverage the power of artificial intelligence to automate customer support, generate content, and analyze data instantly.',
    icon: <Shield size={48} className="text-[var(--accent-green)]" />,
    benefits: ['Custom AI Chatbots', 'Automated Content', 'Data Extraction', '24/7 Virtual Assistants']
  },
  ads: {
    title: 'Meta & Google Ads',
    description: 'Data-driven ad campaigns that maximize your ROI. We manage everything from creative to targeting to get you the best leads.',
    icon: <HelpCircle size={48} className="text-[var(--accent-green)]" />,
    benefits: ['Targeted Campaigns', 'A/B Testing', 'ROI Tracking', 'Retargeting']
  }
};

export default function FeaturePage() {
  const { id } = useParams();
  const feature = featuresData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!feature) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32">
        <h1 className="text-4xl font-syne font-bold text-white mb-4">Feature Not Found</h1>
        <p className="text-[var(--text-secondary)] mb-8">The feature you are looking for doesn't exist or is still in development.</p>
        <Link to="/" className="text-[var(--accent-green)] hover:underline">Return to Home</Link>
      </div>
    );
  }

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
            {feature.icon}
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-syne font-extrabold text-white leading-tight">
            {feature.title}
          </h1>
          
          <p className="text-lg lg:text-xl text-[var(--text-secondary)] font-nunito leading-relaxed max-w-xl">
            {feature.description}
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-bold text-white mb-4">Key Benefits:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {feature.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <Zap size={16} className="text-[var(--accent-green)]" />
                  <span>{benefit}</span>
                </li>
              ))}
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
          {/* Decorative Elements for visual appeal */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent-green)] opacity-20 blur-[80px] rounded-full"></div>
          
          <div className="relative z-10 text-center px-8">
            <div className="inline-flex items-center justify-center p-6 bg-white/5 rounded-full border border-white/10 mb-6 backdrop-blur-md">
              {feature.icon}
            </div>
            <h3 className="text-3xl font-syne font-bold text-white mb-2">Ready to Upgrade?</h3>
            <p className="text-[var(--text-secondary)]">Experience the power of {feature.title} today.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
