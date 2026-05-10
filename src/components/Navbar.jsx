import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import eosLogo from '../assets/eos.png';
import './Navbar.css';
import { ENABLED_FEATURES } from '../config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" aria-label="Hlavní navigace">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="M-Dance — domovská stránka" onClick={closeMenu}>
          <img src={logo} alt="M-Dance" width="180" height="60" />
        </Link>

        <button
          type="button"
          className="menu-icon"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
          <span className={isOpen ? 'menu-icon-bar open' : 'menu-icon-bar'}></span>
        </button>

        <ul id="primary-navigation" className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
              Domů
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/o-nas" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
              O nás
            </NavLink>
          </li>
          {ENABLED_FEATURES.ACHIEVEMENTS && (
            <li className="nav-item">
              <NavLink to="/uspechy" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
                Soutěžní úspěchy
              </NavLink>
            </li>
          )}
          {ENABLED_FEATURES.TRAINERS && (
            <li className="nav-item">
              <NavLink to="/treneri" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
                Naši trenéři
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink to="/kontakty" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={closeMenu}>
              Kontakty
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="https://eos.m-dance.cz/"
              className="nav-link eos-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="EOS — externí systém"
              onClick={closeMenu}
            >
              <img src={eosLogo} alt="EOS" className="eos-image" width="40" height="24" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
