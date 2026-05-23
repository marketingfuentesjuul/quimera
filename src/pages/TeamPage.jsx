import { useEffect } from 'react';
import Header from '../components/Header';
import Team from '../components/Team';
import Footer from '../components/Footer';
import { DottedBackground } from '@/components/ui/dotted-vignette-background';

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Our Team — Quimera Consulting Group';
  }, []);

  return (
    <div className="min-h-screen bg-[#06040b] text-white overflow-x-hidden relative isolate flex flex-col justify-between">
      {/* Dotted Vignette Background */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        <DottedBackground
          dotColor="#8b6ce5"
          backgroundColor="#06040b"
          enableVignette={true}
          vignetteColor="rgba(6, 4, 11, 0.92)"
          enableInnerGlow={true}
          innerGlowColor="rgba(108, 78, 190, 0.12)"
          dotSize={1.5}
          dotSpacing={14}
        />
      </div>

      <Header />
      <main className="flex-1" style={{ paddingTop: '90px' }}>
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
