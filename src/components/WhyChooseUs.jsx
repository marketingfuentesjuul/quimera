import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const pillars = [
  {
    title: 'Boutique Consulting Firm',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-primary-complement)' }} xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(1, 0)">
          <path d="M 3 20 h 8 v -1.5 H 3 Z M 4 17.5 h 6 v -1 H 4 Z" />
          <path d="M 4.5 15.5 L 5.8 10.5 h 2.4 L 9.5 15.5 Z" />
          <path d="M 4 10.5 h 6 L 9.5 7.5 H 4.5 Z" />
          <path d="M 6.6 7.5 h 0.8 v -2.5 h -0.8 Z M 5.8 5.8 h 2.4 v -0.8 h -2.4 Z" />
        </g>
        <g transform="translate(11, 0)">
          <path d="M 2 20 h 8 v -1.5 H 2 Z M 3 17.5 h 6 v -1 H 3 Z" />
          <path d="M 3.8 15.5 L 4.3 10.5 h 3.4 L 8.2 15.5 Z" />
          <path d="M 3.5 10.5 h 5 v -2.5 h -1 v 1 h -1 v -1 h -1 v 1 h -1 v -1 h -1 Z" />
        </g>
      </svg>
    ),
    description: 'We define Quimera as a boutique firm because we prioritise quality over quantity — both in the services we provide and in the partners we choose to collaborate with. This approach allows us to offer faster response times, and direct access to senior specialists.',
    extendedDescription: 'By working with a select group of clients, we ensure that every project receives our full attention and expertise. For companies looking to establish or expand their operations in Chile, this means tailored solutions, reduced risk, and a trusted partner fully committed to their long-term success.'
  },
  {
    title: 'Personalised Support',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-primary-complement)' }} xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7V4C3 3.45 3.45 3 4 3H7V4.5H4.5V7H3Z" />
        <path d="M17 3H20C20.55 3 21 3.45 21 4V7H19.5V4.5H17V3Z" />
        <path d="M3 17V20C3 20.55 3.45 21 4 21H7V19.5H4.5V17H3Z" />
        <path d="M17 21H20C20.55 21 21 20.55 21 20V17H19.5V19.5H17V21Z" />
        
        <circle cx="12" cy="9.5" r="2.2" />
        <path d="M12 12.8c-1.8 0-4.5.9-4.5 2.7v1.5h9v-1.5c0-1.8-2.7-2.7-4.5-2.7Z" />
        
        <circle cx="8" cy="11" r="1.6" />
        <path d="M8 13.8c-1 .2-2 .8-2 1.9v1.3h2.5v-3.2Z" />
        
        <circle cx="16" cy="11" r="1.6" />
        <path d="M16 13.8c1 .2 2 .8 2 1.9v1.3h-2.5v-3.2Z" />
      </svg>
    ),
    description: 'We focus all our efforts on delivering the most tailored service possible. We do not believe in standard solutions — our goal is to design strategies and responses customised to each company’s unique needs, providing guidance that is practical and relevant.',
    extendedDescription: 'By taking the time to understand each organisation’s context, challenges, and ambitions, we provide guidance that is practical and genuinely relevant. For businesses entering or expanding in Chile, this translates into clearer decision-making, smoother processes, and solutions that adapt as their operations grow. Our personalised approach ensures that every client feels supported at each stage of their journey.'
  },
  {
    title: 'Experts in the Chilean Market',
    icon: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--color-primary-complement)' }} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18.2c-4.53 0-8.2-3.67-8.2-8.2S7.47 3.8 12 3.8 20.2 7.47 20.2 12s-3.67 8.2-8.2 8.2z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10.5c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5 4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
    description: 'Our aim is to be the strategic partner of companies that recognise Chile’s potential. Our in-depth knowledge of local regulations, business culture, and market dynamics allows us to guide clients with confidence and accuracy.',
    extendedDescription: 'This expertise helps companies avoid common pitfalls, identify real opportunities, and make informed decisions from day one. By partnering with us, businesses gain a reliable advisor who understands the Chilean landscape and is dedicated to supporting their successful entry and long-term growth in the country.'
  }
];

const WhyChooseUs = () => {
  const [expanded, setExpanded] = useState({});
  const [headerRef, headerRevealed] = useIntersectionObserver({ threshold: 0.15 });
  const [gridRef, gridRevealed] = useIntersectionObserver({ threshold: 0.1 });

  const toggleExpand = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="section" style={{ position: 'relative', backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div 
          ref={headerRef}
          className={`text-center reveal-on-scroll ${headerRevealed ? 'revealed' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'var(--font-3xl)', marginBottom: '1.5rem', lineHeight: 'var(--lh-tight)', color: '#000', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            Why choose us to <span style={{ background: 'linear-gradient(180deg, transparent 55%, var(--color-accent) 55%)', padding: '0 0.3rem', borderRadius: '4px' }}>start your journey</span> in Chile?
          </h2>
          <p className="text-muted text-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Our firm stands out for three distinctive hallmarks: we are a boutique firm, we provide tailor-made services adapted to each company’s needs, and we are experts in Chilean regulation and the local market.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 grid-cols-md-3 gap-4" 
          style={{ alignItems: 'flex-start' }}
        >
          {pillars.map((pillar, index) => {
            const isExpanded = !!expanded[index];
            return (
              <div 
                key={index} 
                className={`card p-0 reveal-stagger-item ${gridRevealed ? 'revealed' : ''}`} 
                style={{ 
                  padding: '2.5rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem', 
                  backgroundColor: '#ffffff',
                  transitionDelay: gridRevealed ? `${index * 180}ms` : '0ms'
                }}
              >
                <div style={{ 
                  height: '50px', 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  flexShrink: 0
                }}>
                  {pillar.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--font-xl)', marginBottom: '0.75rem', color: '#000' }}>{pillar.title}</h3>
                  <p className="text-muted" style={{ fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: 0, color: '#4b5563' }}>
                    {pillar.description}
                  </p>
                  
                  {/* Expanded Section with transition */}
                  <div style={{
                    maxHeight: isExpanded ? '500px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, margin-top 0.3s ease',
                    marginTop: isExpanded ? '1rem' : '0px'
                  }}>
                    <p className="text-muted" style={{ fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: 0, color: '#4b5563' }}>
                      {pillar.extendedDescription}
                    </p>
                  </div>



                  <button 
                    onClick={() => toggleExpand(index)}
                    className={`btn-more ${isExpanded ? 'is-expanded' : ''}`}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--color-primary)',
                      fontWeight: 'var(--weight-semibold)',
                      fontSize: 'var(--font-sm)',
                      padding: 0,
                      marginTop: '1.25rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-title)',
                      alignSelf: 'flex-start',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    <span>{isExpanded ? 'Less' : 'More'}</span>
                    <span 
                      className="arrow-icon"
                      style={{ 
                        transform: isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)', 
                        transition: 'transform 0.3s ease',
                        display: 'inline-block'
                      }}
                    >
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .btn-more:hover {
          color: var(--color-primary-light) !important;
        }
        .btn-more:not(.is-expanded):hover .arrow-icon {
          transform: translateX(4px) !important;
        }
        .btn-more.is-expanded:hover .arrow-icon {
          transform: rotate(-90deg) translateY(-4px) !important;
        }
      `}} />
    </section>
  );
};

export default WhyChooseUs;
