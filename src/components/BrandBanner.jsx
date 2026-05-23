
const BrandBanner = () => {
  return (
    <section 
      style={{ 
        backgroundColor: '#E4D9FF', 
        paddingTop: '6.8rem', 
        paddingBottom: '6.8rem', 
        paddingLeft: '2rem',
        paddingRight: '2rem',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '2rem',
          width: '100%',
          maxWidth: '960px'
        }}
      >
        <img 
          src="/images/logo-white-wordmark-highres.png" 
          alt="Quimera Logo" 
          style={{ 
            width: '74%', 
            maxWidth: '920px', 
            height: 'auto',
            objectFit: 'contain',
            display: 'block'
          }} 
        />
        <p 
          style={{ 
            color: '#ffffff', 
            fontSize: '1.1rem', 
            fontWeight: 'var(--weight-semibold)', 
            fontStyle: 'italic',
            fontFamily: 'var(--font-title)',
            letterSpacing: '0.04em',
            margin: 0,
            textShadow: '0 1px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          Your Boutique Gateway to the Chilean Market
        </p>
      </div>
    </section>
  );
};

export default BrandBanner;

