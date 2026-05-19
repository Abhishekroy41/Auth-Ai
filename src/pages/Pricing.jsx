import React from 'react';
import Products from '../components/sections/Products';
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
        <p className="text-xl text-[var(--text-secondary)] font-nunito max-w-2xl mx-auto mb-10">
          Choose the plan that fits your scale. No hidden fees. Zero Meta markup. Upgrade or downgrade anytime.
        </p>

        <div className="mt-8 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 flex flex-col items-center shadow-2xl backdrop-blur-md">
          <h2 className="text-3xl lg:text-4xl font-syne font-bold text-white mb-3">Ready to get Started?</h2>
          <p className="text-[var(--text-secondary)] font-nunito mb-8 text-lg">Create your account for free to try our product.</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="https://wa.me/918877221407?text=Hi%20Auth%20AI%2C%20I%20want%20to%20Book%20a%20Demo.%20Can%20you%20help%20me%20get%20started%3F" target="_blank" rel="noopener noreferrer" className="bg-[var(--accent-green)] text-black font-bold px-8 py-3.5 rounded-full hover:shadow-[var(--glow-green)] hover:-translate-y-0.5 transition-all text-center">
              Book a Demo
            </a>
            <a href="https://wa.me/918877221407?text=Hi%20Auth%20AI%2C%20I%20would%20like%20to%20Talk%20to%20Sales.%20Please%20get%20in%20touch%20with%20me." target="_blank" rel="noopener noreferrer" className="bg-white/10 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all border border-white/10 hover:-translate-y-0.5 text-center">
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative z-10">
        <Products />
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
