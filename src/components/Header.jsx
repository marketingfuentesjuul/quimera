import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const isTeamPage = pathname === '/team'
  const isContactPage = pathname === '/contact'
  const isVerificationPage = pathname === '/chilean-company-verification'
  const isSpecialHeader = isTeamPage || isContactPage || isVerificationPage

  // CONFIGURACIÓN DINÁMICA DE NAVEGACIÓN Y MENÚ
  const isSpecialRoute = pathname.includes('/ruta-especial') || pathname.includes('/admin')

  // Enlaces de navegación condicionales
  const navLinks = isSpecialRoute
    ? [
        { name: 'VOLVER AL INICIO', path: '/', isScroll: false },
        { name: 'AYUDA', path: '/ayuda', isScroll: false }
      ]
    : [
        { name: 'HOME', path: '#top', isScroll: true },
        {
          name: 'SERVICES',
          path: '#services',
          isScroll: true,
          hasDropdown: true,
          submenu: [
            { name: 'Chilean Company Verification', path: '/chilean-company-verification', isRoute: true },
            { name: 'Compliance', path: '#services', isScroll: true }
          ]
        },
        { name: 'TEAM', path: '/team', isScroll: false, isRoute: true }
      ]

  // Botón CTA condicional basado en la ruta
  const ctaButton = isSpecialRoute
    ? { text: 'Panel de Control', path: '/dashboard', isScroll: false }
    : { text: 'STAY IN CONTACT', path: '/contact', isScroll: false, isRoute: true }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Efecto para hacer scroll suave al cargar o cambiar a la página de inicio con un hash
  useEffect(() => {
    if (pathname === '/' && hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [pathname, hash])

  // Manejador de scroll suave para enlaces tipo ancla
  const handleScrollTo = (e, targetId) => {
    if (targetId.startsWith('#')) {
      e.preventDefault()
      setMobileMenuOpen(false)

      if (pathname !== '/') {
        // Redirigir a la página de inicio con el targetId como hash
        navigate('/' + (targetId === '#top' ? '' : targetId), { viewTransition: true })
        return
      }

      if (targetId === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const element = document.querySelector(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className={`${isContactPage ? 'absolute' : 'fixed'} w-full z-50 transition-all duration-500 flex justify-center ${
      scrolled ? 'top-[18px]' : 'top-0 md:top-[18px]'
    }`}>
      <div
        className={`transition-all duration-500 ${
          isSpecialHeader
            ? 'mx-4 w-[calc(100%-3rem)] max-w-5xl rounded-full px-8 md:px-12'
            : scrolled
              ? 'mx-4 w-[calc(100%-3rem)] max-w-5xl md:bg-white/10 md:backdrop-blur-2xl md:shadow-[0_12px_40px_rgba(0,0,0,0.25)] md:border md:border-white/15 rounded-full py-3 px-6 md:px-12 mobile-scrolled-lilac desktop-scrolled-lilac'
              : 'mx-0 w-full md:mx-4 md:w-[calc(100%-2rem)] max-w-7xl md:bg-transparent md:border md:border-transparent py-4 px-6 md:py-6 md:px-4 mobile-unscrolled-lilac'
        }`}
        style={
          isSpecialHeader
            ? {
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                paddingTop: '12px',
                paddingBottom: '12px',
              }
            : scrolled
              ? {
                  paddingTop: '12px',
                  paddingBottom: '12px',
                }
              : {}
        }
      >
        <nav className="w-full flex justify-between items-center font-['Outfit'] text-sm font-medium tracking-tight">
          
          {/* Logo con redimensionamiento suave */}
          <div className="flex items-center shrink-0">
            <Link viewTransition to="/" onClick={(e) => handleScrollTo(e, '#top')} className="flex items-center">
              <div className={`relative transition-all duration-500 ${
                isSpecialHeader || scrolled ? 'h-[28px] w-[84px] translate-x-[20px] translate-y-[2px]' : 'h-[44px] w-[130px]'
              }`}>
                {/* Logo para móvil */}
                <img
                  src="/images/logo-white-wordmark.png"
                  alt="Quimera Logo Mobile"
                  className="logo-mobile-only absolute top-0 left-0 h-full w-auto object-contain"
                />
                {/* Logo para escritorio (fijo/scrolled) */}
                <img
                  src={isSpecialHeader ? "/images/logo-scrolled.png" : scrolled ? "/images/logo-scrolled.png" : "/images/logo-uploaded.png"}
                  alt="Quimera Logo Desktop"
                  className="logo-desktop-only absolute top-0 left-0 h-full w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Menú de Nave de Escritorio sin traslación vertical innecesaria */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="group relative py-2 cursor-pointer font-['Outfit'] text-xs font-semibold tracking-wider transition-all duration-300 !text-white/90 hover:!text-white flex items-center">
                    <span>{link.name}</span>
                    <span className="ml-1 text-[9px] align-middle inline-block transition-transform duration-300 group-hover:rotate-180">▼</span>
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 group-hover:w-4/5 ${
                      scrolled ? 'bg-[var(--color-accent)]' : 'bg-white'
                    }`} />
                    
                    {/* Dropdown Menu Wrapper (pt-2 acts as a hover bridge) */}
                    <div 
                      className="absolute top-full pt-2 w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"
                      style={{ left: '50%', transform: 'translateX(-50%)' }}
                    >
                      <div className="bg-[#0f0b21]/95 backdrop-blur-3xl border border-white/10 rounded-2xl px-6 py-0 shadow-[0_24px_50px_rgba(0,0,0,0.65)] flex flex-col items-stretch">
                        <Link
                          viewTransition
                          to="/chilean-company-verification"
                          onClick={() => setMobileMenuOpen(false)}
                          className="w-full text-left text-white hover:text-[#bfa3ff] font-['Outfit'] text-[14px] font-semibold leading-snug tracking-wide block transition-colors duration-200 py-5"
                          style={{ textAlign: 'left', display: 'block', width: '100%', paddingLeft: '9px' }}
                        >
                          Chilean Company<br />Verification
                        </Link>
                        
                        <div className="border-t border-dashed border-white/15 w-full"></div>
                        
                        <a
                          href="#services"
                          onClick={(e) => handleScrollTo(e, '#services')}
                          className="w-full text-left text-white hover:text-[#bfa3ff] font-['Outfit'] text-[14px] font-semibold leading-snug tracking-wide block transition-colors duration-200 py-5"
                          style={{ textAlign: 'left', display: 'block', width: '100%', paddingLeft: '9px' }}
                        >
                          Compliance
                        </a>
                      </div>
                    </div>
                  </div>
                )
              }

              return link.isRoute ? (
                <Link
                  viewTransition
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group relative py-2 font-['Outfit'] text-xs font-semibold tracking-wider transition-all duration-300 !text-white/90 hover:!text-white"
                >
                  <span>{link.name}</span>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 group-hover:w-4/5 ${
                    scrolled ? 'bg-[var(--color-accent)]' : 'bg-white'
                  }`} />
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => link.isScroll ? handleScrollTo(e, link.path) : null}
                  className="group relative py-2 font-['Outfit'] text-xs font-semibold tracking-wider transition-all duration-300 !text-white/90 hover:!text-white"
                >
                  <span>{link.name}</span>
                  {/* Indicador de Underline Premium */}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] transition-all duration-300 group-hover:w-4/5 ${
                    scrolled ? 'bg-[var(--color-accent)]' : 'bg-white'
                  }`} />
                </a>
              )
            })}
          </div>

          {/* Botón CTA e Icono de Hamburguesa alineados perfectamente al centro */}
          <div className="flex items-center gap-4 shrink-0">
            {/* CTA — wrapper hidden on mobile/tablet, visible on desktop only */}
            <div className="hidden lg:block">
              {ctaButton.isRoute ? (
                <Link
                  viewTransition
                  to={ctaButton.path}
                  className={`inline-flex items-center justify-center btn btn-gradient !rounded-full font-bold tracking-wider shadow-lg hover:scale-95 active:scale-90 transition-all duration-200 ${
                    (isContactPage || isVerificationPage)
                      ? '!px-4 !py-1.5 !text-[9px] -translate-x-[30px]'
                      : isTeamPage
                        ? '!px-4 !py-1.5 !text-[9px] -translate-x-[20px]'
                        : scrolled
                          ? '!px-4 !py-1.5 !text-[9px] -translate-x-[20px]'
                          : '!px-6 !py-3 !text-[13px]'
                  }`}
                >
                  {ctaButton.text}
                </Link>
              ) : (
                <a
                  href={ctaButton.path}
                  onClick={(e) => ctaButton.isScroll ? handleScrollTo(e, ctaButton.path) : null}
                  className={`inline-flex items-center justify-center btn btn-gradient !rounded-full font-bold tracking-wider shadow-lg hover:scale-95 active:scale-90 transition-all duration-200 ${
                    (isContactPage || isVerificationPage)
                      ? '!px-4 !py-1.5 !text-[9px] -translate-x-[30px]'
                      : isTeamPage
                        ? '!px-4 !py-1.5 !text-[9px] -translate-x-[20px]'
                        : scrolled
                          ? '!px-4 !py-1.5 !text-[9px] -translate-x-[20px]'
                          : '!px-6 !py-3 !text-[13px]'
                  }`}
                >
                  {ctaButton.text}
                </a>
              )}
            </div>

            {/* Hamburguesa para móvil */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full transition-colors duration-300 text-white hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </nav>
      </div>

      {/* Menú Desplegable Móvil con Glassmorphism */}
      <div
        className={`md:hidden absolute left-4 right-4 top-full mt-2 rounded-[2rem] p-6 transition-all duration-300 ${
          isSpecialHeader || scrolled ? 'mobile-dropdown-scrolled-lilac' : 'mobile-dropdown-unscrolled-lilac'
        } ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4 text-center">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="flex flex-col border-b border-slate-100/50 py-2">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="text-sm font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] flex justify-between items-center w-full transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <span className={`text-[10px] transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  
                  {/* Collapsible Submenu */}
                  <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-2 pl-4 ${
                    mobileServicesOpen ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    {link.submenu.map((sub) => (
                      sub.isRoute ? (
                        <Link
                          viewTransition
                          key={sub.name}
                          to={sub.path}
                          onClick={() => {
                            setMobileMenuOpen(false)
                            setMobileServicesOpen(false)
                          }}
                          className="text-xs font-semibold text-[var(--color-primary-dark)]/80 hover:text-[var(--color-primary)] py-1.5 transition-colors duration-300 text-left"
                        >
                          {sub.name}
                        </Link>
                      ) : (
                        <a
                          key={sub.name}
                          href={sub.path}
                          onClick={(e) => {
                            handleScrollTo(e, sub.path)
                            setMobileMenuOpen(false)
                            setMobileServicesOpen(false)
                          }}
                          className="text-xs font-semibold text-[var(--color-primary-dark)]/80 hover:text-[var(--color-primary)] py-1.5 transition-colors duration-300 text-left"
                        >
                          {sub.name}
                        </a>
                      )
                    ))}
                  </div>
                </div>
              )
            }

            return link.isRoute ? (
              <Link
                viewTransition
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] py-2 border-b border-slate-100/50 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => link.isScroll ? handleScrollTo(e, link.path) : null}
                className="text-sm font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary)] py-2 border-b border-slate-100/50 transition-colors duration-300"
              >
                {link.name}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Header
