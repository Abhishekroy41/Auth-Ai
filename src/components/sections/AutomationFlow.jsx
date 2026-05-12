import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Bot, ClipboardList, Zap, CreditCard, BarChart3 } from 'lucide-react';

const nodes = [
  { id: 1, title: 'Lead Arrives', subtitle: 'WhatsApp Message', icon: Smartphone, color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/5', shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.15)]' },
  { id: 2, title: 'AI Chatbot', subtitle: 'Qualifies & Responds', icon: Bot, color: 'text-teal-400', border: 'border-teal-500/30', bg: 'bg-teal-500/5', shadow: 'shadow-[0_0_15px_rgba(20,184,166,0.15)]' },
  { id: 3, title: 'CRM Entry', subtitle: 'Auto-logged Pipeline', icon: ClipboardList, color: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-500/5', shadow: 'shadow-[0_0_15px_rgba(34,197,94,0.15)]' },
  { id: 4, title: 'Automation', subtitle: 'Follow-up Sequences', icon: Zap, color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/5', shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.15)]' },
  { id: 5, title: 'Payment', subtitle: 'Auto Payment Link Sent', icon: CreditCard, color: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-500/5', shadow: 'shadow-[0_0_15px_rgba(234,179,8,0.15)]' },
  { id: 6, title: 'Analytics', subtitle: 'Real-time Dashboard', icon: BarChart3, color: 'text-indigo-400', border: 'border-indigo-500/30', bg: 'bg-indigo-500/5', shadow: 'shadow-[0_0_15px_rgba(99,102,241,0.15)]' },
];

export default function AutomationFlow() {
  return (
    <section className="py-24 relative overflow-hidden border-t border-white/5 bg-transparent">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-[var(--accent-blue)] opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold text-white leading-tight mb-6 tracking-tight">
            How Auth AI<br />
            Automates <span className="text-[var(--accent-blue)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-green)]">Your Business</span>
          </h2>
          <p className="text-[var(--text-secondary)] font-nunito text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Every customer interaction flows through an intelligent system — from first contact to payment and beyond. Fully automated, fully trackable.
          </p>
        </div>

        {/* Automation Node Flow */}
        <div className="relative mb-32 hidden md:block">
          <div className="flex items-start justify-center w-full relative">
            
            {nodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <React.Fragment key={node.id}>
                  <div className="relative flex flex-col items-center z-10 group shrink-0 w-28">
                    
                    {/* Node Box */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex flex-col items-center justify-center border ${node.border} ${node.bg} ${node.shadow} backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-opacity-100 cursor-default mb-4`}
                    >
                      <Icon className={`w-7 h-7 lg:w-8 lg:h-8 ${node.color} mb-1 lg:mb-2`} />
                      <span className={`text-[9px] lg:text-[10px] font-bold uppercase tracking-wider ${node.color} text-center leading-tight px-1`}>
                        {node.title}
                      </span>
                    </motion.div>
                    
                    {/* Title & Subtitle */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-center w-full absolute top-[105px] lg:top-[115px]"
                    >
                      <p className="text-[10px] lg:text-[11px] text-[var(--text-secondary)] font-nunito opacity-70 leading-tight">
                        {node.subtitle}
                      </p>
                    </motion.div>
                  </div>

                  {/* Animated Connecting Line */}
                  {index < nodes.length - 1 && (
                    <div className="flex-1 mt-[40px] lg:mt-[48px] relative h-[2px] bg-white/5 overflow-hidden z-0 mx-[-4px]">
                      {/* Traveling glowing dot */}
                      <motion.div
                        initial={{ left: '-20%' }}
                        animate={{ left: '120%' }}
                        transition={{ 
                          duration: 1.5, 
                          ease: "linear", 
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                        className={`absolute top-0 w-16 h-[2px] shadow-[0_0_15px_currentColor]`}
                        style={{ 
                          background: `linear-gradient(to right, transparent, ${node.color.includes('blue') ? '#3b82f6' : node.color.includes('teal') ? '#14b8a6' : node.color.includes('green') ? '#22c55e' : node.color.includes('purple') ? '#a855f7' : node.color.includes('yellow') ? '#eab308' : '#6366f1'}, transparent)`,
                          color: node.color.includes('blue') ? '#3b82f6' : node.color.includes('teal') ? '#14b8a6' : node.color.includes('green') ? '#22c55e' : node.color.includes('purple') ? '#a855f7' : node.color.includes('yellow') ? '#eab308' : '#6366f1'
                        }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Mobile View of Flow (Vertical) */}
        <div className="md:hidden flex flex-col items-center gap-6 mb-24 relative">
          {/* Vertical connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/5 z-0" />
          
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div 
                key={node.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 w-full max-w-[280px] bg-[var(--bg-secondary)] border border-white/5 rounded-xl p-4 flex items-center gap-4 shadow-lg backdrop-blur-sm"
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center border ${node.border} ${node.bg} shrink-0`}>
                  <Icon className={`w-6 h-6 ${node.color}`} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${node.color} mb-1 font-syne`}>{node.title}</h4>
                  <p className="text-xs text-[var(--text-secondary)] font-nunito">{node.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-secondary)] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors"
          >
            <span className="text-[10px] font-bold tracking-widest text-[var(--accent-blue)] uppercase mb-4 block">Capture</span>
            <h3 className="text-xl font-bold text-white font-syne mb-3">Every Lead Captured</h3>
            <p className="text-[var(--text-secondary)] font-nunito text-sm leading-relaxed">
              No lead slips through. AI responds instantly to every message, day or night.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-secondary)] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors"
          >
            <span className="text-[10px] font-bold tracking-widest text-[var(--accent-green)] uppercase mb-4 block">Nurture</span>
            <h3 className="text-xl font-bold text-white font-syne mb-3">Automated Nurturing</h3>
            <p className="text-[var(--text-secondary)] font-nunito text-sm leading-relaxed">
              Follow-up sequences run automatically. No manual chasing. Consistent touchpoints.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[var(--bg-secondary)] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors"
          >
            <span className="text-[10px] font-bold tracking-widest text-green-400 uppercase mb-4 block">Convert</span>
            <h3 className="text-xl font-bold text-white font-syne mb-3">Higher Conversion Rate</h3>
            <p className="text-[var(--text-secondary)] font-nunito text-sm leading-relaxed">
              Faster response + smart follow-up = significantly higher conversion rates.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
