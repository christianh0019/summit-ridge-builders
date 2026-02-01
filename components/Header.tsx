import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES, LOCATIONS } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);

  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Determine styles based on state
  const isDarkText = isScrolled || isMobileMenuOpen;

  const headerBaseClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300`;
  const headerStateClass = isScrolled || isMobileMenuOpen
    ? 'bg-white shadow-md py-2'
    : 'bg-gradient-to-b from-black/60 to-transparent py-4 backdrop-blur-[2px]';

  const navLinkClass = `text-sm font-semibold transition-colors ${isDarkText ? 'text-secondary hover:text-primary' : 'text-white/90 hover:text-accent'
    }`;

  return (
    <header className={`${headerBaseClass} ${headerStateClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex flex-col z-50 relative group">
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors ${isDarkText ? 'text-secondary group-hover:text-primary' : 'text-white group-hover:text-accent'
              }`}>
              Summit Ridge
            </span>
            <span className={`text-[10px] md:text-xs tracking-widest uppercase font-bold transition-colors ${isDarkText ? 'text-primary' : 'text-white/80'
              }`}>
              Builders
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={navLinkClass}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group py-4"
              onMouseEnter={() => setActiveDesktopMenu('services')}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${isDarkText ? 'text-secondary group-hover:text-primary' : 'text-white/90 group-hover:text-accent'
                }`}>
                Services <ChevronDown size={14} />
              </button>

              {/* Mega Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl border-t-4 border-primary rounded-b-lg p-6 grid grid-cols-2 gap-4 transition-all duration-200 transform origin-top ${activeDesktopMenu === 'services' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}>
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 group/item"
                  >
                    <div className="p-2 bg-blue-50 text-primary rounded-md group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                      <service.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover/item:text-primary">{service.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative group py-4"
              onMouseEnter={() => setActiveDesktopMenu('locations')}
              onMouseLeave={() => setActiveDesktopMenu(null)}
            >
              <button className={`flex items-center gap-1 text-sm font-semibold transition-colors ${isDarkText ? 'text-secondary group-hover:text-primary' : 'text-white/90 group-hover:text-accent'
                }`}>
                Locations <ChevronDown size={14} />
              </button>

              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white shadow-xl border-t-4 border-primary rounded-b-lg py-2 transition-all duration-200 transform origin-top ${activeDesktopMenu === 'locations' ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}>
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc}
                    href="#contact"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                  >
                    {loc}
                  </a>
                ))}
              </div>
            </div>

            <a href="/#portfolio" className={navLinkClass}>
              Portfolio
            </a>

            <a href="/#about" className={navLinkClass}>
              About
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className={`flex items-center gap-2 font-bold text-sm transition-colors ${isDarkText ? 'text-secondary hover:text-primary' : 'text-white/90 hover:text-accent'
                }`}
            >
              <Phone size={16} className={isDarkText ? "text-accent" : "text-white"} />
              {COMPANY_INFO.phone}
            </a>
            <Button
              variant={isDarkText ? 'primary' : 'white'}
              onClick={() => window.location.href = '#contact'}
            >
              Start Feasibility Study
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 z-50 transition-colors ${isDarkText ? 'text-secondary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out flex flex-col pt-24 pb-8 px-6 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <nav className="flex-1 flex flex-col gap-6">
          <Link
            to="/"
            className="text-2xl font-serif font-bold text-secondary border-b border-gray-100 pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="border-b border-gray-100 pb-4">
            <button
              className="flex items-center justify-between w-full text-2xl font-serif font-bold text-secondary mb-4"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronRight size={20} className={`transform transition-transform ${mobileServicesOpen ? 'rotate-90' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-3 pl-4">
                {SERVICES.map(service => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="text-gray-600 text-lg py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Locations Accordion */}
          <div className="border-b border-gray-100 pb-4">
            <button
              className="flex items-center justify-between w-full text-2xl font-serif font-bold text-secondary mb-4"
              onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
            >
              Locations
              <ChevronRight size={20} className={`transform transition-transform ${mobileLocationsOpen ? 'rotate-90' : ''}`} />
            </button>
            {mobileLocationsOpen && (
              <div className="flex flex-col gap-3 pl-4">
                {LOCATIONS.map(loc => (
                  <a
                    key={loc}
                    href="#contact"
                    className="text-gray-600 text-lg py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {loc}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/#portfolio"
            className="text-2xl font-serif font-bold text-secondary border-b border-gray-100 pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="/#about"
            className="text-2xl font-serif font-bold text-secondary border-b border-gray-100 pb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
        </nav>

        {/* Mobile CTA Stack */}
        <div className="flex flex-col gap-4 mt-8">
          <Button fullWidth onClick={() => {
            window.location.href = '#contact';
            setIsMobileMenuOpen(false);
          }}>
            Book Consultation
          </Button>
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-secondary text-white font-bold rounded shadow-lg"
          >
            <Phone size={18} />
            Call Now: {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </header>
  );
};