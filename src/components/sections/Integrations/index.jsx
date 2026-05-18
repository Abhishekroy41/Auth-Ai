import React from 'react';
import { 
  Database, CreditCard, Heart, FileText, Table, List, 
  Users, Calendar, Megaphone, Workflow, MessageSquare, 
  MessageCircle, Camera, Search, Cpu, Zap 
} from 'lucide-react';

export default function Integrations() {
  const tools = [
    { name: "Zoho CRM", icon: <Database size={24} />, color: "text-red-500" },
    { name: "Razorpay", icon: <CreditCard size={24} />, color: "text-blue-500" },
    { name: "Lovable", icon: <Heart size={24} />, color: "text-pink-500" },
    { name: "Notion", icon: <FileText size={24} />, color: "text-gray-300" },
    { name: "Sheets", icon: <Table size={24} />, color: "text-green-500" },
    { name: "Airtable", icon: <List size={24} />, color: "text-yellow-500" },
    { name: "HubSpot", icon: <Users size={24} />, color: "text-orange-500" },
    { name: "Calendly", icon: <Calendar size={24} />, color: "text-blue-400" },
    { name: "Meta Ads", icon: <Megaphone size={24} />, color: "text-blue-600" },
    { name: "n8n", icon: <Workflow size={24} />, color: "text-orange-600" },
    { name: "Zapier", icon: <Zap size={24} />, color: "text-orange-400" },
    { name: "Make", icon: <Cpu size={24} />, color: "text-purple-500" },
    { name: "Slack", icon: <MessageSquare size={24} />, color: "text-purple-400" },
    { name: "WhatsApp", icon: <MessageCircle size={24} />, color: "text-green-400" },
    { name: "Instagram", icon: <Camera size={24} />, color: "text-pink-600" },
    { name: "Google", icon: <Search size={24} />, color: "text-blue-300" }
  ];

  // Duplicate tools array to create seamless loop
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section className="py-24 relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background stars/particles effect placeholder to match the image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] font-mono text-xs font-bold uppercase tracking-widest mb-6 border border-[var(--accent-blue)]/20">
          Integrations
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-6">
          Works With Your Favourite Tools
        </h2>
        <p className="text-lg text-[var(--text-secondary)] font-nunito max-w-2xl mx-auto">
          Seamlessly connects with 15+ platforms · Powered by n8n automation · No coding required
        </p>
      </div>

      {/* Marquee Animation Container */}
      <div className="relative w-full flex overflow-hidden mask-edges py-8">
        <div className="flex animate-marquee whitespace-nowrap gap-6 items-center">
          {duplicatedTools.map((tool, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center justify-center min-w-[120px] h-28 glass-card border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className={`mb-3 p-3 rounded-xl bg-black/30 shadow-inner ${tool.color}`}>
                {tool.icon}
              </div>
              <span className="text-sm font-nunito font-semibold text-white/80">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
