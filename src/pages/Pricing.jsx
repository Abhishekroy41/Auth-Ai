import React from 'react';
import PricingBot from '../components/sections/PricingBot';
import PricingInsta from '../components/sections/PricingInsta';
import PricingCRM from '../components/sections/PricingCRM';
import ZeroMarkup from '../components/sections/ZeroMarkup';
import Comparison from '../components/sections/Comparison';
import FAQ from '../components/sections/FAQ';

export default function Pricing() {
  return (
    <main className="pt-24 pb-12">
      <div className="text-center py-16 px-4 relative z-10">
        <h1 className="text-5xl lg:text-6xl font-syne font-bold text-white mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-[var(--text-secondary)] font-nunito max-w-2xl mx-auto">
          Choose the plan that fits your scale. No hidden fees. Zero Meta markup. Upgrade or downgrade anytime.
        </p>
      </div>
      
      <div className="relative z-10">
        <PricingCRM />
        <PricingBot />
        <PricingInsta />
        <ZeroMarkup />
        <Comparison />
        <FAQ />
      </div>
    </main>
  );
}
