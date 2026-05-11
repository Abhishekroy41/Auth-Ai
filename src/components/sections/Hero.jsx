import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function Hero() {
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { step: 1, delay: 1000 }, // User: Hi
      { step: 2, delay: 2500 }, // Typing...
      { step: 3, delay: 4000 }, // Bot: Hey!
      { step: 4, delay: 5500 }, // User: Yes please
      { step: 5, delay: 7000 }, // Typing...
      { step: 6, delay: 8500 }, // Bot: Great!
    ];

    const timeouts = sequence.map(({ step, delay }) => 
      setTimeout(() => setChatStep(step), delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold font-syne leading-[1.1] mb-6">
              Your Business <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-secondary)]">Never Sleeps.</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-wa)]">Neither Does Our AI.</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] font-nunito mb-10 max-w-xl leading-relaxed">
              WhatsApp AI Bots. Instagram Automation. WhatsApp CRM. <br className="hidden sm:block" />
              Done for you — not by you. Built for Indian businesses. <br />
              <strong className="text-[var(--text-primary)] font-semibold">Zero Meta markup.</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-[var(--accent-green)] text-black font-bold font-nunito text-lg hover-glow-green hover:scale-105 transition-all"
              >
                Start with a Free Demo
              </a>
              <a 
                href="#pricing"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full border border-white/20 text-white font-bold font-nunito text-lg hover:bg-white/5 transition-all"
              >
                See Pricing
              </a>
            </div>
          </motion.div>

          {/* Right Column: Chat Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-4 sm:p-6 rounded-3xl border-[var(--border-card)] relative overflow-hidden">
              {/* WhatsApp Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-green)] flex items-center justify-center text-black">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-syne font-bold text-white">Auth AI Bot</h3>
                  <p className="text-xs text-[var(--accent-green)] font-mono">● Online</p>
                </div>
              </div>

              {/* Chat Area */}
              <div className="space-y-4 min-h-[300px] flex flex-col font-nunito text-sm sm:text-base">
                
                {/* User Msg 1 */}
                {chatStep >= 1 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-end bg-[var(--bg-secondary)] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] border border-white/5 shadow-lg">
                    Hi, I want to know about your gym membership
                  </motion.div>
                )}

                {/* Bot Typing 1 */}
                {chatStep === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="self-start bg-[#1F2C34] text-[var(--text-secondary)] px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </motion.div>
                )}

                {/* Bot Msg 1 */}
                {chatStep >= 3 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-start bg-[#1F2C34] text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-lg border border-[var(--accent-green)]/20 relative">
                    Hey! 👋 Welcome to FitZone Gym. I'm your AI assistant. We have 3 plans starting at ₹799/month. Want me to book a FREE trial for you today?
                  </motion.div>
                )}

                {/* User Msg 2 */}
                {chatStep >= 4 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-end bg-[var(--bg-secondary)] text-white px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%] border border-white/5 shadow-lg mt-4">
                    Yes please!
                  </motion.div>
                )}

                {/* Bot Typing 2 */}
                {chatStep === 5 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="self-start bg-[#1F2C34] text-[var(--text-secondary)] px-4 py-3 rounded-2xl rounded-tl-sm max-w-[80%] flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </motion.div>
                )}

                {/* Bot Msg 2 */}
                {chatStep >= 6 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="self-start bg-[#1F2C34] text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] shadow-lg border border-[var(--accent-green)]/20 relative">
                    Great! Just share your name and preferred time 🗓️
                  </motion.div>
                )}

              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: chatStep >= 6 ? 1 : 0 }}
              className="text-center text-[var(--text-muted)] font-mono text-sm mt-6"
            >
              This bot replied in 3 seconds. It works 24/7. You didn't have to do anything.
            </motion.p>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 pt-10 border-t border-white/5"
        >
          <p className="text-center text-[var(--text-secondary)] font-mono text-sm tracking-wider uppercase mb-6">
            Trusted by gyms · clinics · coaching institutes · salons · real estate agents · local retailers across India
          </p>
        </motion.div>

      </div>
    </section>
  );
}
