import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CTASection = () => {
  const [ref, revealed] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section 
      style={{ 
        position: 'relative', 
        backgroundColor: '#070512', 
        background: 'linear-gradient(135deg, #070512 0%, #0c0922 50%, #05030a 100%)',
        paddingTop: '7rem', 
        paddingBottom: '7rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Glowing Blobs - Premium Violet & Lilac Auras */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          left: '12%',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(160, 118, 232, 0.18) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(60px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '15%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(86, 65, 153, 0.22) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(70px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div 
          ref={ref}
          className={`reveal-on-scroll ${revealed ? 'revealed' : ''}`}
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* Dark Glassmorphic Container Card */}
          <div 
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '4.5rem 3rem',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.03)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)'
            }}
          >
            {/* Small Glass Tag at Top */}
            <div 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '0.45rem 1.15rem',
                borderRadius: '9999px',
                color: '#ffffff',
                fontWeight: 'var(--weight-semibold)',
                fontSize: 'var(--font-sm)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                marginBottom: '1.75rem',
                fontFamily: 'var(--font-title)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'transform 0.3s ease'
              }}
              className="cta-badge-hover"
            >
              <span style={{ color: '#bfa3ff' }}>✦</span>
              <span>Start your journey</span>
            </div>

            {/* Title (White with Lilac/Violet highlight) */}
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 2.75rem)', 
                fontWeight: 'var(--weight-extrabold)',
                lineHeight: '1.25',
                color: '#ffffff', 
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-title)',
                maxWidth: '720px'
              }}
            >
              Are you ready to start your new{' '}
              <span 
                style={{ 
                  color: '#bfa3ff',
                  background: 'linear-gradient(135deg, #bfa3ff 30%, #a076e8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                path in Chile
              </span>
              ?
            </h2>

            {/* Paragraph Text (White/muted) */}
            <p 
              style={{ 
                fontSize: 'var(--font-lg)', 
                lineHeight: '1.65',
                color: 'rgba(255, 255, 255, 0.75)', 
                fontFamily: 'var(--font-body)',
                maxWidth: '680px',
                marginBottom: '2.75rem'
              }}
            >
              Click the button below and get in touch with our team so we can help you begin your transition to Chile.
            </p>

            {/* Glassmorphic Contact CTA Button */}
            <Link 
              viewTransition 
              to="/contact" 
              className="btn btn-cta-glass" 
              style={{ 
                borderRadius: 'var(--radius-full)', 
                textTransform: 'none', 
                padding: '1.1rem 2.8rem',
                fontSize: 'var(--font-base)',
                fontWeight: 'var(--weight-bold)',
                background: 'rgba(255, 255, 255, 0.06)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Stay in contact
            </Link>
          </div>
        </div>
      </div>

      {/* Styles for glassmorphism interactive states */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 640px) {
          .card-glass {
            padding: 3rem 1.5rem !important;
          }
        }
        .btn-cta-glass:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
          transform: translateY(-3px) scale(1.02) !important;
          box-shadow: 0 12px 35px rgba(160, 118, 232, 0.22) !important;
        }
        .btn-cta-glass:active {
          transform: translateY(-1px) scale(0.98) !important;
        }
        .cta-badge-hover:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.08) !important;
        }
      `}} />
    </section>
  );
};

export default CTASection;
