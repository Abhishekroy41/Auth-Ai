import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import VantaBackground from './components/ui/VantaBackground';
import Loader from './components/ui/Loader';

const Home = lazy(() => import('./pages/Home'));
const Pricing = lazy(() => import('./pages/Pricing'));
const CRMFeature = lazy(() => import('./pages/Features/CRM'));
const N8nAutomationFeature = lazy(() => import('./pages/Features/N8nAutomation'));
const LandingPagesFeature = lazy(() => import('./pages/Features/LandingPages'));
const SEOFeature = lazy(() => import('./pages/Features/SEO'));
const AIWorkflowsFeature = lazy(() => import('./pages/Features/AIWorkflows'));
const AdsFeature = lazy(() => import('./pages/Features/Ads'));

// Resources
const HelpCenter = lazy(() => import('./pages/Resources/HelpCenter'));
const ContactUs = lazy(() => import('./pages/Resources/ContactUs'));

// Legal
const Terms = lazy(() => import('./pages/Legal/Terms'));
const PrivacyPolicy = lazy(() => import('./pages/Legal/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./pages/Legal/RefundPolicy'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  
  const springConfig = { damping: 30, stiffness: 50 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 250); // Center the 500px orb
      cursorY.set(e.clientY - 250);
    };
    window.addEventListener('mousemove', moveCursor);
    
    // Simulate initial boot time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AnimatePresence>
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="min-h-screen relative overflow-hidden bg-[var(--bg-primary)]"
        >
        {/* 3D Network Background */}
        <VantaBackground />

        {/* Interactive Mouse Glow */}
        <motion.div 
          className="hidden md:block fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-[var(--accent-green)] opacity-[0.05] blur-[120px] pointer-events-none z-0 mix-blend-screen"
          style={{ x: cursorXSpring, y: cursorYSpring }}
        />
        
        {/* Ambient slow drifting orbs */}
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0], 
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.9, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="hidden md:block fixed top-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-[var(--accent-blue)] opacity-[0.03] blur-[120px] pointer-events-none z-0"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 80, 0], 
            y: [0, 80, -80, 0],
            scale: [1, 0.8, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="hidden md:block fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--accent-green)] opacity-[0.02] blur-[150px] pointer-events-none z-0"
        />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          
          <div className="flex-grow">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/features/crm" element={<CRMFeature />} />
                <Route path="/features/n8n" element={<N8nAutomationFeature />} />
                <Route path="/features/websites" element={<LandingPagesFeature />} />
                <Route path="/features/seo" element={<SEOFeature />} />
                <Route path="/features/ai" element={<AIWorkflowsFeature />} />
                <Route path="/features/ads" element={<AdsFeature />} />
                
                {/* Resources */}
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/contact" element={<ContactUs />} />

                {/* Legal */}
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/refund" element={<RefundPolicy />} />

                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </div>

          <Footer />
        </div>

        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/918877221407" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform z-50"
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>
        </a>
        </motion.div>
      )}
    </Router>
  );
}

export default App;
