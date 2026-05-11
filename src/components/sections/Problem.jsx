import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, MessageSquareOff, UserX, BarChart2, DollarSign } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      icon: <Clock size={24} className="text-orange-500" />,
      text: "You get WhatsApp enquiries at 11 PM — and lose them by morning"
    },
    {
      icon: <UserX size={24} className="text-red-500" />,
      text: "Your receptionist misses calls while treating patients"
    },
    {
      icon: <MessageSquareOff size={24} className="text-orange-400" />,
      text: "100 Instagram comments on your reel — and you replied to none"
    },
    {
      icon: <BarChart2 size={24} className="text-red-400" />,
      text: "Your sales team can't track which lead was followed up and which wasn't"
    },
    {
      icon: <DollarSign size={24} className="text-orange-600" />,
      text: "You're paying AiSensy or WATI extra markup on every single WhatsApp message"
    }
  ];

  return (
    <section className="py-20 bg-[var(--bg-secondary)] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-4">Sound familiar?</h2>
          <div className="w-20 h-1 bg-red-500/50 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-4">
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 border-red-500/10 hover:border-red-500/30 transition-colors flex items-center gap-4"
            >
              <div className="flex-shrink-0 bg-red-500/10 p-3 rounded-full">
                {prob.icon}
              </div>
              <p className="text-lg font-nunito text-[var(--text-primary)]">
                {prob.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-syne font-bold text-gradient-green">
            Auth AI fixes all of this. Done for you, not by you.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
