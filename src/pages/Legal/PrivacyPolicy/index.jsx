import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h1 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-8">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none font-nunito text-[var(--text-secondary)]">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
           <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
           <p className="mb-6">We collect information you provide directly to us when you create an account, use our services, or communicate with us.</p>
           
           <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
           <p className="mb-6">We use the information we collect to operate, maintain, and improve our services, as well as to communicate with you.</p>

           <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
           <p className="mb-6">We do not share your personal information with third parties except as described in this privacy policy or with your consent.</p>

           <p className="mt-8 italic text-sm text-gray-500">This is a placeholder for the full privacy policy. Please update with your official legal text.</p>
        </div>
      </div>
    </div>
  );
}
