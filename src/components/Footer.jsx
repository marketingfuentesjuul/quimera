
const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: '#121212', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-md-2 gap-6" style={{ paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '2rem' }}>
          
          <div>
            <h2 style={{ fontSize: 'var(--font-3xl)', marginBottom: '1rem', color: 'white' }}>
              Ready to start your journey?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: 'var(--font-lg)', maxWidth: '400px' }}>
              If you have any questions or would like guidance on your next steps, we’re here to help.
            </p>
            <div className="flex gap-2">
              <a href="mailto:contacto@quimeracg.cl" className="btn btn-white">Contact Us</a>
              <a href="https://wa.me/56912345678" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                WhatsApp Us
              </a>
            </div>
          </div>
          
          <div className="flex flex-col" style={{ justifyContent: 'center' }}>
            <img 
              src="/images/logo-qc-white.png" 
              alt="Quimera QC Logo" 
              style={{ width: '130px', marginBottom: '1.5rem' }} 
            />
            <h3 style={{ fontSize: 'var(--font-xl)', color: 'white', marginBottom: '1rem' }}>QUIMERA</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'var(--font-sm)' }}>
              Corporate Headquarters:<br />
              Bellavista 5, Office 111, Olimpo Building<br />
              Viña del Mar, Chile.
            </p>
          </div>
          
        </div>
        
        <div className="text-center">
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 'var(--font-sm)' }}>
            Copyright &copy; {new Date().getFullYear()} - Provided by Quimera Consulting Group
          </p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .btn-secondary:hover {
          background-color: white !important;
          color: var(--color-primary) !important;
        }
      `}} />
    </footer>
  );
};

export default Footer;
