import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CTASection = () => {
  const [ref, revealed] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section 
      style={{ 
        position: 'relative', 
        backgroundColor: 'var(--color-bg-light)', 
        paddingTop: '6rem', 
        paddingBottom: '6rem',
        overflow: 'hidden'
      }}
    >
      {/* Background Glowing Blobs matching the image's aura */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 158, 125, 0.25) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(50px)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(228, 217, 255, 0.45) 0%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(60px)',
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
          {/* Glassmorphic Container Card */}
          <div 
            className="card-glass"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '4rem 3rem',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              background: 'rgba(255, 255, 255, 0.65)',
              boxShadow: '0 20px 50px rgba(86, 65, 153, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          >
            {/* Small Rounded Top Tag */}
            <div 
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(86, 65, 153, 0.1)',
                padding: '0.45rem 1.15rem',
                borderRadius: '9999px',
                color: 'var(--color-primary-dark)',
                fontWeight: 'var(--weight-semibold)',
                fontSize: 'var(--font-sm)',
                boxShadow: '0 4px 12px rgba(86, 65, 153, 0.04)',
                marginBottom: '1.75rem',
                fontFamily: 'var(--font-title)',
                letterSpacing: '0.02em',
                transition: 'transform 0.3s ease'
              }}
              className="cta-badge-hover"
            >
              <span style={{ color: 'var(--color-primary-complement-dark)' }}>✦</span>
              <span>Comienza tu viaje</span>
            </div>

            {/* Title */}
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 2.75rem)', 
                fontWeight: 'var(--weight-extrabold)',
                lineHeight: '1.25',
                color: 'var(--color-text-dark)', 
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-title)',
                maxWidth: '720px'
              }}
            >
              ¿Estás listo para comenzar tu nuevo{' '}
              <span 
                style={{ 
                  color: 'var(--color-primary-complement-dark)',
                  background: 'linear-gradient(135deg, var(--color-primary-complement-dark) 30%, #e64a00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                camino en Chile
              </span>
              ?
            </h2>

            {/* Paragraph Text */}
            <p 
              style={{ 
                fontSize: 'var(--font-lg)', 
                lineHeight: '1.65',
                color: 'var(--color-text-muted)', 
                fontFamily: 'var(--font-body)',
                maxWidth: '680px',
                marginBottom: '2.5rem'
              }}
            >
              Escríbenos o clickea el siguiente botón y ponte en contacto con nuestro equipo para que podamos ayudarte a comenzar a llevarte tu transición a Chile.
            </p>

            {/* Contact CTA Button */}
            <Link 
              viewTransition 
              to="/contact" 
              className="btn btn-gradient btn-cta-pulse" 
              style={{ 
                borderRadius: 'var(--radius-full)', 
                textTransform: 'none', 
                padding: '1.1rem 2.8rem',
                fontSize: 'var(--font-base)',
                fontWeight: 'var(--weight-bold)',
                boxShadow: '0 10px 25px rgba(230, 74, 0, 0.25)',
                background: 'linear-gradient(135deg, var(--color-primary-complement-dark) 0%, #ff8a60 100%)',
                color: '#ffffff',
                border: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              Stay in contact
            </Link>
          </div>
        </div>
      </div>

      {/* Adding interactive classes */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 640px) {
          .card-glass {
            padding: 3rem 1.5rem !important;
          }
        }
        .btn-cta-pulse:hover {
          transform: translateY(-3px) scale(1.03) !important;
          box-shadow: 0 15px 30px rgba(230, 74, 0, 0.35) !important;
        }
        .btn-cta-pulse:active {
          transform: translateY(-1px) scale(0.98) !important;
        }
        .cta-badge-hover:hover {
          transform: translateY(-2px);
        }
      `}} />
    </section>
  );
};

export default CTASection;
