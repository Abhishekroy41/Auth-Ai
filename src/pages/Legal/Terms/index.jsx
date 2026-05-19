import React, { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h1 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-8">Terms & Conditions</h1>
      <div className="prose prose-invert max-w-none font-nunito text-[var(--text-secondary)]">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
           <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
           <p className="mb-6">By accessing and using our services, you agree to be bound by these Terms and Conditions.</p>
           
           <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
           <p className="mb-6">Permission is granted to temporarily use our platform for personal, non-commercial transitory viewing only.</p>

           <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
           <p className="mb-6">The materials on Auth AI's website are provided on an 'as is' basis. Auth AI makes no warranties, expressed or implied.</p>

           <p className="mt-8 italic text-sm text-gray-500">This is a placeholder for the full terms and conditions. Please update with your official legal text.</p>
        </div>
      </div>
    </div>
  );
}
