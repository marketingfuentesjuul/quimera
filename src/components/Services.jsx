import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    title: 'Corporate Legal Services',
    description: 'The first essential step to expanding your operations into Chile is to establish a legal entity in the country. With our Company Formation service, your business will be fully prepared to begin operating in Chile.',
    image: '/images/pexels-alishalubben-2017747.jpg'
  },
  {
    title: 'Accounting',
    description: 'Once your company is fully established in Chile and begins commercial operations, you will need to comply with all the accounting obligations required for businesses in the country. With our «Business as Usual» service, we take care of the main accounting milestones.',
    image: '/images/pexels-csaba-marosi-2147694429-29713860.jpg'
  },
  {
    title: 'Marketing',
    description: 'Whenever a company enters a new market, it is very difficult to succeed with generic commercial strategies. We support your marketing team through audits and the development of tailored strategies, ensuring an effective entry into the Chilean market.',
    image: '/images/pexels-diesgomo-14379466.jpg'
  }
];

const Services = () => {
  const [headerRef, headerRevealed] = useIntersectionObserver({ threshold: 0.15 });
  const [gridRef, gridRevealed] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div 
          ref={headerRef}
          className={`text-center reveal-on-scroll ${headerRevealed ? 'revealed' : ''}`}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'var(--font-3xl)', marginBottom: '1rem', color: '#000' }}>
            How can we help your company <span style={{ background: 'linear-gradient(180deg, transparent 55%, var(--color-accent) 55%)', padding: '0 0.3rem', borderRadius: '4px' }}>begin operations in Chile</span>?
          </h2>
          <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Discover how our comprehensive solutions empower your journey.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 grid-cols-md-3 gap-4"
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`card p-0 reveal-stagger-item ${gridRevealed ? 'revealed' : ''}`} 
              style={{ 
                padding: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                overflow: 'hidden',
                transitionDelay: gridRevealed ? `${index * 180}ms` : '0ms'
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-img"
                />
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: 'var(--font-xl)', marginBottom: '1rem', color: '#000' }}>
                  <span style={{ textDecoration: 'underline', textDecorationColor: '#ffd043', textUnderlineOffset: '6px', textDecorationThickness: '3px' }}>
                    {service.title}
                  </span>
                </h3>
                <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.65', color: '#374151', marginBottom: 0, flex: 1 }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

