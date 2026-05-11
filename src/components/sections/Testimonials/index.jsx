import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Our gym gets enquiries mostly at night when people finish work. We used to miss them all. Now, the Auth AI bot replies instantly and books them for a free trial the next morning. Our conversions have doubled.",
      name: "Rahul Verma",
      role: "Owner, FitZone Gym",
      location: "Dhanbad",
      avatar: "RV"
    },
    {
      quote: "During admission season, it was impossible to reply to hundreds of WhatsApp messages manually. The bot now sends the course brochure, collects student details, and organizes everything in the CRM.",
      name: "Priya Sharma",
      role: "Director, Excellence Coaching",
      location: "Ranchi",
      avatar: "PS"
    },
    {
      quote: "The Instagram automation is magic. We post a reel, tell people to comment 'BOOK', and the bot DMs them the available slots. We literally make money while we are busy with clients.",
      name: "Neha Gupta",
      role: "Founder, Glow Salon",
      location: "Dhanbad",
      avatar: "NG"
    }
  ];

  return (
    <section className="py-24 bg-[var(--bg-secondary)] relative border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-syne text-white mb-4"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 text-white/5" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[var(--accent-green)] text-xl">★</span>
                ))}
              </div>
              
              <p className="text-[var(--text-primary)] font-nunito text-lg italic mb-8 relative z-10">
                "{testi.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-green)] to-[var(--accent-blue)] flex items-center justify-center text-black font-bold font-syne text-lg">
                  {testi.avatar}
                </div>
                <div>
                  <h4 className="font-syne font-bold text-white">{testi.name}</h4>
                  <p className="font-nunito text-sm text-[var(--text-secondary)]">{testi.role} • {testi.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
