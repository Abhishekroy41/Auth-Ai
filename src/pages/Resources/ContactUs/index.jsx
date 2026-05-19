import React, { useEffect } from 'react';

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h1 className="text-4xl lg:text-5xl font-syne font-bold text-white mb-8">Contact Us</h1>
      <div className="prose prose-invert max-w-none font-nunito text-[var(--text-secondary)]">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
             <h2 className="text-2xl font-bold text-white mb-4">Get in touch</h2>
             <p className="mb-6">Have questions about our platform? Need a custom quote? We're here to help.</p>
             
             <div className="space-y-4">
               <div>
                 <strong className="text-white block">Email</strong>
                 <a href="mailto:Info@authai.space" className="text-[var(--accent-green)] hover:underline">Info@authai.space</a>
               </div>
               <div>
                 <strong className="text-white block">Office Location</strong>
                 <span>India</span>
               </div>
               <div>
                 <strong className="text-white block">Support Hours</strong>
                 <span>Monday - Friday, 9am - 6pm IST</span>
               </div>
             </div>
           </div>
           
           <div>
             <form className="space-y-4">
               <div>
                 <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                 <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--accent-green)] transition-colors" placeholder="Your Name" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                 <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--accent-green)] transition-colors" placeholder="you@company.com" />
               </div>
               <div>
                 <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                 <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[var(--accent-green)] transition-colors" placeholder="How can we help?"></textarea>
               </div>
               <button type="button" className="w-full bg-[var(--accent-green)] text-black font-bold py-3 rounded-lg hover:shadow-[var(--glow-green)] transition-all">Send Message</button>
             </form>
           </div>
        </div>
      </div>
    </div>
  );
}
