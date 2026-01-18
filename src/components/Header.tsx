import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';  // ← This line fixes the error
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SOCIAL_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navigate = useNavigate();        // ← Hook to get the navigate function
  const { pathname } = useLocation();    // ← Hook to get current pathname

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium tracking-widest hover:text-gold transition-colors duration-300 pb-1 ${
      isActive ? 'text-dark border-b-2 border-gold' : 'text-gray-600'
    }`;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === '/') {
      window.location.reload(); // Full refresh when already on home
    } else {
      navigate('/');
    }
  };

  // Mobile nav item class for consistency
  const mobileNavClass = "text-3xl md:text-4xl font-serif text-dark hover:text-gold transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">

          {/* Branding / Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex flex-col justify-center cursor-pointer"
          >
            <span className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-dark font-semibold hover:text-gold transition-colors">
              ZIBUYILE GUMEDE
            </span>
            <span className="font-sans text-[10px] sm:text-xs tracking-[0.2em] text-gray-500 uppercase mt-1">
              Director of Photography
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink to="/films" className={navClass}>FILMS</NavLink>
            <NavLink to="/photography" className={navClass}>PHOTOGRAPHY</NavLink>
            <NavLink to="/" className={navClass}>ABOUT</NavLink>
            <NavLink to="/contact" className={navClass}>CONTACT</NavLink>
          </nav>

          {/* Desktop Right Side (Social + CV) */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition"><i className="fab fa-instagram text-lg"></i></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition"><i className="fab fa-linkedin-in text-lg"></i></a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition"><i className="fab fa-youtube text-lg"></i></a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-400 hover:text-gold transition"><i className="fas fa-envelope text-lg"></i></a>
              <a href={SOCIAL_LINKS.imdb} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition"><i className="fab fa-imdb text-lg"></i></a>
            </div>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gold text-gold text-xs font-bold tracking-widest hover:bg-gold hover:text-white transition duration-300 uppercase"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-dark hover:text-gold focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-10 px-8 md:hidden">
          <nav className="flex flex-col items-center space-y-8">
            <NavLink 
              to="/films" 
              onClick={toggleMenu} 
              className={mobileNavClass}
            >
              FILMS
            </NavLink>
            <NavLink 
              to="/photography" 
              onClick={toggleMenu} 
              className={mobileNavClass}
            >
              PHOTOGRAPHY
            </NavLink>
            <NavLink 
              to="/" 
              onClick={toggleMenu} 
              className={mobileNavClass}
            >
              ABOUT
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={toggleMenu} 
              className={mobileNavClass}
            >
              CONTACT
            </NavLink>
          </nav>

          <div className="flex flex-col items-center space-y-8 mt-8">
            <div className="flex space-x-6">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition text-2xl"><i className="fab fa-instagram"></i></a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition text-2xl"><i className="fab fa-linkedin-in"></i></a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition text-2xl"><i className="fab fa-youtube"></i></a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-400 hover:text-gold transition text-2xl"><i className="fas fa-envelope"></i></a>
              <a href={SOCIAL_LINKS.imdb} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition text-2xl"><i className="fab fa-imdb"></i></a>
            </div>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gold text-gold text-lg font-bold tracking-widest hover:bg-gold hover:text-white transition duration-300 uppercase"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;