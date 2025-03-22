import React, { useState } from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
import eosLogo from '../assets/eos.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="M-Dance Logo" />
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
              Domů
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/uspechy" className="nav-link" onClick={() => setIsOpen(false)}>
              Soutěžní úspěchy
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/treneri" className="nav-link" onClick={() => setIsOpen(false)}>
              Naši trenéři
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/kontakty" className="nav-link" onClick={() => setIsOpen(false)}>
              Kontakty
            </Link>
          </li>
          <li className="nav-item">
            <a 
              href="https://eos.m-dance.cz/" 
              className="nav-link eos-link" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <img src={eosLogo} alt="EOS" className="eos-image" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;