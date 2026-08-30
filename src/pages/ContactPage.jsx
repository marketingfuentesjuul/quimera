import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { GlobePulse } from '../components/ui/CobeGlobePulse';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  useEffect(() => {
    document.title = 'Contacto — Quimera Consulting Group';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const webhookUrl = import.meta.env.VITE_N8N_CONTACT_WEBHOOK_URL || 'https://n8n-rqyx.srv1885958.hstgr.cloud/webhook/contacto-quimera';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Error submitting form to N8N:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#06040b] text-white overflow-x-hidden relative">
      
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      
      {/* Adjusted spacing to lower page content using explicit inline styles to guarantee rendering */}
      <main className="pb-20 md:pb-28 flex flex-col items-center relative z-10 px-4" style={{ marginTop: '180px' }}>
        {/* Globe centered behind the form */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[840px] md:w-[1240px] aspect-square pointer-events-none z-0 flex justify-center items-center">
          <div className="w-full h-full pointer-events-auto">
            <GlobePulse className="w-full h-full" speed={0.002} />
          </div>
        </div>

        <div className="w-full max-w-[580px] z-10">
          <h1 className="text-center font-['Inter'] text-[24px] md:text-[30px] font-extrabold tracking-[0.2em] text-white uppercase drop-shadow-lg" style={{ marginBottom: '64px' }}>
            SEND US A MESSAGE
          </h1>
          
          <div className="bg-white/[0.33] backdrop-blur-[40px] border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Subtle inner top glow for the glass card */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#1b9859]/10 border border-[#1b9859]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#1b9859]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-['Inter'] text-xl font-bold text-white mb-2">Message Sent Successfully</h3>
                <p className="text-white/70 text-sm max-w-sm mx-auto">
                  Thank you for contacting us. Our specialists will review your request and get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="mt-6 text-sm text-[#8b6ce5] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {submitStatus === 'error' && (
                  <div className="bg-red-950/20 border border-red-500/30 text-red-200 text-sm rounded-2xl p-4 text-center font-medium">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
                
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm"
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
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm"
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
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm"
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
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-white font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm resize-none"
                    style={{ padding: '16px 24px' }}
                  />
                </div>
                
                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#6c4ebe] to-[#4b308e] hover:from-[#7d5df0] hover:to-[#5839a8] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 text-white font-bold tracking-[0.15em] uppercase py-4 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(108,78,190,0.4)] hover:shadow-[0_15px_40px_rgba(108,78,190,0.6)] border border-white/10 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        SENDING...
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </>
                    ) : (
                      <>
                        SUBMIT
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
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
