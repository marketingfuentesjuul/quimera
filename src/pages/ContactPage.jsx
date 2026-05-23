import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GlobePulse } from '../components/ui/CobeGlobePulse';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    document.title = 'Contacto — Quimera Consulting Group';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contacto enviado:', formData);
    // Add custom form submission here if needed
  };

  return (
    <div className="min-h-screen bg-[#06040b] text-white overflow-x-hidden relative">
      <Header />
      
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      
      {/* Adjusted spacing to lower page content using explicit inline styles to guarantee rendering */}
      <main className="pb-20 md:pb-28 flex flex-col items-center relative z-10 px-4" style={{ marginTop: '180px' }}>
        {/* Globe centered behind the form */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[840px] md:w-[1240px] aspect-square pointer-events-none z-0 flex justify-center items-center">
          <div className="w-full h-full pointer-events-auto">
            <GlobePulse className="w-full h-full" speed={0.004} />
          </div>
        </div>

        <div className="w-full max-w-[580px] z-10">
          <h1 className="text-center font-['Outfit'] text-[24px] md:text-[30px] font-extrabold tracking-[0.2em] text-white uppercase drop-shadow-lg" style={{ marginBottom: '64px' }}>
            SEND US A MESSAGE
          </h1>
          
          <div className="bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Subtle inner top glow for the glass card */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm"
                  style={{ padding: '16px 24px' }}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm"
                  style={{ padding: '16px 24px' }}
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm"
                  style={{ padding: '16px 24px' }}
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm resize-none"
                  style={{ padding: '16px 24px' }}
                />
              </div>
              
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#6c4ebe] to-[#4b308e] hover:from-[#7d5df0] hover:to-[#5839a8] active:scale-[0.98] text-white font-bold tracking-[0.15em] uppercase py-4 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(108,78,190,0.4)] hover:shadow-[0_15px_40px_rgba(108,78,190,0.6)] border border-white/10 flex items-center justify-center gap-2 group"
                >
                  SUBMIT
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* 
        Solid Footer wrapped in a relative container with a higher z-index (z-10).
        This guarantees the bottom portion of the globe renders cleanly BEHIND the footer,
        preventing any overlap or visual clash with the footer text and logo.
      */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
