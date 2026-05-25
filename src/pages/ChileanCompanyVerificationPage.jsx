import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { DottedBackground } from '@/components/ui/dotted-vignette-background';

const ChileanCompanyVerificationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    document.title = 'Chilean Company Verification — Quimera Consulting Group';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const webhookUrl = import.meta.env.VITE_N8N_VERIFICATION_WEBHOOK_URL || 'https://n8n.yourdomain.com/webhook/verificacion-quimera';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          company: '',
          jobTitle: '',
          message: ''
        });
      } else {
        setSubmitError(true);
      }
    } catch (err) {
      console.error('Error submitting verification inquiry to N8N:', err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden relative isolate flex flex-col justify-between">
      {/* Dotted Vignette Background */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
        <DottedBackground
          dotColor="#341f5e"
          backgroundColor="#000000"
          enableVignette={true}
          vignetteColor="rgba(0, 0, 0, 0.98)"
          enableInnerGlow={true}
          innerGlowColor="rgba(108, 78, 190, 0.05)"
          dotSize={1.5}
          dotSpacing={14}
        />
      </div>
      
      {/* Background Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <main className="flex-1 pb-16 flex flex-col items-center relative z-10 px-4" style={{ marginTop: '180px' }}>
        <div className="w-full max-w-4xl">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <h1 className="font-['Inter'] text-[28px] md:text-[36px] font-extrabold tracking-[0.15em] text-white uppercase drop-shadow-lg" style={{ marginBottom: '28px' }}>
              CHILEAN COMPANY VERIFICATION
            </h1>
            <p className="text-white text-base md:text-lg max-w-2xl mx-auto" style={{ lineHeight: '1.7' }}>
              If you are looking to start a business in Chile and want to verify the background and authenticity of a Chilean business partner, this service is for you.
            </p>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mt-4" style={{ lineHeight: '1.7' }}>
              Specifically, if you need information regarding whether a company exists, its background history, outstanding debts, or any other relevant documentation, Quimera Consulting Group can provide you with an in-depth analysis service. This ensures you have 100% certainty that you will be partnering with a reliable company in Chile.
            </p>
          </div>

          {/* Glassmorphism Form Card */}
          <div className="w-full max-w-[580px] mx-auto mt-8 z-10">
            <div className="bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-[32px] p-8 md:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#1b9859]/10 border border-[#1b9859]/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#1b9859]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-['Inter'] text-xl font-bold text-white mb-2">Inquiry Sent Successfully</h3>
                  <p className="text-white/70 text-sm max-w-sm mx-auto">
                    Thank you for contacting us. Our specialists will review your request and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {submitError && (
                    <div className="bg-red-950/20 border border-red-500/30 text-red-200 text-sm rounded-2xl p-4 text-center font-medium">
                      There was an error sending your inquiry. Please try again later.
                    </div>
                  )}
                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label className="block text-xs font-bold text-white/80 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm py-4 px-6"
                    />
                  </div>

                  {/* Email Address & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="block text-xs font-bold text-white/80 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm py-4 px-6"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="block text-xs font-bold text-white/80 uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter company name"
                        required
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm py-4 px-6"
                      />
                    </div>
                  </div>

                  {/* Job Title */}
                  <div className="flex flex-col gap-2">
                    <label className="block text-xs font-bold text-white/80 uppercase tracking-wider">
                      Job Title / Role
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="Enter your job title"
                      required
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm py-4 px-6"
                    />
                  </div>

                  {/* Message/Inquiry */}
                  <div className="flex flex-col gap-2">
                    <label className="block text-xs font-bold text-white/80 uppercase tracking-wider">
                      Describe your inquiry
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the company verification or background check details you need..."
                      required
                      rows="4"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 font-medium rounded-2xl focus:outline-none focus:bg-white/10 focus:border-[#8b6ce5]/50 focus:ring-4 focus:ring-[#8b6ce5]/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 text-sm resize-none py-4 px-6"
                    />
                  </div>

                  {/* Submit Button & Privacy Statement */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#6c4ebe] to-[#4b308e] hover:from-[#7d5df0] hover:to-[#5839a8] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 text-white font-bold tracking-[0.15em] uppercase py-4 rounded-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(108,78,190,0.4)] hover:shadow-[0_15px_40px_rgba(108,78,190,0.6)] border border-white/10 flex items-center justify-center gap-2 group text-sm"
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
                          SEND INQUIRY
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-white/50 mt-4">
                      By submitting this form you accept our <a href="#" className="underline hover:text-white transition-colors duration-300">privacy policy</a>.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChileanCompanyVerificationPage;
