import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Film, Shirt, Sparkles, Flame, MapPin, User, Briefcase, Bot, Database } from 'lucide-react';
import aiFinVideo from '../../../pages/Features/N8nAutomation/videos/ai_fin_new.mp4';

export default function LiveProjects() {
  const liveBots = [
    {
      name: "Maa Tara Dream City",
      type: "AI Bot Demo",
      client: "Mr. Prakesh Kumar",
      location: "Dhanbad",
      industry: "Real Estate",
      icon: <Building2 size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "Vidshot",
      type: "Automation Solutions",
      client: "Mr. Rohit Kumar Singh",
      location: "Mumbai",
      industry: "Media Agency",
      icon: <Film size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "White House Drycleaning",
      type: "WhatsApp CRM & Bot",
      client: "Mr. Ramjee Rajak",
      location: "Dhanbad",
      industry: "Drycleaning",
      icon: <Shirt size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "Spark FX",
      type: "Engagement Bot",
      client: "Mr. Nischal",
      clientLabel: "Founder",
      location: "Jabalpur",
      industry: "Media / Effects",
      icon: <Sparkles size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "Tanaya Agency Fireworks",
      type: "Order & Support Bot",
      client: "Mr. Arshdeep Singh",
      clientLabel: "Founder",
      location: "Jabalpur",
      industry: "Fireworks",
      icon: <Flame size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    }
  ];

  return (
    <div className="bg-black/30 border-y border-white/5 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-blue)] opacity-10 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-6">Our Live Projects & Clients</h2>
          <p className="text-xl text-[var(--text-secondary)] font-nunito max-w-3xl mx-auto">
            We've built and deployed custom n8n workflows across multiple industries, completely transforming how they handle customer support, sales, and operations.
          </p>
        </div>

        {/* Featured Live Video Demo */}
        <div className="w-full max-w-5xl mx-auto mb-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[var(--accent-green)]/10 text-[var(--accent-green)] border border-[var(--accent-green)]/20 px-4 py-1.5 rounded-full font-bold text-sm mb-4">
              <Bot size={16} /> Live AI WhatsApp CRM
            </div>
            <h3 className="text-3xl md:text-5xl font-syne font-bold text-white mb-4">See It In Action</h3>
            <p className="text-lg text-[var(--text-secondary)] font-nunito max-w-2xl mx-auto">
              Watch how our AI smoothly handles customer queries, fetches data, and processes requests naturally via WhatsApp.
            </p>
          </div>
          
          {/* The Dashboard Frame */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] bg-[#0d0d12] border border-white/10 shadow-[0_0_50px_rgba(34,197,94,0.15)] overflow-hidden"
          >
            {/* Top Bar */}
            <div className="bg-[#1a1a24] border-b border-white/5 px-4 md:px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="h-4 w-px bg-white/10 hidden md:block"></div>
                <div className="hidden md:flex items-center gap-2 text-gray-400 text-sm font-medium">
                  <Database size={14} /> <span>n8n Workflow Execution</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 text-xs font-bold text-[var(--accent-green)] bg-[var(--accent-green)]/10 px-3 py-1.5 rounded-md border border-[var(--accent-green)]/20">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse"></div> Live Session
                </span>
              </div>
            </div>
            
            {/* Main Content containing Video */}
            <div className="p-2 md:p-6 bg-[#0a0a0a] flex justify-center">
              <div className="w-full rounded-xl overflow-hidden border border-white/5 shadow-2xl relative bg-black flex items-center justify-center">
                <video 
                  src={aiFinVideo} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  preload="none"
                  className="w-full h-auto max-h-[70vh] object-contain" 
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveBots.map((bot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center border border-white/10 group-hover:border-[var(--accent-green)] transition-colors shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                  {bot.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--accent-green)] text-[var(--accent-green)] bg-[var(--accent-green)]/10">
                  {bot.status}
                </span>
              </div>

              <h3 className="text-2xl font-syne font-bold text-white mb-2">{bot.name}</h3>
              <p className="text-[var(--text-secondary)] font-nunito mb-6 flex-grow">{bot.type}</p>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400 flex items-center gap-1.5"><User size={14} /> {bot.clientLabel || "Client Name"}:</span>
                  <span className="text-sm font-bold text-white">{bot.client}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400 flex items-center gap-1.5"><MapPin size={14} /> Location:</span>
                  <span className="text-sm font-bold text-white">{bot.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-400 flex items-center gap-1.5"><Briefcase size={14} /> Industry:</span>
                  <span className="text-sm font-bold text-white">{bot.industry}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
