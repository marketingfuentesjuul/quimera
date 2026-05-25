import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { DottedWorldMap } from './ui/DottedWorldMap';

const TeamSection = () => {
  const [imageRef, imageRevealed] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section id="team" className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        {/* Horizontal Card Container */}
        <div style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lg)',
          padding: '3.5rem 3rem',
          overflow: 'hidden'
        }}>
          {/* Subtle Dotted World Map Background Texture */}
          <DottedWorldMap 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '130%',
              height: 'auto',
              minWidth: '1100px',
              opacity: 0.22,
              pointerEvents: 'none',
              zIndex: 0
            }}
            landColor="rgba(139, 92, 246, 0.45)"
            oceanColor="rgba(139, 92, 246, 0.08)"
          />

          <div className="grid grid-cols-1 grid-cols-md-2 gap-8 items-center" style={{ position: 'relative', zIndex: 1 }}>
            {/* Column 1: Decorated Image */}
            <div 
              ref={imageRef}
              className={`reveal-on-scroll ${imageRevealed ? 'revealed' : ''}`}
              style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}
            >
              {/* Background decorative solid shape */}
              <div style={{
                position: 'absolute',
                top: '25px',
                left: '25px',
                right: '-5px',
                bottom: '-5px',
                backgroundColor: 'var(--color-accent)',
                borderRadius: '20px',
                zIndex: 1,
                maxWidth: '495px',
                width: '100%',
                height: '100%'
              }} />
              <img 
                src="/images/torres-del-paine.jpg" 
                alt="Torres del Paine, Chile" 
                className="reveal-img-blur"
                style={{ 
                  width: '100%', 
                  maxWidth: '495px', 
                  height: 'auto', 
                  borderRadius: '20px', 
                  boxShadow: 'var(--shadow-xl)', 
                  zIndex: 2,
                  objectFit: 'cover'
                }}
              />
            </div>
            
            {/* Column 2: Content */}
            <div style={{ zIndex: 3 }}>
              <span className="badge badge-primary" style={{ marginBottom: '1rem', backgroundColor: 'var(--color-primary)', color: 'white' }}>
                Our Team
              </span>
              <h2 style={{ fontSize: 'var(--font-3xl)', marginBottom: '1.5rem', color: '#000', lineHeight: 'var(--lh-tight)' }}>
                Who is behind Quimera?
              </h2>
              <p className="text-muted text-lg" style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: '#374151' }}>
                Our team is made up of specialists with years of experience across the three strategic pillars of our services: legal, accounting, and commercial.
              </p>
              <p className="text-muted" style={{ marginBottom: '2rem', lineHeight: '1.6', color: '#374151' }}>
                We define Quimera as a boutique firm that prioritizes quality, offering direct access to senior specialists and tailor-made responses to each company's unique needs. We guide you with confidence and precision through local regulations and market entry.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ fontWeight: 'var(--weight-semibold)', color: '#1e1b4b', fontFamily: 'var(--font-title)' }}>
                    Senior Legal Counselors
                  </span>
                </div>
  
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.2rem' }}>✓</span>
                  <span style={{ fontWeight: 'var(--weight-semibold)', color: '#1e1b4b', fontFamily: 'var(--font-title)' }}>
                    Local Market Entry Experts
                  </span>
                </div>
              </div>
  
              <Link viewTransition to="/team" className="btn btn-primary" style={{ textTransform: 'none' }}>
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
