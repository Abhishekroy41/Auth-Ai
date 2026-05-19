import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white py-8 lg:py-10 relative z-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          
          {/* Left Column (Logo / Copyright / Badges) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="inline-block mb-2">
              <span className="font-syne text-[36px] font-extrabold tracking-tight text-black hover:text-gray-800 transition-colors" style={{ letterSpacing: '-0.05em' }}>
                {'{ Auth Ai }'}
              </span>
            </Link>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-[#f37021]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  <circle cx="12" cy="12" r="4" fill="currentColor"/>
                </svg>
                <span className="font-sans font-extrabold text-[22px] tracking-tight">
                  <span className="text-[#f37021]">#</span>
                  <span className="text-gray-900">startup</span>
                  <span className="text-gray-800">india</span>
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 font-nunito text-base flex items-center gap-2">
              Made with <span className="text-pink-500 text-xl">❤️</span> in India
            </p>
                     {/* Meta Business Partner Logo */}
            <div className="mt-2 mb-2">
              <img 
                src="https://img.engagelab.net/en/article/meta-business-partner-badge.png" 
                alt="Meta Business Partner" 
                className="h-[75px] object-contain"
              />
            </div>
            
            {/* Social Icons & Contact */}
            <div className="flex flex-col sm:flex-row gap-5 mt-2 sm:items-center">
              <div className="flex gap-5 items-center">
                {/* Instagram */}
                <a href="https://www.instagram.com/authai.space?igsh=MXJkeTZ4aG9nbXF3Zg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/auth-ai-automation/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
              
              {/* Mail */}
              <a href="mailto:Info@authai.space" className="text-gray-400 hover:text-black transition-colors flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span className="font-nunito font-semibold text-sm">Info@authai.space</span>
              </a>
            </div>
          </div>

          {/* Platform Column */}
          <div className="col-span-1">
            <h4 className="text-black font-bold mb-6 font-syne text-lg tracking-wide">Platform</h4>
            <ul className="space-y-3 font-nunito text-gray-600 text-sm">
              <li><Link to="/" className="hover:text-black transition-colors">Features</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Industries</a></li>
              <li><Link to="/pricing" className="hover:text-black transition-colors">Pricing</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Book a Demo</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Become a Partner</a></li>
              <li><a href="#" className="hover:text-black transition-colors">WhatsApp Marketing</a></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h4 className="text-black font-bold mb-6 font-syne text-lg tracking-wide">Resources</h4>
            <ul className="space-y-3 font-nunito text-gray-600 text-sm">
              <li><Link to="/help" className="hover:text-black transition-colors">Help Center</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">About Auth AI</a></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* FREE Tools Column */}
          <div className="col-span-1">
            <h4 className="text-black font-bold mb-6 font-syne text-lg tracking-wide">FREE Tools</h4>
            <ul className="space-y-3 font-nunito text-gray-600 text-sm">
              <li><a href="#" className="hover:text-black transition-colors">WhatsApp Button</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Generate WhatsApp Link</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="col-span-1">
            <h4 className="text-black font-bold mb-6 font-syne text-lg tracking-wide">Legal</h4>
            <ul className="space-y-3 font-nunito text-gray-600 text-sm">
              <li><Link to="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="hover:text-black transition-colors">Refund Policy</Link></li>
              <li><Link to="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
