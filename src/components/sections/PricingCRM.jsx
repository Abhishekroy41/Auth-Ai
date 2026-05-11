import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function PricingCRM() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [showAddons, setShowAddons] = useState(false);

  const plans = [
    {
      name: "STARTER",
      priceMonthly: 999,
      priceAnnual: 9990,
      features: [
        "1 WhatsApp number",
        "3 agents",
        "2,000 contacts",
        "Basic AI chatbot",
        "Basic broadcasts",
        "3 automation flows",
        "Email support 48hr",
        "14-day free trial"
      ],
      popular: false
    },
    {
      name: "GROWTH",
      priceMonthly: 1999,
      priceAnnual: 19990,
      features: [
        "2 WhatsApp numbers",
        "10 agents",
        "10,000 contacts",
        "Advanced AI flow builder",
        "Drip campaigns",
        "10 automation flows",
        "Full CRM pipeline",
        "WhatsApp support 24hr",
        "14-day free trial"
      ],
      popular: true
    },
    {
      name: "SCALE",
      priceMonthly: 3499,
      priceAnnual: 34990,
      features: [
        "5 WhatsApp numbers",
        "Unlimited agents",
        "Unlimited contacts",
        "Custom-trained AI",
        "Unlimited broadcasts + scheduling",
        "Unlimited workflows",
        "Advanced analytics + export",
        "API access",
        "Priority support 4hr",
        "14-day free trial"
      ],
      popular: false
    }
  ];

  const addons = [
    { name: "Extra WhatsApp Number", price: "₹799/mo" },
    { name: "Extra 10 Agents", price: "₹799/mo" },
    { name: "AI Calling Agent (Voice Bot)", price: "₹2,499/mo" },
    { name: "Custom CRM Integration", price: "₹7,999 one-time" },
    { name: "Dedicated Server", price: "₹1,999/mo" },
    { name: "White-Label License", price: "₹3,999/mo (Scale only)" }
  ];

  return (
    <section id="pricing-crm" className="py-24 bg-[var(--bg-secondary)] relative border-t border-[var(--border-card)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-8">WhatsApp CRM — Monthly Plans</h2>
          
          <div className="inline-flex items-center bg-black/40 p-1 rounded-full border border-white/10">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full font-nunito font-semibold text-sm transition-all ${!isAnnual ? 'bg-[var(--accent-blue)] text-black shadow-[var(--glow-blue)]' : 'text-[var(--text-muted)] hover:text-white'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full font-nunito font-semibold text-sm transition-all flex items-center gap-2 ${isAnnual ? 'bg-[var(--accent-blue)] text-black shadow-[var(--glow-blue)]' : 'text-[var(--text-muted)] hover:text-white'}`}
            >
              Annual <span className={isAnnual ? 'bg-black/20 px-2 py-0.5 rounded text-xs' : 'bg-[var(--accent-green)]/20 text-[var(--accent-green)] px-2 py-0.5 rounded text-xs'}>Save 2 Months</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card p-8 rounded-3xl relative flex flex-col ${plan.popular ? 'border-[var(--accent-blue)] shadow-[var(--glow-blue)] lg:-translate-y-4' : 'border-white/10'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent-blue)] text-black font-bold font-mono text-xs px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-syne font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-mono font-bold text-white">₹{isAnnual ? plan.priceAnnual.toLocaleString('en-IN') : plan.priceMonthly.toLocaleString('en-IN')}</span>
                <span className="text-[var(--text-secondary)] font-mono text-sm">{isAnnual ? '/year' : '/month'}</span>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex gap-3 items-start">
                    <Check size={18} className="text-[var(--accent-blue)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--text-primary)] font-nunito text-sm">{feat}</span>
                  </div>
                ))}
              </div>
              
              <button className={`w-full py-3 rounded-xl font-bold font-nunito transition-all ${plan.popular ? 'bg-[var(--accent-blue)] text-black hover:shadow-[var(--glow-blue)]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                Start Free Trial
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="inline-block bg-[var(--accent-green)]/10 text-[var(--accent-green)] px-6 py-3 rounded-full font-bold font-nunito border border-[var(--accent-green)]/20">
            ZERO Meta API markup on all plans. Competitors (AiSensy, WATI) charge 20–26% extra per message.
          </p>
        </div>

        {/* Addons Collapsible */}
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={() => setShowAddons(!showAddons)}
            className="w-full flex items-center justify-between glass-card p-4 rounded-xl border-white/10 hover:border-white/20 transition-colors"
          >
            <span className="font-syne font-bold text-white">View CRM Add-Ons</span>
            {showAddons ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
          </button>
          
          <AnimatePresence>
            {showAddons && (
              <motion.div 
                key="addons-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {addons.map((addon, idx) => (
                    <div key={idx} className="bg-black/20 p-4 rounded-lg flex justify-between items-center border border-white/5">
                      <span className="font-nunito text-sm text-[var(--text-primary)]">{addon.name}</span>
                      <span className="font-mono text-sm font-bold text-[var(--text-secondary)]">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
