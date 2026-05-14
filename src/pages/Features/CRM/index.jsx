import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Users, MessageSquare, Bot, BarChart, Shield, Zap, Workflow, CheckCircle2 } from 'lucide-react';

export default function CRMFeature() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Shared Team Inbox",
      desc: "Connect multiple agents to a single WhatsApp Business number. No more sharing phones. Reply to customers from anywhere.",
      icon: <Users size={24} className="text-[var(--accent-blue)]" />
    },
    {
      title: "Zero Meta Markup",
      desc: "Unlike competitors who charge 20-26% extra per message, we offer ZERO Meta API markup. You only pay for the software.",
      icon: <Shield size={24} className="text-[var(--accent-blue)]" />
    },
    {
      title: "Omnichannel Support",
      desc: "Manage WhatsApp, Instagram, Facebook Messenger, and Website Live Chat all from one unified dashboard.",
      icon: <MessageSquare size={24} className="text-[var(--accent-blue)]" />
    },
    {
      title: "AI Chatbot Integration",
      desc: "Seamlessly integrate n8n-powered AI agents that can handle basic queries, book appointments, and escalate complex issues to humans.",
      icon: <Bot size={24} className="text-[var(--accent-blue)]" />
    },
    {
      title: "Advanced Analytics",
      desc: "Track agent performance, resolution times, and customer satisfaction with detailed, exportable reports.",
      icon: <BarChart size={24} className="text-[var(--accent-blue)]" />
    },
    {
      title: "Automated Workflows",
      desc: "Set up auto-replies, business hours, SLA rules, and smart routing to ensure messages go to the right department.",
      icon: <Workflow size={24} className="text-[var(--accent-blue)]" />
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
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[var(--glow-blue)]">
              <Layers size={48} className="text-[var(--accent-blue)]" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-syne font-extrabold text-white leading-tight">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] to-purple-500">CRM Inbox</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] font-nunito leading-relaxed">
              A powerful, shared inbox for WhatsApp, Instagram, and Web. Scale your customer support with unlimited agents, AI integrations, and zero per-message markup.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <Users className="text-[var(--accent-blue)]" size={24} />
                <span className="text-white font-bold font-syne">Multi-Agent Access</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                <Zap className="text-[var(--accent-blue)]" size={24} />
                <span className="text-white font-bold font-syne">Instant Sync</span>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <Link to="/pricing" className="bg-[var(--accent-blue)] text-black font-bold px-8 py-3.5 rounded-full hover:shadow-[var(--glow-blue)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
                View CRM Plans <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl glass-card border border-white/10 overflow-hidden flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--accent-blue)] opacity-20 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 w-full max-w-md px-8">
              {/* Mock Chatwoot UI Card */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <MessageSquare size={20} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">WhatsApp Team Inbox</h4>
                      <p className="text-xs text-gray-400">3 Agents Online</p>
                    </div>
                  </div>
                  <span className="bg-[var(--accent-blue)]/20 text-[var(--accent-blue)] text-xs px-2 py-1 rounded font-bold">Live</span>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="h-4 w-24 bg-white/10 rounded mb-2"></div>
                        <div className="h-3 w-full bg-white/5 rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="bg-black/30 border-y border-white/5 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-blue)] opacity-5 blur-[150px] pointer-events-none rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-6">Built for Scale & Efficiency</h2>
            <p className="text-xl text-[var(--text-secondary)] font-nunito max-w-3xl mx-auto">
              Replace rigid platforms with a flexible, high-performance CRM tailored for businesses running modern WhatsApp and social campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-black/40 flex items-center justify-center border border-white/10 group-hover:border-[var(--accent-blue)] transition-colors mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {feat.icon}
                </div>
                
                <h3 className="text-2xl font-syne font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-[var(--text-secondary)] font-nunito leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CRM Pipeline / Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl lg:text-5xl font-syne font-bold text-white leading-tight">
              Manage Your Entire Customer Pipeline
            </h2>
            
            <p className="text-lg text-[var(--text-secondary)] font-nunito leading-relaxed mb-4">
              Stop letting leads slip through the cracks. Our CRM tools allow you to categorize, assign, and track every interaction from first contact to closed deal.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                "Custom Attributes & Tags for Lead Scoring",
                "Private Team Notes & Agent Mentions",
                "Canned Responses for Faster Replies",
                "Contact Import/Export & Unlimited Contacts",
                "Broadcast & Drip Campaign Management"
              ].map((benefit, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                  <CheckCircle2 size={20} className="text-[var(--accent-green)] flex-shrink-0" />
                  <span className="text-white font-nunito font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
               <Link to="/pricing" className="text-[var(--accent-blue)] font-bold hover:underline inline-flex items-center gap-1">
                 See full feature list <ArrowRight size={16} />
               </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl glass-card border border-white/10 overflow-hidden bg-gradient-to-br from-black to-[#0a0a0a] shadow-2xl"
          >
            {/* Visual representation of a pipeline */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center">
              <div className="flex gap-4 h-full">
                {/* Column 1 */}
                <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">New Leads</div>
                  <div className="bg-white/10 h-24 rounded-lg p-3 border-l-2 border-blue-400">
                     <div className="w-1/2 h-3 bg-white/20 rounded mb-2"></div>
                     <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                     <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                  </div>
                  <div className="bg-white/10 h-24 rounded-lg p-3 border-l-2 border-blue-400">
                     <div className="w-1/2 h-3 bg-white/20 rounded mb-2"></div>
                     <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                     <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                  </div>
                </div>
                {/* Column 2 */}
                <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">In Progress</div>
                  <div className="bg-white/10 h-24 rounded-lg p-3 border-l-2 border-yellow-400">
                     <div className="w-1/2 h-3 bg-white/20 rounded mb-2"></div>
                     <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                     <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                  </div>
                </div>
                {/* Column 3 */}
                <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Closed Won</div>
                  <div className="bg-white/10 h-24 rounded-lg p-3 border-l-2 border-green-400">
                     <div className="w-1/2 h-3 bg-white/20 rounded mb-2"></div>
                     <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                     <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                  </div>
                  <div className="bg-white/10 h-24 rounded-lg p-3 border-l-2 border-green-400">
                     <div className="w-1/2 h-3 bg-white/20 rounded mb-2"></div>
                     <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                     <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                  </div>
                  <div className="bg-white/10 h-24 rounded-lg p-3 border-l-2 border-green-400">
                     <div className="w-1/2 h-3 bg-white/20 rounded mb-2"></div>
                     <div className="w-full h-2 bg-white/10 rounded mb-1"></div>
                     <div className="w-3/4 h-2 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
