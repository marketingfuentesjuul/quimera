import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, target) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      if (pathname !== '/') {
        navigate('/' + target);
      } else {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer 
      id="contact" 
      style={{ 
        backgroundColor: '#070512', 
        color: '#ffffff', 
        paddingTop: '6rem', 
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-md-3 gap-8">
          
          {/* Column 1: Brand Info & Legend */}
          <div className="footer-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <img 
                src="/images/logo-qc-white.png" 
                alt="Quimera QC Logo" 
                style={{ width: '40px', height: 'auto', objectFit: 'contain' }} 
              />
              <span style={{ 
                fontFamily: 'var(--font-title)', 
                fontSize: '1.35rem', 
                fontWeight: 'var(--weight-bold)', 
                letterSpacing: '0.08em', 
                color: '#ffffff' 
              }}>
                QUIMERA
              </span>
            </div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.65)', 
              fontSize: 'var(--font-sm)', 
              lineHeight: '1.65',
              maxWidth: '320px',
              margin: 0
            }}>
              Compliance specialists assisting companies to launch and scale their operations in Chile through comprehensive legal, accounting, and marketing solutions.
            </p>
          </div>
          
          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 style={{ 
              fontFamily: 'var(--font-title)', 
              fontSize: 'var(--font-sm)', 
              fontWeight: 'var(--weight-bold)', 
              color: '#ffffff', 
              marginBottom: '1.5rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em' 
            }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" onClick={(e) => handleLinkClick(e, '#top')} className="footer-link">Home</Link>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, '#services')} className="footer-link">Services</a>
              </li>
              <li>
                <Link viewTransition to="/team" className="footer-link">Team</Link>
              </li>
              <li>
                <Link viewTransition to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Contact details & Call Actions */}
          <div className="footer-col">
            <h4 style={{ 
              fontFamily: 'var(--font-title)', 
              fontSize: 'var(--font-sm)', 
              fontWeight: 'var(--weight-bold)', 
              color: '#ffffff', 
              marginBottom: '1.5rem', 
              textTransform: 'uppercase', 
              letterSpacing: '0.08em' 
            }}>
              Contact Info
            </h4>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.65)', 
              fontSize: 'var(--font-sm)', 
              lineHeight: '1.6', 
              margin: '0 0 1.25rem 0',
              maxWidth: '280px'
            }}>
              <strong>Headquarters:</strong><br />
              Bellavista 5, Office 111, Olimpo Building<br />
              Viña del Mar, Chile.
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: 'var(--font-sm)', margin: '0 0 1.5rem 0' }}>
              <strong>Email:</strong><br />
              <a href="mailto:contacto@quimeracg.cl" className="footer-link">contacto@quimeracg.cl</a>
            </p>
            <div className="flex gap-2" style={{ width: '100%', justifyContent: 'inherit' }}>
              <a href="mailto:contacto@quimeracg.cl" className="btn btn-white" style={{ padding: '0.6rem 1.25rem', fontSize: 'var(--font-xs)', borderRadius: 'var(--radius-sm)', textTransform: 'none' }}>
                Email Us
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar: Copyright */}
        <div style={{ 
          marginTop: '5rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
          textAlign: 'center' 
        }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: 'var(--font-xs)', margin: 0 }}>
            Copyright &copy; {new Date().getFullYear()} - Provided by Quimera Consulting Group
          </p>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .footer-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 768px) {
          .footer-col {
            align-items: flex-start;
            text-align: left;
          }
        }
        .footer-link {
          color: rgba(255, 255, 255, 0.65) !important;
          font-size: var(--font-sm);
          transition: color var(--transition-fast);
        }
        .footer-link:hover {
          color: #bfa3ff !important;
        }
        .btn-secondary:hover {
          background-color: white !important;
          color: var(--color-primary) !important;
        }
      `}} />
    </footer>
  );
};

export default Footer;
