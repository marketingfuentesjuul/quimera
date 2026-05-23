import { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/chilean-company-verification" element={<ChileanCompanyVerificationPage />} />
      </Routes>
    </>
  );
}

export default App;
