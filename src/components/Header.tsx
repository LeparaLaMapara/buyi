import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SOCIAL_LINKS} from '../constants';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium tracking-widest hover:text-gold transition-colors duration-300 pb-1 ${
      isActive ? 'text-dark border-b-2 border-gold' : 'text-gray-600'
    }`;
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
             {/* Branding */}
        <div className="flex flex-col">
          <a 
            href="/" 
            onClick={handleLogoClick}
            className="font-serif text-2xl md:text-3xl tracking-tight text-dark font-semibold cursor-pointer hover:text-gold-hover transition-colors"
          >
            ZIBUYILE GUMEDE
          </a>
          <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase mt-1">
            Director of Photography
          </span>
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <NavLink to="/films" className={navClass}>FILMS</NavLink>
            <NavLink to="/photography" className={navClass}>PHOTOGRAPHY</NavLink>
            <NavLink to="/" className={navClass}>ABOUT</NavLink>
            <NavLink to="/contact" className={navClass}>CONTACT</NavLink>
          </nav>

          {/* Right Action (CV) */}
          <div className="hidden md:flex items-center space-x-6">
             <div className="flex space-x-4">
                {/* Simple Social Icons */}
                <a href={SOCIAL_LINKS.instagram} className="text-gray-400 hover:text-gold transition"><span className="sr-only">Instagram</span><i className="fab fa-instagram text-lg"></i></a>
                <a href={SOCIAL_LINKS.linkedin} className="text-gray-400 hover:text-gold transition"><span className="sr-only">LinkedIn</span><i className="fab fa-linkedin-in text-lg"></i></a>
                <a href={SOCIAL_LINKS.youtube} className="text-gray-400 hover:text-gold transition"><span className="sr-only">YouTube</span><i className="fab fa-youtube text-lg"></i></a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-gray-400 hover:text-gold transition"><span className="sr-only">Gmail</span><i className="fas fa-envelope text-lg"></i></a>
                <a href={SOCIAL_LINKS.imdb} className="text-gray-400 hover:text-gold transition" target="_blank" rel="noopener noreferrer"><span className="sr-only">IMDb</span><i className="fab fa-imdb text-lg"></i></a>
             </div>
             <a href="/resume.pdf" className="px-4 py-2 border border-gold text-gold text-xs font-bold tracking-widest hover:bg-gold hover:text-white transition duration-300 uppercase">
               Download CV
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button onClick={toggleMenu} className="text-dark hover:text-gold focus:outline-none">
              {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <NavLink onClick={toggleMenu} to="/" className="text-2xl font-serif text-dark hover:text-gold">FILMS</NavLink>
        <NavLink onClick={toggleMenu} to="/photography" className="text-2xl font-serif text-dark hover:text-gold">PHOTOGRAPHY</NavLink>
        <NavLink onClick={toggleMenu} to="/about" className="text-2xl font-serif text-dark hover:text-gold">ABOUT</NavLink>
        <NavLink onClick={toggleMenu} to="/contact" className="text-2xl font-serif text-dark hover:text-gold">CONTACT</NavLink>
        <a href="#" className="mt-8 px-6 py-3 border border-gold text-gold font-bold tracking-widest uppercase">Download CV</a>
      </div>
    </header>
  );
};

export default Header;