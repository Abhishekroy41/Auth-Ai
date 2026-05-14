import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Database, MessageSquare, Bot, Clock, Building2, Film, Shirt, Sparkles, Flame, MapPin, User, Briefcase, Camera } from 'lucide-react';

import n8nWorkflowImg from './Images/finance_tracker_execution.png';
import aiFinVideo from './videos/ai_fin_new.mp4';
import LiveProjects from '../../../components/sections/LiveProjects';

export default function N8nAutomationFeature() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-extrabold text-white leading-tight">
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
            <video
              src={aiFinVideo}
              autoPlay
              loop
              muted
              playsInline
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
      <LiveProjects />

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

      {/* Instagram Automation Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 text-white px-4 py-2 rounded-full font-bold w-max shadow-[0_0_15px_rgba(236,72,153,0.3)]">
              <Camera size={18} className="text-pink-500" /> Instagram Automation
            </div>

            <h2 className="text-4xl lg:text-5xl font-syne font-bold text-white leading-tight">
              Turn Followers into <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Customers</span>
            </h2>

            <p className="text-lg text-[var(--text-secondary)] font-nunito leading-relaxed mb-4">
              Never miss a lead on Instagram again. Our automation instantly replies to DMs and comments, capturing details and seamlessly adding them to your CRM while you focus on creating content.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                "Auto-reply to Story Mentions & Reactions",
                "Trigger DMs from specific keywords in Comments",
                "Collect phone numbers and emails inside Instagram",
                "Instant syncing to Google Sheets & n8n"
              ].map((benefit, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                  <Zap size={20} className="text-pink-500 flex-shrink-0" />
                  <span className="text-white font-nunito font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] rounded-3xl glass-card border border-white/10 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 shadow-2xl flex items-center justify-center p-8"
          >
            {/* Visual representation / Mockup */}
            <div className="w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden relative">
              <div className="bg-zinc-900 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                    <div className="w-full h-full bg-black rounded-full border border-black"></div>
                  </div>
                  <span className="text-white font-bold text-sm">@yourbrand</span>
                </div>
                <Camera size={20} className="text-gray-400" />
              </div>
              <div className="p-4 space-y-4 h-[300px] bg-[#000]">
                {/* Comment Mock */}
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex-shrink-0 mt-1"></div>
                  <div>
                    <p className="text-sm text-white font-bold">@user <span className="font-normal text-gray-300">How much is this?</span></p>
                    <p className="text-xs text-gray-500 mt-1">1m</p>
                  </div>
                </div>
                {/* Auto Reply Mock */}
                <div className="flex gap-3 ml-8">
                  <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1"><Bot size={12} className="text-pink-500" /></div>
                  <div>
                    <p className="text-sm text-white font-bold">@yourbrand <span className="font-normal text-gray-300">Hey @user! Just sent you a DM with all the details and pricing. 🚀</span></p>
                    <p className="text-xs text-gray-500 mt-1">Just now</p>
                  </div>
                </div>

                <div className="border-t border-white/10 my-4 pt-4 relative">
                  <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-black px-2 text-[10px] text-gray-500 uppercase tracking-widest">Direct Message</span>
                </div>

                {/* DM Mock */}
                <div className="flex flex-col gap-2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl rounded-tr-sm p-3 max-w-[85%] self-end">
                    <p className="text-sm text-white">Hi there! As requested, here is the pricing link: auth.ai/pricing. Let me know if you want to book a call!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slot for attaching an actual picture later */}
            {/* To use an actual image, replace the div above with: 
                <img src={yourImageImport} alt="Instagram Automation" className="w-full h-full object-cover" /> 
            */}
          </motion.div>
        </div>
      </div>

    </div>
  );
}
