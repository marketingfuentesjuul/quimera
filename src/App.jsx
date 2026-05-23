import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TeamSection from './components/TeamSection';
import WhyChooseUs from './components/WhyChooseUs';
import BrandBanner from './components/BrandBanner';
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
      <Header />
      <main>
        <Hero />
        <Services />
        <TeamSection />
        <WhyChooseUs />
        <BrandBanner />
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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/team" element={<PageTransition><TeamPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="/chilean-company-verification" element={<PageTransition><ChileanCompanyVerificationPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
