import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="hero-section" 
      style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#06040b',
        overflow: 'hidden',
        color: '#fff',
        paddingTop: '100px',
        paddingBottom: '60px'
      }}
    >
      {/* Preloaded High-Priority Background Image */}
      <img
        src="/images/hero-image-quimera.webp"
        alt="Quimera Background"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0
        }}
      />
      {/* Dark Overlay Gradient */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75))',
          zIndex: 1
        }}
      />
      <div className="container text-center flex flex-col align-center justify-center" style={{ zIndex: 2 }}>
        <h1 
          style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', 
            marginBottom: '1.5rem', 
            lineHeight: '1.2',
            color: '#fff',
            maxWidth: '900px',
            textTransform: 'uppercase',
            fontWeight: 'var(--weight-extrabold)',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}
        >
          Connecting Your <span style={{
            background: 'linear-gradient(135deg, #ffffff 10%, #bfa3ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>Business With</span><br />
          <span style={{
            background: 'linear-gradient(180deg, #ffffff 20%, rgba(255, 255, 255, 0.25) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block'
          }}>The Chilean Market</span>
        </h1>
        
        <p 
          style={{ 
            fontSize: 'var(--font-lg)', 
            marginBottom: '2.5rem', 
            maxWidth: '750px',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.6',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}
        >
          Quimera Consulting Group is a specialized boutique consultancy dedicated to helping <strong>foreign companies establish and thrive in the Chilean market</strong>.
        </p>
        
        <div className="flex gap-2 justify-center flex-wrap">
          <Link viewTransition to="/contact" className="btn btn-gradient">Stay in contact</Link>
          <a href="#services" className="btn btn-outline-white">Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
