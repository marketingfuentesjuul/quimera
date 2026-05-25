import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TeamSection from './components/TeamSection';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import ChileanCompanyVerificationPage from './pages/ChileanCompanyVerificationPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <TeamSection />
        <WhyChooseUs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/team" element={<PageTransition><TeamPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/chilean-company-verification" element={<PageTransition><ChileanCompanyVerificationPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/56956519981" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 16px rgba(37, 211, 102, 0.45)',
          zIndex: 9999,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.45)';
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="#ffffff"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.489 4.908 1.49 5.32-.001 9.647-4.33 9.649-9.643.001-2.562-1.01-4.97-2.848-6.808C16.46 2.355 14.06 1.35 11.5 1.35c-5.32 0-9.649 4.33-9.65 9.647-.001 1.769.49 3.5 1.417 5.011l-.994 3.634 3.774-.988zm11.302-6.582c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.672.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-3.04-1.524-4.282-2.617-5.267-4.31-.262-.45.262-.418.75-.1.438.288.488.4.738.575.25.175.125.325-.025.625-.15.3-.672 1.62-.822 1.97-.15.35-.3.325-.6.175-.3-.15-1.272-.47-2.422-1.496-.895-.8-1.5-1.787-1.675-2.087-.175-.3-.018-.462.13-.61.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.672-1.62-.922-2.22-.244-.588-.49-.508-.672-.518-.173-.01-.372-.01-.572-.01-.2 0-.525.075-.8 1.075-.275 1.05-1.05 3.075-1.05 3.175 0 .1.1.225.25.35.15.125 2.412 3.685 5.842 5.17.816.353 1.454.563 1.954.722.82.261 1.567.224 2.157.137.658-.098 1.774-.725 2.024-1.397.25-.672.25-1.25.175-1.375-.075-.125-.275-.2-.575-.35z"/>
        </svg>
      </a>
    </>
  );
}

export default App;
