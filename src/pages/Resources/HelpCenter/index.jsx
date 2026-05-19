import React, { useEffect } from 'react';

export default function HelpCenter() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h1 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-8">Help Center</h1>
      <div className="prose prose-invert max-w-none font-nunito text-[var(--text-secondary)]">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
           <h2 className="text-2xl font-bold text-white mb-4">How can we help you?</h2>
           <p className="mb-6">Welcome to the Auth AI Help Center. Browse our FAQs or contact our support team for assistance with your account, billing, or technical issues.</p>
           
           <div className="space-y-4 mt-8">
             <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-2">Getting Started</h3>
                <p>Learn how to set up your first CRM pipeline and connect WhatsApp.</p>
             </div>
             <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-2">Billing & Subscriptions</h3>
                <p>Manage your payment methods and view your invoices.</p>
             </div>
           </div>

           <p className="mt-8 italic text-sm">This page is currently under construction. More detailed articles will be added soon.</p>
        </div>
      </div>
    </div>
  );
}
