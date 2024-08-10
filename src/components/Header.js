import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="Header">
      <div className="logo">
        <img src="/images/logo.jpg" alt="Logo" />
      </div>
      <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <a href="/">Service</a>
        <a href="/tracking">Tracking</a>
        <a href="/partnership">Partnership</a>
        <a href="/company">Company</a>
        <a href="/support">Support</a>
        <div className="header-right">
          <a href="/login">Log in</a>
          <a href="/signup" className="signup-button">Sign Up</a>
        </div>
      </nav>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;
