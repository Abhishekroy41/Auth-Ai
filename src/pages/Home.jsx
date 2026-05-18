import React from 'react';
import Hero from '../components/sections/Hero';
import Integrations from '../components/sections/Integrations';
import Problem from '../components/sections/Problem';
import PricingCRM from '../components/sections/PricingCRM';
import WhoWeServe from '../components/sections/WhoWeServe';
import WhyAuthAI from '../components/sections/WhyAuthAI';
import Roadmap from '../components/sections/Roadmap';
import AutomationFlow from '../components/sections/AutomationFlow';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';
import LiveProjects from '../components/sections/LiveProjects';

export default function Home() {
  return (
    <main>
      <Hero />
      <Integrations />
      <AutomationFlow />
      <LiveProjects />
      <PricingCRM />
      <WhoWeServe />
      <WhyAuthAI />
      <Roadmap />
      <Testimonials />
      <Contact />
    </main>
  );
}
