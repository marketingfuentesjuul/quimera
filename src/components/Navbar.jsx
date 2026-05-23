import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container flex justify-between align-center" style={{ position: 'relative' }}>
        <div className="navbar-brand">
          <a href="#">
            <img 
              src="/images/logo-quimera-consulting-group-white.png" 
              alt="Quimera Consulting Group Logo" 
              style={{ 
                height: scrolled ? '42px' : '50px', 
                transition: 'all 0.3s ease'
              }} 
            />
          </a>
        </div>
        <div className="navbar-links flex gap-2">
          <a href="#" className="nav-link">HOME</a>
          <a href="#services" className="nav-link flex align-center gap-1">
            SERVICES <span style={{ fontSize: '10px' }}>▼</span>
          </a>
          <a href="#team" className="nav-link">TEAM</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
