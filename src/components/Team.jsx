import { useState, Fragment } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const teamMembers = [
  {
    name: 'Raquel Conduto',
    role: 'CEO',
    image: '/images/team/raquel-conduto.jpg',
    initials: 'RC',
    linkedin: 'https://www.linkedin.com/in/raquel-conduto/?locale=es_ES',
  },
  {
    name: 'Diego Farrán',
    role: 'Head of Operations',
    image: '/images/team/diego-farran.jpg',
    initials: 'DF',
    linkedin: 'https://www.linkedin.com/in/diegofarran/',
  },
  {
    name: 'Maximiliano Fuentes',
    role: 'Project Support Specialist',
    image: '/images/team/maximiliano-fuentes.jpg',
    initials: 'MF',
    linkedin: 'https://www.linkedin.com/in/maximiliano-fuentes-cid-22216b5b/',
  },
  {
    name: 'Francisco Davilo Juul',
    role: 'Head of Sales',
    image: '/images/team/francisco-davilo.jpg',
    initials: 'FD',
    linkedin: 'https://www.linkedin.com/in/franciscotabilojuul/',
  },
  {
    name: 'Gabriel Meza',
    role: 'Head of Marketing',
    image: '/images/team/gabriel-meza.jpg',
    initials: 'GM',
    linkedin: 'https://www.linkedin.com/in/gabriel-meza-romero/',
  },
];

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [headerRef, headerRevealed] = useIntersectionObserver({ threshold: 0.15 });
  const [gridRef, gridRevealed] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section id="team" className="section" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Decorative background blobs */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        right: '-120px',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(139, 108, 229, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-100px',
        width: '380px',
        height: '380px',
        background: 'radial-gradient(circle, rgba(235, 94, 40, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center reveal-on-scroll ${headerRevealed ? 'revealed' : ''}`}
          style={{ marginBottom: '4.5rem' }}
        >
          <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>Our Team</span>
          <h2 style={{
            fontSize: 'var(--font-3xl)',
            marginBottom: '1.25rem',
            color: '#ffffff',
            lineHeight: 'var(--lh-tight)',
            fontFamily: 'var(--font-title)',
          }}>
            The people behind Quimera
          </h2>
          <p className="text-muted text-lg" style={{ maxWidth: '640px', margin: '0 auto', lineHeight: '1.7', color: 'rgba(255, 255, 255, 0.7)' }}>
            A boutique team of senior specialists fully committed to your success in the Chilean market.
          </p>
        </div>

        {/* Team grid */}
        <div
          ref={gridRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {teamMembers.map((member, index) => {
            const isHovered = hoveredIndex === index;
            // 3-column layout: first row has 3, second row has 2 (centered)
            return (
              <Fragment key={index}>
                <div
                  className={`team-card-wrapper reveal-stagger-item ${gridRevealed ? 'revealed' : ''}`}
                  style={{
                    transitionDelay: gridRevealed ? `${index * 120}ms` : '0ms',
                    flex: '0 0 calc(33.333% - 1.4rem)',
                    maxWidth: '280px',
                    minWidth: '240px',
                  }}
                >
                  <div
                    className="team-card"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => window.open(member.linkedin, '_blank', 'noopener,noreferrer')}
                    style={{
                      position: 'relative',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      boxShadow: isHovered
                        ? '0 28px 60px rgba(86, 65, 153, 0.18), 0 8px 20px rgba(86, 65, 153, 0.1)'
                        : 'var(--shadow-lg)',
                      transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                      transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                      aspectRatio: '3/4',
                      backgroundColor: '#e8e4f0',
                    }}
                  >
                    {/* Photo */}
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        display: 'block',
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      }}
                    />

                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: isHovered
                        ? 'linear-gradient(to top, rgba(37, 24, 80, 0.92) 0%, rgba(37, 24, 80, 0.5) 45%, transparent 70%)'
                        : 'linear-gradient(to top, rgba(37, 24, 80, 0.82) 0%, rgba(37, 24, 80, 0.3) 40%, transparent 65%)',
                      transition: 'background 0.45s ease',
                    }} />

                    {/* Role pill — top right, slides in on hover */}
                    <div style={{
                      position: 'absolute',
                      top: '1.2rem',
                      right: '1.2rem',
                      background: 'rgba(255,255,255,0.18)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: 'var(--radius-full)',
                      padding: '0.3rem 0.85rem',
                      color: 'rgba(255,255,255,0.95)',
                      fontSize: 'var(--font-xs)',
                      fontFamily: 'var(--font-title)',
                      fontWeight: 'var(--weight-semibold)',
                      letterSpacing: '0.04em',
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? 'translateY(0)' : 'translateY(-8px)',
                      transition: 'opacity 0.35s ease, transform 0.35s ease',
                      whiteSpace: 'nowrap',
                    }}>
                      {member.role}
                    </div>

                    {/* Name info — bottom */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '1.75rem 1.5rem 1.5rem',
                    }}>
                      <h3 style={{
                        color: '#ffffff',
                        fontSize: 'var(--font-xl)',
                        fontFamily: 'var(--font-title)',
                        fontWeight: 'var(--weight-bold)',
                        marginBottom: '0.35rem',
                        lineHeight: 'var(--lh-tight)',
                        letterSpacing: '-0.01em',
                      }}>
                        {member.name}
                      </h3>
                      <p style={{
                        color: 'var(--color-primary-complement-light)',
                        fontSize: 'var(--font-sm)',
                        fontFamily: 'var(--font-title)',
                        fontWeight: 'var(--weight-medium)',
                        margin: 0,
                        opacity: isHovered ? 1 : 0.85,
                        transition: 'opacity 0.3s ease',
                        letterSpacing: '0.02em',
                      }}>
                        {member.role}
                      </p>

                      {/* Accent line */}
                      <div style={{
                        height: '2px',
                        background: 'linear-gradient(to right, var(--color-primary-complement), transparent)',
                        marginTop: '0.85rem',
                        width: isHovered ? '60%' : '30%',
                        transition: 'width 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                        borderRadius: '2px',
                      }} />
                    </div>
                  </div>
                </div>
                {index === 2 && <div className="line-break" style={{ width: '100%', height: 0 }} />}
              </Fragment>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .line-break {
            display: none;
          }
          .team-card-wrapper {
            flex: 0 0 calc(50% - 1rem) !important;
            max-width: 280px !important;
          }
        }
        @media (max-width: 580px) {
          .team-card-wrapper {
            flex: 0 0 100% !important;
            max-width: 280px !important;
          }
        }
      `}} />
    </section>
  );
};

export default Team;
