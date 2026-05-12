import React from 'react';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Products from '../components/sections/Products';
import WhoWeServe from '../components/sections/WhoWeServe';
import WhyAuthAI from '../components/sections/WhyAuthAI';
import Roadmap from '../components/sections/Roadmap';
import AutomationFlow from '../components/sections/AutomationFlow';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <AutomationFlow />
      <Products />
      <WhoWeServe />
      <WhyAuthAI />
      <Roadmap />
      <Testimonials />
      <Contact />
    </main>
  );
}
