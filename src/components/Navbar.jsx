// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <a href="#" className="navbar-logo">
        My Portfolio
        </a>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#certifications" className="nav-link" onClick={toggleMenu}>
              Certifications
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;