import React, { useEffect } from 'react';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h1 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-8">Refund Policy</h1>
      <div className="prose prose-invert max-w-none font-nunito text-[var(--text-secondary)]">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
           <h2 className="text-2xl font-bold text-white mb-4">1. General Refund Rules</h2>
           <p className="mb-6">We want you to be completely satisfied with our services. If you are not satisfied, we offer refunds under certain conditions.</p>
           
           <h2 className="text-2xl font-bold text-white mb-4">2. Eligibility</h2>
           <p className="mb-6">Refund requests must be made within 14 days of the original purchase date. Setup fees and custom development are generally non-refundable.</p>

           <h2 className="text-2xl font-bold text-white mb-4">3. How to Request</h2>
           <p className="mb-6">To request a refund, please contact our support team at Info@authai.space with your order details and reason for the request.</p>

           <p className="mt-8 italic text-sm text-gray-500">This is a placeholder for the full refund policy. Please update with your official legal text.</p>
        </div>
      </div>
    </div>
  );
}
