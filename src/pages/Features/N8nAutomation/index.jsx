import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Database, MessageSquare, Bot, Clock, Building2, Stethoscope, Dumbbell, GraduationCap, CircleDollarSign, Gem } from 'lucide-react';

import n8nWorkflowImg from './Images/finance_tracker_execution.png';

export default function N8nAutomationFeature() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const liveBots = [
    {
      name: "Maa Tara Dream City",
      type: "WhatsApp AI CRM Bot",
      industry: "Real Estate",
      icon: <Building2 size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "TanishqBot",
      type: "WhatsApp Assistant",
      industry: "Jewellery",
      icon: <Gem size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "School Assist",
      type: "Education AI",
      industry: "Education",
      icon: <GraduationCap size={24} className="text-[var(--accent-green)]" />,
      status: "Working"
    },
    {
      name: "Finance Tracker Pro",
      type: "Omni-Agent",
      industry: "Finance",
      icon: <CircleDollarSign size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "Doctor's Appointment",
      type: "Dental & Med Assist",
      industry: "Healthcare",
      icon: <Stethoscope size={24} className="text-[var(--accent-green)]" />,
      status: "Demo"
    },
    {
      name: "Gym Assist",
      type: "Fitness Bot",
      industry: "Fitness",
      icon: <Dumbbell size={24} className="text-[var(--accent-green)]" />,
      status: "Working"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[var(--glow-green)]">
              <Zap size={48} className="text-[var(--accent-green)]" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-syne font-extrabold text-white leading-tight">
              n8n Automation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)]">AI Agents</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] font-nunito leading-relaxed">
              Make it simple and easy to chat. No more need for a human to manually reply. Our AI responds 24x7, instantly answering customer queries and logging data directly to your database.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <Clock className="text-[var(--accent-green)]" size={24} />
                <span className="text-white font-bold font-syne">24/7 AI Responses</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <Database className="text-[var(--accent-green)]" size={24} />
                <span className="text-white font-bold font-syne">Google Sheets Backend</span>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Link to="/pricing" className="bg-[var(--accent-green)] text-black font-bold px-8 py-3.5 rounded-full hover:shadow-[var(--glow-green)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
                Start Automating <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="/assets/images/features/ai_chatbot.png" 
              alt="AI Chatbot Interface on Mobile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <div className="inline-flex items-center gap-2 bg-[var(--accent-green)] text-black px-3 py-1 rounded-full font-bold text-sm mb-3 w-max">
                <Bot size={16} /> Live AI Demo
              </div>
              <h3 className="text-2xl font-syne font-bold text-white">Seamless WhatsApp Integration</h3>
              <p className="text-gray-300 font-nunito mt-1">Customers chat naturally on WhatsApp while AI handles the logic.</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Live Clients Section */}
      <div className="bg-black/30 border-y border-white/5 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-blue)] opacity-10 blur-[120px] pointer-events-none rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-6">Our Live AI Assistants</h2>
            <p className="text-xl text-[var(--text-secondary)] font-nunito max-w-3xl mx-auto">
              We've built and deployed custom n8n workflows for multiple industries, completely transforming how they handle customer support and lead generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveBots.map((bot, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center border border-white/10 group-hover:border-[var(--accent-green)] transition-colors">
                    {bot.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--accent-green)] text-[var(--accent-green)] bg-[var(--accent-green)]/10">
                    {bot.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-syne font-bold text-white mb-2">{bot.name}</h3>
                <p className="text-[var(--text-secondary)] font-nunito mb-4">{bot.type}</p>
                
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400">Industry:</span>
                  <span className="text-sm font-bold text-white">{bot.industry}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Architecture / How it works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[400px]"
          >
            <img 
              src={n8nWorkflowImg} 
              alt="n8n Visual Workflow Automation" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <h2 className="text-4xl lg:text-5xl font-syne font-bold text-white leading-tight">
              Powered by n8n & Google Sheets
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] font-nunito leading-relaxed mb-4">
              Our architecture is built for extreme flexibility and zero licensing bloat. We use n8n as the powerful brain connecting your users directly to your custom databases.
            </p>

            <ul className="flex flex-col gap-5">
              <li className="flex gap-4 items-start">
                <div className="mt-1 w-8 h-8 rounded-full bg-[var(--accent-green)]/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={16} className="text-[var(--accent-green)]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl font-syne">1. WhatsApp Front-End</h4>
                  <p className="text-[var(--text-secondary)] mt-1">Users message your official WhatsApp Business number naturally. No apps to download.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 w-8 h-8 rounded-full bg-[var(--accent-blue)]/20 flex items-center justify-center flex-shrink-0">
                  <Zap size={16} className="text-[var(--accent-blue)]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl font-syne">2. n8n & AI Brain</h4>
                  <p className="text-[var(--text-secondary)] mt-1">n8n routes the message to custom AI agents that understand context, intent, and generate human-like responses.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Database size={16} className="text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl font-syne">3. Google Sheets Database</h4>
                  <p className="text-[var(--text-secondary)] mt-1">Leads, appointments, and data are instantly synced to your Google Sheets. Easy to manage, zero database costs.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
