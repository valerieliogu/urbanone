import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [activeLink, setActiveLink] = useState('home');

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">URBONE</div>
        
        <nav className="nav-links">
          <a 
            href="#home" 
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            HOME
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            ABOUT
          </a>
          <a 
            href="#catalog" 
            className={`nav-link ${activeLink === 'catalog' ? 'active' : ''}`}
            onClick={() => handleNavClick('catalog')}
          >
            CATALOG
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;