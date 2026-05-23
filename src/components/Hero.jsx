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
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url(/images/hero-image-quimera.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        color: '#fff',
        paddingTop: '100px',
        paddingBottom: '60px'
      }}
    >
      <div className="container text-center flex flex-col align-center justify-center" style={{ zIndex: 2 }}>
        <span 
          className="badge badge-accent" 
          style={{ 
            marginBottom: '1.5rem', 
            backgroundColor: 'var(--color-accent)', 
            color: 'var(--color-primary-dark)',
            alignSelf: 'center'
          }}
        >
          Your Boutique Gateway
        </span>
        
        <h1 
          style={{ 
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', 
            marginBottom: '1.5rem', 
            lineHeight: '1.2',
            color: '#fff',
            maxWidth: '900px',
            textTransform: 'uppercase',
            fontWeight: 'var(--weight-bold)',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}
        >
          Connecting Your Business With<br />The Chilean Market
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
