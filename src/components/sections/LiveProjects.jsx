import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Film, Shirt, Sparkles, Flame, MapPin, User, Briefcase } from 'lucide-react';

export default function LiveProjects() {
  const liveBots = [
    {
      name: "Maa Tara Dream City",
      type: "AI Bot Demo",
      client: "Prakesh Kumar",
      location: "Dhanbad",
      industry: "Real Estate",
      icon: <Building2 size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "Vidshot",
      type: "Automation Solutions",
      client: "Rohit Kumar Singh",
      location: "Mumbai",
      industry: "Media Agency",
      icon: <Film size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "White House Drycleaning",
      type: "WhatsApp CRM & Bot",
      client: "Ramjee Rajak",
      location: "Dhanbad",
      industry: "Drycleaning",
      icon: <Shirt size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "Spark FX",
      type: "Engagement Bot",
      client: "Nischal",
      clientLabel: "Founder",
      location: "Jabalpur",
      industry: "Media / Effects",
      icon: <Sparkles size={24} className="text-[var(--accent-green)]" />,
      status: "Live"
    },
    {
      name: "Tanaya Agency Fireworks",
      type: "Order & Support Bot",
      client: "Arshdeep Singh",
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
