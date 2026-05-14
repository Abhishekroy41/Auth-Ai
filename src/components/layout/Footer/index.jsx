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
            
            {/* Social Icons */}
            <div className="flex gap-5 mt-2 items-center">
              {/* Instagram */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px] text-gray-400 hover:text-black cursor-pointer transition-colors"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              {/* Twitter Bird */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px] text-gray-400 hover:text-black cursor-pointer transition-colors"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              {/* YouTube */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px] text-gray-400 hover:text-black cursor-pointer transition-colors"><path d="M2.5 7.1C2.5 7.1 2 10.4 2 12c0 1.6.5 4.9.5 4.9C3.1 18.5 4.8 19 12 19c7.2 0 8.9-.5 9.5-2.1.5 0 .5-3.3.5-4.9 0-1.6-.5-4.9-.5-4.9C20.9 5.5 19.2 5 12 5 4.8 5 3.1 5.5 2.5 7.1z"/><polygon points="9.5 8.2 15.5 12 9.5 15.8 9.5 8.2"/></svg>
              {/* LinkedIn */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[28px] h-[28px] text-gray-400 hover:text-black cursor-pointer transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              {/* Play Store */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] text-gray-400 hover:text-black cursor-pointer transition-colors ml-1"><path d="M3.6 2c-.3.2-.6.7-.6 1.4v17.2c0 .7.3 1.2.6 1.4l.1.1 9.7-9.7v-.2L3.7 1.9l-.1.1zm10.5 9.4l3.3 3.3-11.4 6.6c-1.1.6-1.9.1-1.9-1.2v-17c0-1.3.8-1.8 1.9-1.2l11.4 6.6-3.3 3.3v-.4z"/></svg>
              {/* Apple */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] text-gray-400 hover:text-black cursor-pointer transition-colors"><path d="M16.5 14c-.1-3.1 2.5-4.6 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.7 1.1-4.6 1.1-.9 0-2.4-1-3.9-1-2 0-3.9 1.2-4.9 3-2.1 3.6-.5 9 1.5 11.9 1 1.4 2.1 3 3.6 3 1.4-.1 2-.9 3.7-.9s2.2.9 3.8.9c1.6 0 2.5-1.5 3.5-2.9 1.1-1.7 1.6-3.3 1.6-3.4 0-.1-3.2-1.2-3.3-4.7zM14.8 5.3c.8-1 1.3-2.4 1.1-3.8-1.2.1-2.7.8-3.5 1.8-.7.8-1.3 2.2-1.1 3.6 1.3.1 2.7-.6 3.5-1.6z"/></svg>
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
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">About Auth AI</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
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
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
